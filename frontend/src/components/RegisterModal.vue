<template>
  <div class="w-[500px] h-[600px] bg-gray-500 top-[100px] right-[400px] absolute dark:bg-gray-700 p-10">
    <h1 class="text-black text-3xl font-semibold mb-3 dark:text-gray-300">Register</h1>
    <div class="text-white text-2xl font-semibold cursor-pointer absolute top-3 right-3 dark:text-red-500" @click="closeModal">&times;</div>
    <form>
        <div class="mt-5">
            <label class="block text-black text-xl mb-1 dark:text-gray-200">Name</label>
            <input type="text" class="w-full bg-gray-200 text-gray-950 rounded-md px-2 py-1 dark:bg-gray-400 focus:outline-0" />
        </div>

        <div class="mt-5">
            <label class="block text-black text-xl mb-1 dark:text-gray-200">E-mail</label>
            <input type="text" class="w-full bg-gray-200 text-gray-950 rounded-md px-2 py-1 dark:bg-gray-400 focus:outline-0" />
        </div>

        <div class="mt-5">
            <label class="block text-black text-xl mb-1 dark:text-gray-200">Password</label>
            <input type="text" class="w-full bg-gray-200 text-gray-950 rounded-md px-2 py-1 dark:bg-gray-400 focus:outline-0" />
        </div>

        <div class="flex justify-end mt-5">
            <button class="bg-yellow-600 text-black font-semibold rounded-sm px-4 py-2 dark:bg-yellow-950 dark:text-white me-3" @click="closeModal">Cancel</button>
            <button class="bg-blue-600 text-black font-semibold rounded-sm px-4 py-2 dark:bg-blue-950 dark:text-white">Register</button>
        </div>


    </form>
  </div>
</template>

<script>
export default {
    methods: {
        closeModal(){
            this.$emit('closeModal');
        }
    },
}
</script>

<style>

</style>