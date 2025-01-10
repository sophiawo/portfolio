<script>
    import MyButton from '../MyButton.vue';

    export default{
        components: {
            MyButton,
        },

        name: "GraphicDesign",
    }
</script>

<template>
    <div class="home-segment" id="graphic-design">
        <div class="leftside-gd">
            <h3 class="segment-heading" id="heading-graphic-design">GRAPHIC DESIGN</h3>
            <p class="design-text, segment-text"> I had the pleasure of designing the poster and flyer for the summer 2023
                production of the So1Theater theater group (whos website I also reworked).
                I tried to create an outstanding and attention grabing yet simple design that
                ties in with the theme of the play ('Twelve Angry Men').
            </p>
            <p class="design-text, segment-text"> Read more about the process behind my graphic design projects by clicking the following button.</p>
            <div class="segment-button-flexbox">
                <div class="segment-button">
                    <MyButton class="segment-button-white" @click="$router.push('projects')" :buttonTextKey="'read more about graphic design'" />
                </div>           
            </div>
        </div>
        <div class="segment-picture-side">
            <img class="theater" src="/src/assets/graphic_design/theater_poster.png"/>
            <img class="theater" src="/src/assets/graphic_design/theater_flyer.png" />
        </div>
    </div>
</template>

<style scooped lang="scss">
@import '/src/css/components/home_projects/graphicdesign.scss';
</style>