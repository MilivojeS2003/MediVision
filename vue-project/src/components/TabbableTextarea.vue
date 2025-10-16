<script setup>
    import {onMounted, ref} from 'vue'

    let textarea = ref(null)
    function onTabPress(e) {
        let t = textarea.value
            console.log('TAB KLIKNUT');
            // get caret position/selection
            let val = t.value,
            start = t.selectionStart,
            end = t.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            t.value = val.substring(0, start) + "\t" + val.substring(end);

            // put caret at right position again
            t.selectionStart = t.selectionEnd = start + 1;

            e.preventDefault();
        }
</script>

<template>
    <textarea ref="textarea" @keydown.tab="onTabPress">Hi there</textarea>
</template>
