<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { socket } from "@/main";

const router = useRouter();
const userName = ref("");

const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("userName", userName.value);
  //sends the username and socket ID to the Node.js server
  socket.emit("newUser", { userName: userName.value, socketID: socket.id });
  router.push("/chat");
};
</script>

<template>
  <main>
    <form class="home-container">
      <h2 class="home-header">Sign in</h2>
      <label for="username">Username</label>
      <input
        class="username-input"
        type="text"
        v-model="userName"
        minlength="6"
        name="username"
        id="username"
      />
      <button class="home-cta" @click="handleSubmit">Submit</button>
    </form>
  </main>
</template>
