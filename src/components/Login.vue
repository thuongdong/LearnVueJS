<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login">Login</button>
    </div>
</template>

<script>
    import axios from 'axios'
    import { async } from 'q';
    import { error, log } from 'util';
    import { constants } from 'fs';
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                },
                mockAccount: {
                    email: "nraboy",
                    password: "password"
                },
                errors: [],
                show: true,
                users: []
            }
        },
        async mounted() {
            if (localStorage.usertoken) {
                console.log(localStorage.usertoken);
                this.$emit('authenticated', true);
                this.$router.replace({ name: 'user-list'});
            }
            let {data: {data}} = await axios.get('https://reqres.in/api/users?per_page=999999');
            this.users = data;
        },
        methods: {
            login: async function () {
                let userEmail = this.input;
                if (this.users.findIndex(r => r.email === userEmail.email)) {
                let data = await axios({ 
                    url: 'https://reqres.in/api/login',
                    method: 'post',
                    data: userEmail
                }).then((res) => {
                    const token = res.data.token;
                    localStorage.setItem('usertoken', token);
                    this.$emit('authenticated', true);
                    this.$router.replace({ name: 'user-list'});
                }).catch((err) => {
                    console.log('Get api err')
                })
                } else {
                console.log('Login error')
                }
            },
        },
    }
</script>