<template>
 <h5> Sign Up</h5>
  <form @submit.prevent="handleSubmit()">
    <input type="text" required placeholder="Display name" v-model="displayName"/>
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template> 

<script>
import { ref } from "@vue/reactivity";
export default {
  //ref
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value);
    };

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style></style>
