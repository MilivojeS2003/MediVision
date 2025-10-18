<template>
    <RouterLink :to="`/${route}`" v-slot="{ isActive }">
        <div
          :class="[
            'flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition',
            isActive ? 'bg-white/15 text-white shadow-inner' : 'text-slate-100/90 hover:bg-white/10'
          ]"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 16V4" />
            <path d="m7 9 5-5 5 5" />
            <path d="M4 20h16" />
          </svg>
          <span class="font-medium">{{name}}</span>
        </div>
        </RouterLink>
</template>

<script setup>

defineProps({
    name:String,
    route:String,
})
</script>