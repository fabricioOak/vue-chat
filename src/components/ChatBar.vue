<script setup lang="ts">
import type { Socket } from "socket.io-client";
import { ref } from "vue";

interface Users {
  userName: string;
  socketID: string;
}

interface Props {
  socket: Socket;
}

const users = ref<Users[]>([]);

const props = defineProps<Props>();

props.socket.on("newUserResponse", (data) => {
  users.value.push(data);
});
</script>

<template>
  <div class="chat-sidebar">
    <h2>Open Chat</h2>
    <div>
      <h4 class="chat-header">
        <div class="chat-users">
          <p v-for="{ userName, socketID } in users" :key="socketID">
            {{ userName }}
          </p>
        </div>
      </h4>
    </div>
  </div>
</template>
