<template>
    <div class="tl-slide-container" ref="slide" @mouseleave="swipeOut">
        <div class="tl-slide-touch"
			ref="touch"
            @touchstart="onSwipeStart"
            @touchmove="onSwipeMove"
            @touchend="onSwipeEnd"
            @mousedown="onSwipeStart"
            @mousemove="onSwipeMove"
            @mouseup="onSwipeEnd"
            @webkit-transition-end="onTrasnitionEnd"
            @transitionend="onTrasnitionEnd"
            :style="style"
        >
            <div class="tl-slide-wapper" :class="direction" ref="slideWraper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import utilsMixin from './utils.mixin';

const isPassive = () => {
    let supportsPassiveOption = false;
    try {
        addEventListener("tl_slide_test_passive", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}

const supportsPassiveOption = (passive) => isPassive() ? { passive } : passive;

export default {
    mixins: [utilsMixin],
    props: {
        loop: {
            type: Boolean,
            default: false,
        },
        direction: {
            type: String,
            default: 'horizontal', // vertical
        },
        autoplay: {
            type: Number,
            default: 0,
        },
        disableTouch: {
            type: Boolean,
            default: false,
        },
		threshold: {
			type: Number,
			default: 0.1,
		},
    },
    data() {
        return {
            isAction: false,
            isAnimateIng: false,
            startValue: 0,
            moveValue: 0,
            slideValue: 0,
            startOffset: 0,

            containerWidth: 0,
            containerHeight: 0,

            maxDistance: 0,
            thresholdDistance: 0,
            currentNow: 0,
            style: {},

            childLength: 0,
            slideWraper: null,
			argsValueResetCount: 10,

			disableMove: false,
        };
    },

    computed: {
        isHorizontal() {
            return this.direction === 'horizontal';
        },
    },

    mounted() {
        document.body.addEventListener('touchstart', () => { });
        this.slideWraper = this.$refs.slideWraper;
		document.body.addEventListener('touchmove', this.onDocumentMove, supportsPassiveOption(false));
    },

    methods: {
        onSlideItemMounted() {
            this.slideWraper = this.$refs.slideWraper;
            if (this.childLength !== this.slideWraper.children.length) {
                this.childLength = this.slideWraper.children.length;
                this.setConfig();
            }
        },
        setArgsValue() {
            const bound = this.$el.getBoundingClientRect();
            this.containerWidth = bound.width;
            this.containerHeight = bound.height;

            if (this.containerWidth === 0 || this.containerHeight === 0 && this.argsValueResetCount > 0) {
                setTimeout(() => {
					this.argsValueResetCount--;
                    this.setArgsValue();
                }, 100);
            }

            if (this.isHorizontal) {
                this.maxDistance = (this.childLength - 1) * this.containerWidth;
                this.thresholdDistance = this.containerWidth * this.threshold;
            } else {
                this.maxDistance = (this.childLength - 1) * this.containerHeight;
                this.thresholdDistance = this.containerHeight * this.threshold;
            }
        },

        setConfig() {
            this.setArgsValue();
            if (this.loop) {
                this.onLoopCopyElement();
                this.currentNow = 1;
                this.action(false);
            }

            if (this.autoplay) {
                this.onAutoPlay();
            }
        },

        onAutoPlay() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.onAutoPlay();
                this.next();
            }, this.autoplay);
        },

		onDocumentMove(e) {
			if (e.cancelable && this.disableMove) {
                // 判断默认行为是否已经被禁用
                if (!e.defaultPrevented) {
                    e.preventDefault();
                }
            }
		},

        onSwipeStart(e) {
            if (this.disableTouch) return;
            if (this.isAnimateIng) return;
            this.isAction = true;
            const offset = this.offset(e);
            this.startValue = this.isHorizontal ? offset.x : offset.y;
			this.startOffset = offset;
			if (!this.isHorizontal) {
				e.preventDefault();
			}
        },

        onSwipeMove(e) {
            if (this.disableTouch) return;
            if (!this.isAction) return;
            const offset = this.offset(e);
            let delta = 0;

            if (!this.isHorizontal && Math.abs(offset.y - this.startValue) < 10) {
				return;
			} else if (this.isHorizontal) {
				const y = Math.abs(offset.y - this.startOffset.y);
				const x = Math.abs(offset.x - this.startOffset.x);

				if (y > x) return;
				if (x > y && !this.disableMove) {
					this.disableMove = true;	
				}
			} else if (!this.isHorizontal) {
				this.disableMove = true;
			}

            if (this.isHorizontal) {
                delta = offset.x - this.startValue;
            } else {
                delta = offset.y - this.startValue;
            }

            let value = this.moveValue + delta;

            if (value > 0) {
                value *= 0.2;
                this.slideValue = delta * 0.2;
            } else if (Math.abs(value) > this.maxDistance) {
                value = -(this.maxDistance - delta * 0.2);
                this.slideValue = delta * 0.2;
            } else {
                this.slideValue = delta;
            }
            this.slide(value);
        },

        onSwipeEnd(e) {
			this.disableMove = false;

            if (this.disableTouch) return;
            if (this.isAnimateIng) return;
            this.isAction = false;
            const offset = this.offset(e);
            const delta = this.slideValue;

			if (delta === 0) return;

			if (this.isHorizontal) {
				const y = Math.abs(offset.y - this.startOffset.y);
				const x = Math.abs(offset.x - this.startOffset.x);
				if (x < y) {
					this.action();
					return;
				}
			} else if(offset.y === this.startValue) {
				return;
			}

            if (delta < 0 && Math.abs(delta) > this.thresholdDistance) {
                this.next();
            } else if (delta > 0 && delta > this.thresholdDistance) {
                this.prev();
            } else {
                this.action();
            }
        },

        swipeOut(e) {
            if (this.$el === e.target && this.isAction) {
                this.onSwipeEnd(e);
            }
        },

        onLoopCopyElement() {
            if (!this.loop) return;
            const copyNode = this.$el.querySelectorAll('.tl-slide-copy-item');
            if (copyNode && copyNode.length) {
                for (let i = 0; i < copyNode.length; i++) {
                    this.slideWraper.removeChild(copyNode[i]);
                }
            }

            const children = this.slideWraper.querySelectorAll('.tl-slide-item:not(.tl-slide-copy-item)');
            const first = children[0].cloneNode(true);
            const last = children[children.length - 1].cloneNode(true);
            first.classList.add('tl-slide-copy-item');
            last.classList.add('tl-slide-copy-item');

            this.slideWraper.insertAdjacentElement('afterbegin', last);
            this.slideWraper.insertAdjacentElement('beforeend', first);
        },

        onTrasnitionEnd() {
            if (this.loop) {
                if (this.currentNow === this.childLength - 1) {
                    this.currentNow = 1;
                    this.action(false);
                } else if (this.currentNow === 0) {
                    this.currentNow = this.childLength - 2;
                    this.action(false);
                }
            }
        },

        next() {
            this.currentNow++;
            if (this.loop && this.currentNow >= this.childLength) {
                this.currentNow = this.childLength - 1;
            }
			if (!this.loop && this.currentNow >= this.childLength) {
				this.currentNow = this.childLength - 1;
				this.action();
				return;
			}
			this.currentNow %= this.childLength;
            this.action();
        },

        prev() {
            this.currentNow--;
            if (this.currentNow < 0) {
                this.currentNow = 0;
            }

            this.action();
        },

        action(animate = true) {
            let value = 0;
            if (this.isHorizontal) {
                value = -(this.currentNow * this.containerWidth);
            } else {
                value = -(this.currentNow * this.containerHeight);
            }
            this.slide(value, animate, {
                isEnd: true,
            });
            this.moveValue = value;
        },

        slide(delta, animate, opt = {
            isEnd: false,
        }) {
            const body = {
                transform: this.isHorizontal ? `translate3d(${delta}px, 0px, 0px)` : `translate3d(0px, ${delta}px, 0px)`,
            };
            if (animate) {
                body.transition = '300ms';
                this.isAnimateIng = true;
                setTimeout(() => {
                    this.isAnimateIng = false;
                    this.$emit('slide', this.currentNow);
                    if (opt.isEnd) {
                        this.$emit('slideEnd', this.currentNow);
                    }
                }, 300);
            } else {
                this.$emit('slide', this.currentNow);
                if (opt.isEnd) {
                    this.$emit('slideEnd', this.currentNow);
                }
            }
            this.style = this.setTransform(body);
        },

        slideTo(num, isAnimate = true) {
            this.currentNow = num;
            this.action(isAnimate);
        },
    },

    destroyed() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    },
};
</script>

<style>
.tl-slide-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.tl-slide-container .tl-slide-touch {
    width: 100%;
    height: 100%;
}
.tl-slide-container .tl-slide-wapper {
    display: flex;
    height: 100%;
}
.tl-slide-container .tl-slide-wapper.vertical {
    display: flex;
    flex-direction: column;
}
</style>
