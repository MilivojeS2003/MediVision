import AssigmentList from "./AssigmentList.js"
import AssigmentCreate from "./AssigmentCreate.js"
export default{
    components:{AssigmentList, AssigmentCreate},

    template:`
        <AssigmentList :assigments="assigments", title="In progress"></AssigmentList>
        <AssigmentCreate @add="add"></AssigmentCreate>

    `,

    data(){
        return{
            assigments:[],

            // newAssigment:''
                }
            },

    created(){
            fetch('http://localhost:3000/assignments') // daje promise da cemo dobit odgovor
                .then(response => response.json()) //kad ga dobijemo ocu da bude json, opet dobijamo obecanje da cemo dobit odgov u json-u
                .then(data => { //sada dobijamo konacan odgovor u obiliku json-a
                    // console.log(data)
                    this.assigments = data;
        }) 
    },

    methods:{
        add(name){
            //alert(this.newAssigment)
            this.assigments.push({
                name: name,
                complete:false,
                id: this.assigments.length + 1
            })
            
            // console.log(this.assigments);
            // this.newAssigment = ''

        }
    }
        }
