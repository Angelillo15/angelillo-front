<template>
  <div class="sidebar">
    <img class="avatar" src="../assets/img/avatar.jpeg" alt="">

    <router-link to="/">
       Home <i class='bx bxs-home-heart' />
    </router-link>

    <router-link to="/resources">
       Resources <i class='bx bx-list-ul' />
    </router-link>

    <router-link class="router-link-active" to="" v-if="isEditor">
       Editor <i class='bx bx-edit-alt' />
    </router-link>

    <a @click="save()" class="pointer" v-if="isEditor">
       Save <i class='bx bx-save' />
    </a>

    <a href="https://github.com/Angelillo15" target="_blank">
      GitHub <i class='bx bxl-github' />
    </a>

    <a href="https://discord.nookure.com" target="_blank">
      Discord <i class='bx bxl-discord-alt' />
    </a>

    <ThemeSwitcher />
  </div>

  <div class="nav-bar">
    <RouterLink to="/">
      <img class="smallAvatar" src="../assets/img/avatar.jpeg" alt="">
    </RouterLink>

    <div class="left openMenu" @click="openMenu()">
      <i class='bx bx-menu'></i>
    </div>
  </div>
</template>

<script lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
  name: "SideBar",
  components: { ThemeSwitcher },
  data() {
    return {
      isEditor: this.$route.path.includes('/zat/editor/'),
    }
  },
  methods: {
    openMenu() {
      const sidebar = document.querySelector('.sidebar');
      sidebar?.classList.toggle('active-nav');
    },
    save() {
      this.emitter.emit('save');
    }
  },
  watch: {
    $route() {
      this.$forceUpdate();
      this.isEditor = this.$route.path.includes('/zat/editor/');

      let isMobile:boolean = window.matchMedia('(max-width: 700px)').matches;

      let isSidebarOpen:boolean = document.querySelector('.sidebar')?.classList.contains('active-nav') as boolean;

      if (!isMobile) return;
      if (!isSidebarOpen) return;
      const sidebar = document.querySelector('.sidebar');
      sidebar?.classList.remove('active-nav');
    }
  },

}
</script>
