<script setup lang="ts">
import { useStore } from './stores/store'
import ChatApp from './components/ChatApp.vue'

const store = useStore()
store.socketEvents()
</script>

<template>
  <main>
    <ChatApp />
  </main>
</template>
