<script>
    import Button from '../Button.vue';

    export default{
        components: {
            Button,
        },

        name: "GraphicDesign",
    }
</script>

<template>
    <div id="graphic_design">
        <div class="leftside_gd">
            <h3 id="heading_graphic_design">GRAPHIC DESIGN</h3>
            <p class="design_text"> I had the pleasure of designing the poster and flyer for the summer 2023
                production of the So1Theater theater group (whos website I also reworked).
                I tried to create an outstanding and attention grabing yet simple design that
                ties in with the theme of the play ('Twelve Angry Men').
            </p>
            <p class="design_text"> Read more about the process behind by clicking the following button.</p>
            <div  id="design_button">
                <Button @click="$router.push('projects')" :buttonTextKey="'read more about graphic design'" />
            </div>
        </div>
        <div class="rightside_gd">
            <img class="theater" src="/src/assets/graphic_design/theater_poster.png"/>
            <img class="theater" src="/src/assets/graphic_design/theater_flyer.png" />
        </div>
    </div>
</template>

<style scooped lang="scss">
@import '/src/css/components/home_projects/graphicdesign.scss';
</style>