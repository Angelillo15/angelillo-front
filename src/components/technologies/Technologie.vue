<template>
    <div class="tech">
        <i :class="iconClass" />
        <h5>{{ name }}</h5>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Technologie',
    props: {
        name: String,
        icon: String,
    },
    data() {
        return {
            iconClass: `bx ${this.icon}`,
        };
    },
};
</script>

<style scoped>
.tech {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
    background-color: var(--bg-secondary);
    transition: all 0.3s ease;
    will-change: filter;
    transition: filter 300ms;
    margin: 10px;
}

.tech:hover {
    filter: drop-shadow(0 0 40px #e20606);
}

.tech i {
    font-size: 5rem;
    margin-bottom: 10px;
}
</style>
