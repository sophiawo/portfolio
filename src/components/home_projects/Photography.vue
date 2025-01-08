<script>
    import Button from '../Button.vue';

    export default{
        components: {
            Button,
        },

        name: "Photography",
    }
</script>

<template>
    <div id="photography">
        <div class="leftside-ph">
            <img id="photography-img1" src="/src/assets/photography/photography_1.png" />
            <img id="photography-img2" src="/src/assets/photography/photography_2.png" />
        </div>
        <div class="rightside-ph">
            <h3 id="heading-photography">PHOTOGRAPHY</h3>
            <p class="photography-text"> In early 2023 I started doing analogue photography as a hobby. Through this
                I sharpened my sight for composition. I take my camera with me to every new place I visit, but also
                go on strolls through my hometown to find gread everyday motives.
            </p>
            <p class="photography-text"> With developing the films, analogue photography became one of my favourite pastime.</p>
            <p class="photography-text"> See more of my photography by clicking the following button.</p>
            <div id="button-flexbox-photography">
                <div  id="photography-button">
                    <Button @click="$router.push('projects')" :buttonTextKey="'read more about photography'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@import '/src/css/components/home_projects/photography.scss';
</style>