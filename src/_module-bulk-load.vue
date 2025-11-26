<script setup>
import ButtonArray from './components/BulkUpload/ButtonArray.vue';
import FileUpload from './components/BulkUpload/Dialogs/FileUpload.vue';
import { onMounted } from 'vue';

onMounted(() => {
  
})

</script>

<template>
  <div class="mb-10">
    <div class="pl__heading">
      <h2>Bulk Upload</h2>
    </div>
    <div class="products__container bg_red">
      <ButtonArray/>
      <FileUpload/>
      <div class="my-7"></div>
      <div class="d-flex justify-space-between">
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.pl__heading {
  padding: 10px 20px;
  background-color: rgb(28, 42, 75);
  color: white;
}
/* .bg_red{
    background-color: red;
} */
.products__container {
  margin: 20px 60px 0px 60px;
}
</style>
