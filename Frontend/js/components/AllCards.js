import Card from "./Card.js"

export default{
    components:{Card},

    template:`
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <card
                v-for="e in employees"
                :key="e.id"
                :name="e.name"
                :position="e.role"
                :team="e.team"
                :email="e.email"
                :avatar="e.avatar"
                :skills="e.skills"
                :bio="e.bio"
                :project="e.stats.projects"
                :year="e.stats.years"
                :rating="e.stats.rating"
                :profile="e.links && e.links.profile"
                />
        </div>
    `,

    data(){
        return{employees:[],}
    },

    created(){
        fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(data => {
            this.employees = data
        })
    }

}