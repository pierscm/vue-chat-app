<template>
  <div class="h-screen pt-32 content-center text-zinc-400">
    <div class="min-w-42 max-w-96 mx-auto bg-zinc-900 border-2 border-gray-800">
      <div class="w-100 py-2 px-4 bg-slate-950 ">
        <p class=" text-2xl">Welcome to the Cheese Chat</p>
      </div>
      <form @submit.prevent="onSubmit" >
        <div class="flex flex-row p-6 justify-end">
          <div class="w-1/4">
            <p>Username</p>
          </div>
          <input
            data-cy="login-input"
            v-model="formUsername"
            class=" w-2/4 bg-zinc-900 border-b-2 border-zinc-400"
          />
        </div>

        <div class="m-6 w-100 text-right">
          <button class="hover:text-sky-200" data-cy="login-button">[Login]</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import { ref } from 'vue'

const formUsername = ref<null | string>(null)

const store = useStore()

function onSubmit() {
  if (formUsername.value) {
    store.login(formUsername.value)
    formUsername.value = null
  } else {
    // TODO: Form error handling
  }
}
</script>
