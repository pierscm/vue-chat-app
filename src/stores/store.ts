import { ref } from 'vue'
import { defineStore } from 'pinia'
import { mande } from 'mande'

interface Message {
  index: number
  user: string
  message: string
}

interface Messages {
  messages: Message[]
}

export const useStore = defineStore('store', () => {
  const user = ref<string | null>(null)
  const userList = ref<string[]>([])
  const messageList = ref<Message[]>([])

  const URL = "//0.0.0.0:3939"

  async function login(userName: string) {
    console.log('user', userName)
    try {
      const response = await mande(`${URL}/signin`).post<{ user: string }>({ user: userName });
      user.value = response.user
      getUsers()
      getMessages()
    } catch {
      console.log('/login error')
      // handle error
    }
  }

  async function getUsers() {
    try {
      const response = await mande(`${URL}/users`).get<{ users: string[] }>()
      userList.value = response.users
    } catch{
      console.log('/users GET error')
      // handle error
    }
  }

  async function getMessages() {
    try {
      const response = await mande(`${URL}/messages`).get<Messages>()
      messageList.value = response.messages
    } catch{
      console.log('/messages GET error')
      // handle error
    }
  }

  async function sendMessage(message: string) {
    try {
      await mande(`${URL}/messages`).post({
        user: user.value,
        message
      })
    } catch {
      console.log('/messages POST error')
      //handle error
    }
  }

  return {
    user,
    userList,
    messageList,
    login,
    sendMessage
  }
})
