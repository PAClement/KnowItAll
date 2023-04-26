<template>
    <ul>
        <li v-for="user in users" :key="user.username">{{user.username}}</li>
    </ul>
</template>

<script>
import userModel from '../models/userModel';

export default {
    computed: {
        users(){
            return userModel.getUsers();
        },
    },
}
</script>