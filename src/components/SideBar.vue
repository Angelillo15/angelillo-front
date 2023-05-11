<template>
  <div class="sidebar">
    <img class="avatar" src="../assets/img/avatar.jpeg" alt="">
    <router-link to="/"> Home </router-link>
    <router-link to="/resources"> Resources </router-link>
    <router-link to="/Contact"> Contact </router-link>
    <ThemeSwitcher></ThemeSwitcher>
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
