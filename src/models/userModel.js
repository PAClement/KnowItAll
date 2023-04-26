import {reactive} from 'vue';

class UserModel{

    constructor() {
        this.state = reactive({
            users:[],
        })
    }

    addUser(user){
        this.state.users.push(user);
    }

    getUsers(){
        return this.state.users;
    }
}

export default new UserModel()