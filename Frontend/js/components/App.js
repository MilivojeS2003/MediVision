import AppButton from "./AppButton.js"
import Assigments from "./AppTodo.js"
export default{
    components:{
        'app-button':AppButton,
        'assigment':Assigments
    },

    template:`        
        <assigment></assigment>
        <br>
        <app-button>Click me</app-button>
    `
}