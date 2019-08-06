<template>
  <div class="login">
    <h1>Login</h1>
    <p v-if="loginError">{{ loginError }}</p>
    <form class="container">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" name="email" v-model="email" placeholder="Email"/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" name="password" v-model="password" placeholder="Password"/>
      </div>
      <button type="button" class="btn btn-primary" @click="login">Login</button>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapState([
        'loginError',
        'userToken'
      ])
    },
    methods: {
      ...mapActions([
        'doLogin'
      ]),
      login() {
        this.doLogin({
          email: this.email,
          password: this.password
        });
      }
    }
  }
</script>
