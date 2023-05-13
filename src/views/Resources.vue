<template>
    <h1>Resources page</h1>
    <div class="grid-row">
        <Resource
            name="MAStaff"
            url="https://builtbybit.com/resources/25460/"
            description="Staff Plugin for Spigot, Bukkit, Paper, Bungee and Folia"
            image="/resources/mastaff.png"
        />

        <Resource
            name="Ice Minecraft Theme"
            url="https://builtbybit.com/resources/26274/"
            description="A Ice theme based on Minecraft for Pterodactyl Panel"
            image="/resources/ice.png"
        />

        <Resource
            name="Minecraft Purple Theme"
            url="https://pterodactyl-resources.com/resources/resource/43/"
            description="An Purple theme based on Minecraft for Pterodactyl Panel"
            image="/resources/purple.png"
        />

    </div>
    <div class="grid-row"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Resource from '../components/Resource.vue';

export default defineComponent({
    name: 'Resources',
    components: {
        Resource,
    },
});
</script>

<style scoped>
.grid-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20px, 400px));
    grid-gap: 10px 0px;
    justify-content: center;
    align-items: baseline;
    text-align: center;
}

.container {
    max-width: 400px;
    margin: auto;
}
</style>
