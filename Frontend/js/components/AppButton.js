export default {
  template: `
    <button 
        :class="{
            'hover:bg-gray-400 border rounded px-4 py-2':true,
            'bg-gray-200' : type === 'primary',
            'bg-blue-200' : type === 'secondary',
            'bg-purple-200' : type === 'muted'
}">
      <slot />
    </button>
  `,

  props:{
    type:{
        type:String,
        default:"primary"
    }
  }
  // mounted() {
  //   alert('hello');
  // }
}
