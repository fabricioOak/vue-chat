<script setup lang="ts">
import type { Socket } from "socket.io-client";
import { ref } from "vue";

interface Props {
  socket: Socket;
}

const message = ref<string>();

const props = defineProps<Props>();

const handleSendMessage = (e: Event) => {
  e.preventDefault();
  if (message.value?.trim() && localStorage.getItem("userName")) {
    props.socket.emit("message", {
      text: message.value,
      name: localStorage.getItem("userName"),
      id: `${props.socket.id}${Math.random()}`,
      socketID: props.socket.id,
    });
    message.value = "";
  }
};
</script>
<template>
  <div class="chat-footer">
    <form class="form">
      <input
        type="text"
        placeholder="Write message"
        class="message"
        v-model="message"
      />
      <button @click="handleSendMessage" class="sendBtn">SEND</button>
    </form>
  </div>
</template>
