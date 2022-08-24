<script setup>
import ChatPageVue from "@/components/ChatPage.vue";
import { socket } from "@/main";
</script>

<template>
  <div>
    <ChatPageVue :socket="socket" />
  </div>
</template>
