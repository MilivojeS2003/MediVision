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
                    assigments:[
                        {name:'Finish project', complete:false, id:1},
                        {name:'Read chapter 3', complete:false, id:2},
                        {name:'Turn in homework', complete:false, id:3}
                    ],

                    // newAssigment:''
                }
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
