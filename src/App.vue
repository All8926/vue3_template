<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<template>
  <header>

  </header>

  <RouterView />
</template>

<style scoped >
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
