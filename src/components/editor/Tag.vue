<template>
    <div class="resource" v-if="!editMode">
        <div class="render__mc" v-html="displayRender" />

        <div class="resource__content">
            <h3 class="resource__name">Name: {{ nameProp }}</h3>
            <p class="resource__description">Perm: {{ permissionProp }}</p>
            <p class="resource__description">Material: {{ materialProp }}</p>
            <button @click="edit()" target="_blank" class="resource__link">Edit</button>
        </div>
    </div>
    <div class="resource" v-else>
        <div class="render__mc" v-html="displayRender" />

        <div class="resource__content">
            <span>Name: </span>
            <input type="text" class="rInput" v-model="nameProp" />

            <span>Display Tag</span>
            <input type="text" class="rInput" v-model="displayProp" />

            <span>Permission: </span>
            <input type="text" class="rInput" v-model="permissionProp" />

            <span>Material: </span>
            <input type="text" class="rInput" v-model="materialProp" />
            <div class="buttons">
                <button @click="edit()" target="_blank" class="resource__link">save</button>
                <button @click="del()" target="_blank" class="resource__link">delete</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { render } from 'minecraft-text';

export default defineComponent({
    name: 'Tag',
    props: {
        name: {
            type: String,
            required: true,
        },
        permission: {
            type: String,
            required: true,
        },
        material: {
            type: String,
            required: true,
        },
        display: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            displayRender: render(this.display , '&'),
            editMode: false,
            nameProp: this.name,
            permissionProp: this.permission,
            materialProp: this.material,
            displayProp: this.display,
            prev: this.name,
        };
    },
    methods: {
        edit() {
            if (this.editMode) {
                this.emitter.emit('update', {
                    name: this.nameProp,
                    permission: this.permissionProp,
                    materialIcon: this.materialProp,
                    displayName: this.displayProp,
                    prev: this.prev,
                });

                this.prev = this.nameProp;
            }

            this.editMode = !this.editMode;
        },
        del() {
            this.emitter.emit('delete', this.nameProp);
        },
    },
    watch: {
        displayProp() {
            this.displayRender = render(this.displayProp, '&');
        },
    },
});
</script>

<style scoped>
@import '../../assets/css/minecraft/font.css';
.resource {
    background-color: var(--card-bg);
    margin: 10px;
    padding: 1rem;
    border-radius: 3%;
    min-height: 250px;
    max-height: 500px;
    color: var(--sidebar-button-color);
}

.resource:hover {
    transition: filter 0.2s ease-in-out;
    filter: drop-shadow(0 0 10px #3a3a3a);
}

.buttons button {
    margin: 3px;
}

.render__mc {
    font-family: Minecraftia;
    display: flex;
    width: 100%;
    height: 5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-image: url(../../assets/css/minecraft/obsidian.jpeg);
}

.resource__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.rInput {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: none;
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
    cursor: pointer;
    border: none;
}

.resource__link:active {
    transform: translate(2px, 2px);
}

.resource__link:hover {
    background-color: var(--nookure);
    color: #fff;
}
</style>
