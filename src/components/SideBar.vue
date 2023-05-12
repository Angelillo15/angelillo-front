<template>
  <div class="sidebar">
    <img class="avatar" src="../assets/img/avatar.jpeg" alt="">

    <router-link to="/">
       Home <i class='bx bxs-home-heart' />
    </router-link>

    <router-link to="/resources">
       Resources <i class='bx bx-list-ul' />
    </router-link>

    <a href="https://github.com/Angelillo15" target="_blank">
      GitHub <i class='bx bxl-github' />
    </a>

    <a href="https://discord.nookure.com" target="_blank">
      Discord <i class='bx bxl-discord-alt' />
    </a>

    <router-link to="/contact">
       Contact <i class='bx bxs-contact' /> 
    </router-link>
    <ThemeSwitcher />
  </div>

  <div class="nav-bar">
    <img class="smallAvatar" src="../assets/img/avatar.jpeg" alt="">
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
  methods: {
    openMenu() {
      const sidebar = document.querySelector('.sidebar');
      sidebar?.classList.toggle('active-nav');
    }
  }
}
</script>
