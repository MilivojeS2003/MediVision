
export default{

    template:`
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssigment" placeholder="New assignment..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    props:{
        assigments:Array
    },

    data(){
        return{
             newAssigment:''
        }
    },

    methods:{

        add(){
            this.$emit('add', this.newAssigment)
            // alert(this.newAssigment)
            // this.assigments.push({
            //     name: this.newAssigment,
            //     complete:false,
            //     id: this.assigments.length + 1
            // })
            
            // console.log(this.assigments);
            this.newAssigment = ''

        }
    }
}