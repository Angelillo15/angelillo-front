<template>
  <SideBar />
  <div class="content">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key:any="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>
@import './assets/css/main.css';
@import './assets/css/animations/page.css';
@import './assets/css/sidebar.css';
@import './assets/css/utils/normalize.css';
@import './assets/css/themes/white.css';
@import './assets/css/themes/dark.css';
</style>