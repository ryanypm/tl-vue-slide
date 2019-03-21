const utilsMixin = {
	methods: {
		setTransform(style) {
			const newStyle = {};
			Object.keys(style).forEach((key) => {
				newStyle[key] = style[key];
				['webkit', 'ms', 'moz'].reduce((doc, prefix) => {
					newStyle[`${prefix}${key.charAt(0).toUpperCase()}${key.slice(1)}`] = style[key];
					return newStyle;
				}, newStyle);
			});
			return newStyle;
		},

		isTouch(event) {
			return ['touchstart', 'touchmove', 'touchend'].includes(event.type);
		},

		offset(e) {
			if (this.isTouch(e) && e.clientX === undefined && e.clientY === undefined) {
				const touch = e.touches[0] || e.changedTouches[0];
				return {
					x: touch ? touch.clientX : 0,
					y: touch ? touch.clientY : 0,
				};
			}

			return {
				x: e.clientX,
				y: e.clientY,
			};
		},
	},
};

export default utilsMixin;
