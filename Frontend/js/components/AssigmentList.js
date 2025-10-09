import AssigmentTag from "./AssigmentTag.js"

export default{
    components:{ AssigmentTag },

    template:`
        <section v-show="assigments.filter(a => ! a.complete).length">
        <div class="block">
            <h2 class="font-bold mb-3">
            {{ title }}
             <span >({{assigments.length}})</span>
            </h2>
        </div>
        
        <assigment-tag 
            :initial-tags="assigments.map(a => a.tag)"
            v-model:currentValue = "currentTag"
        />
         
            <ul>
                <li
                    v-for="assigment in fillterAssigments.filter(a => ! a.complete)" 
                    :key="assigment.id"> 
                        <label class="p-2 flex justify-between items-center">
                        {{assigment.name}} 
                        <input class="ml-3" type="checkbox" v-model="assigment.complete" />
                        </label>
                </li>
            </ul>
        </section>

        <section class="mt-8" v-show="assigments.filter(a => a.complete).length">
            <h2 class="font-bold mb-3">Completed</h2>
            <ul>
                <li 
                    v-for="assigment in fillterAssigments.filter(a => a.complete)" 
                    :key="assigment.id">
                        <label class="p-2 flex justify-between items-center">
                        {{assigment.name}} 
                        <input class="ml-3" type="checkbox" v-model="assigment.complete" />
                        </label>
                </li>
            </ul>
        </section>
    `,

    props:{
        assigments:Array,
        title:String
    },

    data(){
        return{ 
        currentTag:'all'
        }
    },

    computed:{
        // tags(){
        //     return ['all', ...new Set(this.assigments.map(a => a.tag))]
        // },

        fillterAssigments(){
            if(this.currentTag !== '' && this.currentTag !== 'all'){
                return this.assigments.filter(a => a.tag === this.currentTag)                
            }else{
                return this.assigments
            }
        }
    }
}