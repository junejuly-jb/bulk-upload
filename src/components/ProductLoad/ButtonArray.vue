<template>
    <div class="d-flex">
        <v-btn class="mr-3" color="primary" >Upload File<v-icon :icon="mdiUpload" end></v-icon></v-btn>
        <v-btn class="mr-3" color="success" >Save <v-icon :icon="mdiCheck" end></v-icon></v-btn>
    </div>
</template>
<script lang="ts" setup>
import { mdiCheck, mdiUpload } from '@mdi/js';
import { ref } from 'vue';

const isSaving = ref(false);



</script>