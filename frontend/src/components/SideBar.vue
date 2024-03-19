<template>
  <div class="bg-blue-900 h-[850px] flex flex-col justify-start items-start py-5 px-10 dark:bg-blue-950">
    <div class="mb-10">
        <h1 class="text-2xl font-bold text-gray-50">Invoice Maker</h1>
    </div>
    <div class="flex flex-col justify-start">
        <ul class="list-style-none">
          <li class="w-full my-4"><router-link :to="{name: 'Home'}"><i class="fa-solid fa-house-user me-3"></i>Home</router-link></li>
          <li class="w-full my-4"><router-link :to="{name: 'LoanList'}"><i class="fa-solid fa-landmark me-3"></i>Loan List</router-link></li>
          <li class="w-full my-4"><router-link :to="{name: 'Invoices'}"><i class="fa-solid fa-file-invoice-dollar me-3"></i>Invoices</router-link></li>
          <li class="w-full my-4"><router-link :to="{name: 'AboutUs'}"><i class="fa-solid fa-users me-3"></i>By Name</router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
  width: 200px;
  padding: 10px 20px;
  color: white;
  background-color: transparent;
  display: inline-block;
  margin: 5px 0;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;

  transition: all 1s;
}
a.router-link-active{
  background: #f4f4f4;
  color: gray;
}
</style>