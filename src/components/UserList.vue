<template>
  <div class="container">
    <h2>{{title}}</h2>
    <div class="col-md-4 text-left">
      <p class="pagination">
        <router-link to="/users-create" class="btn btn-primary">Create</router-link>
      </p>
    </div>
    <paginate name="datas" :list="datas" class="pagination">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in paginated('datas')" :key="data.id">
            <td>{{data.id}}</td>
            <td>{{data.email}}</td>
            <td>{{data.first_name}}</td>
            <td>{{data.last_name}}</td>
            <td>{{data.avatar}}</td>
            <td><button class="btn btn-success" @click="showUser(data.id)">Details</button></td>
            <td><button class="btn btn-warning" @click="editUser(data.id)">Edit</button></td>
            <td><button class="btn btn-danger" @click="deleteUser(data.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </paginate> 
    <paginate-links for="datas" :show-step-links="true"></paginate-links>
  </div>
</template>

<script>
import axios from 'axios'
import UserDetail from "./UserDetail"
import router from '../router/index'
export default {
  data () {
    return {
      title: "Danh sách User",
      datas: [],
      paginate: ['datas'],
      user: ''
    }
  },
  created: function() {
    this.dsUser();
  },
  mounted() {
    if (localStorage.usertoken) {
      console.log(localStorage.usertoken);
      this.$emit('authenticated', true);
      this.$router.replace({ name: 'user-list'});
    } else {
      this.$router.replace({ name: 'login'});
    }
  },
  methods: {
    dsUser () {
      this.axios.get('https://reqres.in/api/users?per_page=999999').then(response=>{
        this.datas = response.data.data;
      });
    },

    deleteUser: async function (userId) {
      let {status} = await axios.delete('https://reqres.in/api/users/' + userId);
  
      if (status === 204) {
        let userIndex = this.datas.findIndex(r => r.id === userId)
        this.datas.splice(userIndex, 1)
      } else {
        console.log('error!')
      }
    },

    showUser: async function (userId) {
      router.push({
        name: 'user-detail',
        params: {
          id: userId
        }
      })
    },

    editUser: async function (userId) {
      router.push({
        name: 'user-edit',
        params  : {
          id: userId
        }
      })
    }
  }
}
</script>
<style>
ul.paginate-links.datas {
  display:block;
  list-style-type:none;
}
ul.paginate-links.datas li {
  display: inline-block;
  margin: 0 10px;
}
</style>