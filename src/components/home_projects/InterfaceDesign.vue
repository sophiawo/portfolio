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
    <div id="interface-design">
        <div class="leftside-id">
            <img class="interface-img" src="/src/assets/interface_design/sign_up_screen.png" />
            <img class="interface-img" src="/src/assets/interface_design/main_screen.png" />
            <img class="interface-img" src="/src/assets/interface_design/achievements_screen.png" />
        </div>
        <div class="rightside-id">
            <h3 id="heading-interface">INTERFACEDESIGN</h3>
            <p class="interface-text"> Through an university class I got in contact with app interface desdign. Our
                app was a time management tool with fokus on balancing work and free time. The choosen Art Déco style
                with its symmetrical and balanced elements supports the goal of having a good
                work-life-balance.
            </p>
            <p class="interface-text"> Read more about the process behind by clicking the following button.</p>
            <div id="button-flexbox-interface">
                <div  id="interface-button">
                    <Button @click="$router.push('projects')" :buttonTextKey="'read more about interfacedesign'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@import '/src/css/components/home_projects/interfacedesign.scss';
</style>