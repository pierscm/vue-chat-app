<template>
  <div v-if="store.user">
    <div class="py-2 mx-8 pt-24 flex flex-col md:flex-row gap-8">
      <UserList :current-user="store.user" :user-list="store.userList" />
      <ChatRoom />
    </div>
  </div>
  <div v-else>
    <LoginSection />
  </div>
</template>

<script setup lang="ts">
import LoginSection from './LoginSection.vue'
import UserList from './UserList.vue'
import ChatRoom from './ChatRoom.vue'
import { useStore } from '@/stores/store'

const store = useStore()
</script>
