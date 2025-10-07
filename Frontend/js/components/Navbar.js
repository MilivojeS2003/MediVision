export default{
    template:`
        <template>
  <nav class="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
    <!-- Logo -->
    <div class="text-2xl font-bold tracking-wide">
      My<span class="text-indigo-500">App</span>
    </div>

    <!-- Navigacija -->
    <ul class="hidden md:flex space-x-6">
      <li><a href="#" class="hover:text-indigo-400 transition-colors">Home</a></li>
      <li><a href="#" class="hover:text-indigo-400 transition-colors">About</a></li>
      <li><a href="#" class="hover:text-indigo-400 transition-colors">Services</a></li>
      <li><a href="#" class="hover:text-indigo-400 transition-colors">Contact</a></li>
    </ul>

    <!-- Dugme za mobilni meni -->
    <button class="md:hidden text-2xl focus:outline-none" @click="toggleMenu">
      ☰
    </button>

    <!-- Mobilni meni -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute top-14 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden"
      >
        <li><a href="#" class="hover:text-indigo-400 transition-colors">Home</a></li>
        <li><a href="#" class="hover:text-indigo-400 transition-colors">About</a></li>
        <li><a href="#" class="hover:text-indigo-400 transition-colors">Services</a></li>
        <li><a href="#" class="hover:text-indigo-400 transition-colors">Contact</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

    `
}