<template>
              <div class="col-span-6 flex items-center gap-4">
                <div class="h-12 w-12 rounded-xl overflow-hidden bg-slate-300">
                  <img class="h-full w-full object-cover" :src="`https://i.pravatar.cc/80?img=${imgId}`" alt="James Doe" />
                </div>
                <div class="text-lg font-semibold">{{ name }}</div>
              </div>
              <div class="col-span-4 text-slate-600">{{ email }}</div>
              <div class="col-span-2 font-semibold text-emerald-500">{{ active }}</div>
</template>

<script setup>
defineProps({
    name:String,
    email:String,
    active:String,
    imgId:String
})
</script>