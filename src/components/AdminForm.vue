<template>
    <form @submit.prevent="submitForm">
        <label for="email">email :</label>
        <input type="email" id="email" required>
        <label for="password">password :</label>
        <input type="password" id="password" required>
        <button type="submit">Se connecter</button>
    </form>
</template>

<script>
import userModel from '../models/userModel';

export default {
    data(){
        return {
            username:''
        };
    },

    methods:{
        submitForm(){
            userModel.addUser({username: this.username});
            console.log('added' + this.username);
            this.username = '';
        },
    },
};
</script>