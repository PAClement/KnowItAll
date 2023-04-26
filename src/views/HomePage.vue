<template>
    <div>
        <h2>Liste users</h2>
        <UserList ref="userList" />
        <h1> Ajout d'un user</h1>
        <UserForm/>
    </div>
</template>
<script>
import UserList from "@/components/UserList.vue";
import UserForm from "@/components/UserForm.vue";

export default {
    components:{
        UserForm,
        UserList,
    }
}
</script>