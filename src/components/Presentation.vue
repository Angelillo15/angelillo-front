<template>
        <div class="presentation">
            <h1>Hiii,</h1>
            <h3>I'm Angelillo15 a Software Developer from Spain</h3>
            <br />
            <h4>
                This is a personal website and domain that I use for my personal and open source projects like
                <a class="nookure" href="https://builtbybit.com/resources/25460/">MAStaff</a> or <br />
                <a
                    class="nookure"
                    href="https://pterodactyl-resources.com/resources/resource/47-iceminecrafttheme--pterodactyl-111x-support/"
                    >Ice Minecraft Theme</a
                >
                and
                <a
                    class="nookure"
                    href="https://pterodactyl-resources.com/resources/resource/43-minecraft-purple-theme--pterodactyl-111x-support/"
                    >Minecraft Purple Theme</a
                >
                for pterodactyl
            </h4>

            <br />

            <h3>Currently working at <a class="nookure" href="https://nookure.com" target="_blank">Nookure</a></h3>

            <br />

            <h3>Interesting Sites:</h3>
            <ul>
                <li><a class="nookure" href="https://discord.nookure.com" target="_blank">Discord</a></li>
                <li><a class="nookure" href="https://javadocs.nookure.com" target="_blank">JavaDocs</a></li>
                <li><a class="nookure" href="https://repo.nookure.com" target="_blank">Maven Repo</a></li>
            </ul>

            <br />

            <h3>My main technologies are:</h3>
            <Technologies />

            <br />

            <img class="stats" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Angelillo15&theme=monokai&hide_border=true" alt="">
        </div>
</template>

<script lang="ts">
import Technologies from './technologies/Technologies.vue';
export default {
    name: 'Presentation',
    components: {
        Technologies,
    },
};
</script>

<style scoped>
.presentation {
    text-align: center;
    margin-top: 10%;
}

.nookure {
    color: #ff6b6b;
    text-decoration: none;
}

ul {
    list-style: none;
}

.stats {
    width: 100%;
    max-width: 700px;
    height: auto;
    margin-bottom: 20px;
}
</style>
