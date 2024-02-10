<template>
  <div class="md:w-1/4">
    <img src="@/assets/cheese.png" class="w-12 h-12 my-6 mx-auto" />
    <div class="bg-zinc-800 border-2 border-slate-700 h-72 px-6 py-2 overflow-y-scroll">
      <p v-for="user in userList" :key="user">
        {{ user === currentUser ? '*' : '' }} {{ user }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, type PropType } from 'vue'

const props = defineProps({
  userList: {
    type: Array as PropType<string[]>,
    required: false
  },
  currentUser: {
    type: String,
    required: true
  }
})

const { userList, currentUser } = toRefs(props)
</script>
