<template>
    <button class="custom-button">{{ $t(buttonTextKey) }}</button>
</template>

<script>
export default {
    props: {
        buttonTextKey: {
            type: String,
            required: true
        }
    }
}
</script>

<style scooped lang="scss">
@use '../css/components/mybutton.scss';
</style>