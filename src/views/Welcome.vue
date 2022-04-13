<template>
  <div class="welcome container">
    <p>Welcome</p>

    <div class="forms">
      <div v-if="AdminLogin">
        <LoginForm />
        <p>
          Don't have an account?<span @click="AdminLogin = false"> SignUp </span
          >instead
        </p>
      </div>
      <div v-else>
        <SignupForm />
        <p>
          Already have an account?
          <span @click="AdminLogin = true">Login</span> instead
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { SignupForm, LoginForm },

  setup() {
    const AdminLogin = ref(true);

    return { AdminLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  font-size: 24px;
  padding: 20px 0;
}

/*form*/

.welcome form {
  margin: 20px auto;
  width: 300px;
}
.welcome label {
  display: block;
  margin:  0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.forms p {
  font-size: 16px;
  color: #999;
}
span {
  color: #5ae4ca;
  cursor: pointer;
}
span:hover {
  text-decoration: underline;
}
</style>
