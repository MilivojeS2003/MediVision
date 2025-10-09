export default{
    template:`
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg mb-4 mt-4">
        <h2 class="font-bold">
            <slot name="heading" />
        </h2>

            <slot name="default"/>

        <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4">
            <slot name="footer" />
        </footer>
        </div>
    `,
    props:{
        heading:String,

    }
}