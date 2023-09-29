<template>
    <div class="resource">
        <div class="resource__image">
            <img :src="image" :alt="name" />
        </div>
        <div class="resource__content">
            <h3 class="resource__name">{{ name }}</h3>
            <p class="resource__description">{{ description }}</p>
            <a :href="url" target="_blank" class="resource__link">Visit</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Resource',
    props: {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped>
.resource {
    background-color: var(--card-bg);
    margin: 10px;
    padding: 1rem;
    border-radius: 3%;
    min-height: 350px;
    max-height: 500px;
    color: var(--sidebar-button-color);}

.resource:hover {
    transition: filter 0.2s ease-in-out;
    filter: drop-shadow(0 0 10px #3a3a3a);
}

.resource__image {
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
}

.resource__image img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.resource__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.resource__name {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
}

.resource__description {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 400;
}

.resource__link {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
}

.resource__link:hover {
    background-color: var(--nookure);
    color: #fff;
}


</style>