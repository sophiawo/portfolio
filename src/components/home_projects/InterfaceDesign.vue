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
    <div id="interfacedesign">
        <div class="leftside_id">
            <img class="interface_img" src="/src/assets/interface_design/sign_up_screen.png" />
            <img class="interface_img" src="/src/assets/interface_design/main_screen.png" />
            <img class="interface_img" src="/src/assets/interface_design/achievements_screen.png" />
        </div>
        <div class="rightside_id">
            <h3 id="headinginterface">INTERFACEDESIGN</h3>
            <p class="interfacetext"> Through an university class I got in contact with app interface desdign. Our
                app was a time management tool with fokus on balancing work and free time. The choosen Art Déco style
                with its symmetrical and balanced elements supports the goal of having a good
                work-life-balance.
            </p>
            <p class="interfacetext"> Read more about the process behind by clicking the following button.</p>
            <div id="buttonFlexboxInterface">
                <div  id="interfacebutton">
                    <Button @click="$router.push('projects')" :buttonTextKey="'read more about interfacedesign'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@import '/src/css/components/home_projects/interfacedesign.scss';
</style>