<template>
    <div class="tl-slide-item"><slot></slot></div>
</template>

<script>
export default {
    mounted() {
        if (this.$parent.onSlideItemMounted) {
            this.$parent.onSlideItemMounted(this.$el);
        }
    },
};
</script>

<style>
.tl-slide-container .tl-slide-wapper .tl-slide-item{
    width: 100%;
    height: 100%;
    flex-shrink: 0;
}
</style>
