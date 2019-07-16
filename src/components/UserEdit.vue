<template>
  <form class="container" @submit.prevent="updateProfile(user.id)">
    <h2>{{ title }}</h2>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="user.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Job</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="user.job">
      </div>
    </div>
    <button class="btn btn-warning">Update profile</button>
    <router-link to="/users" class="btn btn-danger">Cancel</router-link>
  </form>
</template>

<script>
import axios from 'axios'
import router from '../router/index'
export default { 
  data () {
    return {
      title: 'User edit',
      user: {
        name: '',
        job: ''
      }
    }
  },
  
  async mounted() {
    let userId = this.$route.params.id

    try {
      let {data: {data}} = await axios.get('https://reqres.in/api/users/' + userId);
      this.user = data;
    } catch(e) {
      console.log(e)
    }
  },

  methods: {
    updateProfile: async function(userId){
      axios.put('https://reqres.in/api/users/' + userId, {
        body: this.user
      }).then((response) =>{
        console.log(response.data);
      }),
      router.push({
        name: 'user-detail',
        params: {
          id: userId
        }
      })
    }
  }
}
</script>
