import AppButton from "./AppButton.js"
import Assigments from "./AppTodo.js"
import Panel from "./Panel.js"
import AllCard from "./AllCards.js"
export default{
    components:{
        'app-button':AppButton,
        'assigment':Assigments,
        'panel':Panel,
        'all-card':AllCard
    },

    template:`        
        <assigment></assigment>
        <br>
        <app-button>Click me</app-button>

        <panel>
            <template v-slot:heading>Hello World</template>
            <template v-slot:default>This is my default content</template>
        </panel>

        <panel>
            <template v-slot:heading>Hello World</template>
            <template v-slot:default>This is my default content</template>
            <template v-slot:footer>This is footer</template>
        </panel>

        <all-card></all-card>
    `
}