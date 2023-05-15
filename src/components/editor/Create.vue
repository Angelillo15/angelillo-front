<template>
    <div class="resource" @click="create()">
        <i class='bx bx-plus-medical' />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Create Tag',
    data() {
        return {
            createCount: 1,
        }
    },
    methods: {
        create() {
            this.emitter.emit('create', this.createCount);

            this.createCount ++;
            console.log(this.createCount)
        }
    }
})
</script>

<style scoped>
.resource {
    background-color: var(--card-bg);
    margin: 10px;
    padding: 3rem;
    border-radius: 3%;
    min-height: 250px;
    max-height: 500px;
    color: var(--sidebar-button-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    cursor: pointer;
}

.resource:hover {
    transition: filter 0.2s ease-in-out;
    filter: drop-shadow(0 0 10px #3a3a3a);
}

</style>