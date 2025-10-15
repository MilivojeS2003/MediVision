<script>
import flash from '../mixins/flash'

export default{
  mixins:[flash] //U ovu komponentu dodaj sve metode iz flash mixina
}
//   import swal from 'sweetalert';

// export default{
//   methods:{
//     flash(message){
//       swal('Success!',message, 'success')
//     }
//   }
// }
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="flash('It works on the aboute page!')">Click</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
