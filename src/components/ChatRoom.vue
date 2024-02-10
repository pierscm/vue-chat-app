<template>
  <div class="md:w-3/4">
    <div
      class="bg-zinc-800 border-2 border-slate-700 px-6 py-2 h-96 flex flex-col-reverse overflow-auto [overflow-anchor:auto] scroll-smooth"
      data-cy="chat-window"
    >
      <div class="flex flex-col">
        <p v-for="message in store.messageList" :key="message.index">
          {{ message.user }}: {{ message.message }}
        </p>
      </div>
    </div>
    <form class="mt-6 flex flex-row text-right" @submit.prevent="onSendMessage">
      <input v-model="messageInput" class="bg-neutral-950 border-b-2 border-zinc-400 mr-3 w-4/5" />
      <button class="w-1/5 hover:text-sky-200">[Send]</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import { ref } from 'vue'

const messageInput = ref<null | string>(null)
const store = useStore()

function onSendMessage() {
  if (messageInput.value) {
    store.sendMessage(messageInput.value)
    messageInput.value = null
  } else {
    // handle invalid message
  }
}
</script>
