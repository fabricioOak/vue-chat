<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

interface Props {
  messages: any;
}

const props = defineProps<Props>();
const router = useRouter();

const myMessages = ref(
  computed(() => {
    return props.messages.filter(
      (message: any) => message.name === localStorage.getItem("userName")
    );
  })
);

const theirMessages = ref(
  computed(() => {
    return props.messages.filter(
      (message: any) => message.name !== localStorage.getItem("userName")
    );
  })
);

const handleLeaveChat = () => {
  localStorage.removeItem("userName");
  router.push("/");
};
</script>
<template>
  <header className="chat-mainHeader">
    <p>Hangout with Colleagues</p>
    <button className="leaveChat-btn" @click="handleLeaveChat">
      LEAVE CHAT
    </button>
  </header>

  <!-- This shows messages sent from you -->
  <div className="message-container">
    <div v-for="(message, i) in myMessages" :key="i" className="message-chats">
      <p className="sender-name">You</p>
      <div className="message-sender">
        <p>{{ message.text }}</p>
      </div>
    </div>

    <!-- This shows messages received by you -->
    <div>
      <div
        v-for="(message, i) in theirMessages"
        :key="i"
        className="message-chats"
      >
        <p>{{ message.name }}</p>
        <div className="message-recipient">
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>

    <!-- This is triggered when a user is typing -->
    <div className="message-status">
      <p>Someone is typing...</p>
    </div>
  </div>
</template>
