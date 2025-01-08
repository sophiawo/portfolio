<script>
    import Button from '../Button.vue';

    export default{
        components: {
            Button,
        },

        name: "InterfaceDesign",
    }
</script>

<template>
    <div id="webdesign">
        <div id="webdesign-content">
            <h3 id="heading-webdesign">WEBDESIGN</h3>
            <p class="web-text"> During my studies I had to design (and code) various websites. I also came 
                into contact with digital accessability. I deepend my knowledge on webdesign on my own
                outside of my university studies and try to follow industry standards and work with widespread
                tools and programms.
            </p>
            <p class="web-text"> See in depth examples and read more about the process behind my projects by
                clicking the following button.
            </p>
            <div id="button-flexbox-web">
                <div  id="web-button">
                    <Button @click="$router.push('projects')" :buttonTextKey="'read more about webdesign'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@import '/src/css/components/home_projects/webdesign.scss'
</style>