<template>
    <div class="container">
        <div class="grid-row">
            <Technologie
                v-for="tech in techlogies"
                :key="tech.name"
                :name="tech.name"
                :icon="tech.icon"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Technologie from './Technologie.vue';
import ITech from '../../interfaces/technologies'

export default {
    name: 'Technologies',
    components: {
        Technologie,
    },
    data() {
        return {
            techlogies: [] as ITech[],
        };
    },
    methods: {
        getTechnologies() {

            this.techlogies.push({
                name: 'Java',
                icon: 'bxl-java',
            });

            this.techlogies.push({
                name: 'Vue',
                icon: 'bxl-vuejs',
            });

            this.techlogies.push({
                name: 'NodeJS',
                icon: 'bxl-nodejs',
            });

            this.techlogies.push({
                name: 'TypeScript',
                icon: 'bxl-typescript',
            });

            this.techlogies.push({
                name: 'SQL',
                icon: 'bx-data',
            });

            this.techlogies.push({
                name: 'Git',
                icon: 'bx-git-branch',
            });

            this.techlogies.push({
                name: 'Linux',
                icon: 'bxl-tux',
            });

            this.techlogies.push({
                name: 'Minecraft API',
                icon: 'bxl-telegram',
            });
            
            this.techlogies.push({
                name: 'Discord API',
                icon: 'bxl-discord',
            });

            this.techlogies.push({
                name: 'HTML',
                icon: 'bxl-html5',
            });

            this.techlogies.push({
                name: 'CSS',
                icon: 'bxl-css3',
            });

            this.techlogies.push({
                name: 'JavaScript',
                icon: 'bxl-javascript',
            });
        }
    },
    mounted() {
        this.getTechnologies();
    },
};
</script>

<style scoped>
.grid-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20px, 100px));
    grid-gap: 10px 0px;
    justify-content: center;
    align-items: baseline;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: auto;
}
</style>
