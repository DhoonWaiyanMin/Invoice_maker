<template>
    <div class="w-full bg-blue-900 flex justify-end items-center px-10 py-5 dark:bg-blue-950">
        <div class="text-white flex items-center">

            <div class="mx-5 text-lg">
                <ul class="flex gap-x-5">
                    <li><button @click="handleModal">Register</button></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>

            <RegisterModal v-if="isModalOpen" @closeModal="isModalOpen = false"></RegisterModal>

            <div class="ms-5">
                <button v-if="!isDark" @click="toggleDark"><i class="fa-solid fa-sun"></i></button>
                <button v-else @click="toggleDark"><i class="fa-solid fa-moon"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import RegisterModal from './RegisterModal.vue'
export default {
  components: { RegisterModal },
  data() {
    return {
        'isDark' : false,
        'isModalOpen' : false
    }
  },
  methods: {
    toggleDark(e) {
      console.log(this.isDark);
      if(this.isDark){
        document.documentElement.classList.remove('dark');
        this.isDark = false
      }else{
        document.documentElement.classList.add('dark');
        this.isDark = true
      }
    },
    handleModal(){
        this.isModalOpen = true
    }
  }
}
</script>