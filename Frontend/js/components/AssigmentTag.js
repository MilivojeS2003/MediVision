export default{

    template: `
        <div class="flex gap-2">
            <button 
            @click="$emit('update:currentValue', tag)" v-for="tag in tags" class="border rounded px-1 py-px text-xs mb-5"
            :class="{'border-blue-500 text-blue-500': tag === currentValue}">
            {{tag}}
            </button>
        </div>
    `,

    // data(){
    //     return{ 
    //     currentTag:'all'
    //     }
    // },

    props:{
        initialTags: Array, 
        currentValue: String
    },

    computed:{
        tags(){
            return ['all', ...new Set(this.initialTags)]
        }
    }
}