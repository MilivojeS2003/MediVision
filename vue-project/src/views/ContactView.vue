<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from 'vue'
import {useFlash} from '@/composables/useFlash'
const count = ref(0)
const message = ref('Hello World')
let { flash } = useFlash()

onMounted(()=>{
    alert('Hi there')
})

let doSomthing = () =>{
    alert('doing it now')
}

setTimeout(()=>{
    message.value = 'I have been changed'  //ovo je zato sto ref() ne pravi obican string vec objekat i moramo pristupiti vrijednosti value
},2000)
</script>

<template>
  <main>
    <div class="contact-div">
        <h1 class="contact-heading">OVO JE CONTACT PAGE</h1>
         <button @click="count++">Count is: {{ count }}</button>
         <p>{{ message }}</p>
         <p>
            <input type="text" v-model="message"></input>
         </p>
         <button @click="doSomthing">DOING</button>
         <button @click="flash('It works!!!')">FLASH FUNCTION</button>
    </div>
</main>
</template>

<style scoped>
@media(min-width:1024){

.contact-div{
    min-height:100vh;
    display:flex;
    text-align:center
}

}

button {
  font-weight: bold;
}

</style>