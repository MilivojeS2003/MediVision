export default{
    template:`
        <section v-show="assigments.filter(a => ! a.complete).length">
            <h2 class="font-bold mb-3">{{ title }}</h2>
            <ul>
                <li
                    v-for="assigment in assigments.filter(a => ! a.complete)" 
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
                    v-for="assigment in assigments.filter(a => a.complete)" 
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
    }
}