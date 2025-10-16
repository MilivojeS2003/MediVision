<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {onMounted, ref} from 'vue'
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import MessageBox from '@/components/MessageBox.vue'


//let textarea = ref(null)
// onMounted(()=>{
//   //console.log(textarea.value.value);

//   textarea.value.addEventListener("keydown", (e) => {
    
//     let t = textarea.value
//   // tab was pressed
//   if (e.keyCode === 9) {
//     console.log('TAB KLIKNUT');
//     // get caret position/selection
//     let val = t.value,
//       start = t.selectionStart,
//       end = t.selectionEnd;

//     // set textarea value to: text before caret + tab + text after caret
//     t.value = val.substring(0, start) + "\t" + val.substring(end);

//     // put caret at right position again
//     t.selectionStart = t.selectionEnd = start + 1;

//     e.preventDefault();
//   }
// });
// })

// function onTabPress(e) {
//   let t = textarea.value
//     console.log('TAB KLIKNUT');
//     // get caret position/selection
//     let val = t.value,
//       start = t.selectionStart,
//       end = t.selectionEnd;

//     // set textarea value to: text before caret + tab + text after caret
//     t.value = val.substring(0, start) + "\t" + val.substring(end);

//     // put caret at right position again
//     t.selectionStart = t.selectionEnd = start + 1;

//     e.preventDefault();
//   }


</script>

<template>
  <main>
    <MessageBox title="Pozdrav" message="Dobrodošao u Vue 3!"></MessageBox>

    <!-- <TheWelcome /> -->
    <form>
      <!-- <textarea ref="textarea" @keydown.tab="onTabPress" style="width:100%; height:300px;">Hi there</textarea> -->
       <TabbableTextarea style="width:100%; height:300px;"></TabbableTextarea>
    </form> 
  </main>
</template>
