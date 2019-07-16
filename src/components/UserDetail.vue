<template>
  <form class="container">
    <h2>{{ title }}</h2>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input readonly class="form-control" v-model="user.email">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">First Name</label>
      <div class="col-sm-10">
        <input readonly class="form-control" v-model="user.first_name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Last Name</label>
      <div class="col-sm-10">
        <input readonly class="form-control" v-model="user.last_name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Avata</label>
      <div class="col-sm-10">
        <input readonly class="form-control" v-model="user.avatar">
      </div>
    </div>
    <router-link :to="{ name: 'user-edit', params: { id: user.id }}" class="btn btn-warning">Edit</router-link>
    <router-link to="/users" class="btn btn-danger">Cancel</router-link>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: 'User details',
      user: ''
    }
  },

  async mounted() {
    let userId = this.$route.params.id;

    try {
      let {data: {data}} = await axios.get('https://reqres.in/api/users/' + userId);
      this.user = data;
    } catch(e) {
      console.log(e)
    }
  },
}
</script>
