<template>
    <div class="grid-row">
        <Tag
            v-for="tag in tagArray"
            :key="tag.name"
            :name="tag.name"
            :permission="tag.permission"
            :material="tag.materialIcon"
            :display="tag.displayName"
        ></Tag>
        <Create />
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tag from '../components/editor/Tag.vue';
import TagInterface, { prev as prevInterface } from '../interfaces/tag';
import axios from 'axios';
import Create from '../components/editor/Create.vue';
import '../utils/noti';
import Swal from 'sweetalert2/dist/sweetalert2';

export default defineComponent({
    name: 'Editor',
    components: {
        Tag,
        Create,
    },
    data() {
        return {
            dataID: '',
            tagArray: [] as TagInterface[],
        };
    },
    methods: {
        async getData() {
            const response = await axios.get(`https://api.pastes.dev/${this.dataID}`);
            this.tagArray = response.data;
            console.log(this.tagArray);
        },
        async save() {
            const res = await axios.post(`https://api.pastes.dev/post`, this.tagArray, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            this.$router.push(`/zat/editor/${res.data.key}`);
            let html = `
                <h2>Success!</h2>
                <p>Your data has been saved!</p>
                <p>Run this command to apply the changes</p>
                <code class="command">/zat apply ${res.data.key}</code>
            `
            Swal.fire(html)
            
        },
    },
    mounted() {
        this.dataID = this.$route.params.id as string;
        this.getData();
        this.emitter.on('create', () => {
            this.tagArray.push({
                name: 'New Tag',
                permission: 'zat.tag.new',
                materialIcon: 'dirt',
                displayName: '&4New Tag',
            });
        });

        this.emitter.on('delete', (name: string) => {
            this.tagArray = this.tagArray.filter((tag) => tag.name !== name);
        });

        this.emitter.on('update', (tag: prevInterface) => {
            this.tagArray = this.tagArray.map((t) => {
                if (t.name === tag.prev) {
                    t.name = tag.name;
                    t.permission = tag.permission;
                    t.materialIcon = tag.materialIcon;
                    t.displayName = tag.displayName;
                }
                return t;
            });

            console.log('Save: ' + tag.prev);
            console.log(tag);
        });

        this.emitter.on('save', () => {
            this.save();
        });
    },
});
</script>

<style scoped>
.grid-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
    justify-content: center;
    align-items: center;
    text-align: center;
}

.container {
    max-width: 400px;
    margin: auto;
}
</style>
