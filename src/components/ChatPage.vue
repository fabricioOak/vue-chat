<script setup lang="ts">
import { ref } from "vue";

import ChatBarVue from "@/components/ChatBar.vue";
import ChatBodyVue from "@/components/ChatBody.vue";
import ChatFooterVue from "@/components/ChatFooter.vue";

import type { Socket } from "socket.io-client";

const messages = ref<string[]>([]);

interface Props {
  socket: Socket;
}

const props = defineProps<Props>();

// every time the socket receives a message, add it to the messages array
props.socket.on("messageResponse", (message: any) => {
  messages.value = [...messages.value, message];
  console.log(messages.value);
});
</script>

<template>
  <div class="chat">
    <ChatBarVue :socket="socket" />
    <div class="chat-main">
      <ChatBodyVue :messages="messages" />
      <ChatFooterVue :socket="socket" />
    </div>
  </div>
</template>
