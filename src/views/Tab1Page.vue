<template>
  <ion-page class="container">
    
    <MainHeader />

    <ion-content :fullscreen="true">
      
      <MainDashboard />

      <CompletedInspectionsList :inspections="inspections"/>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent,IonPage } from '@ionic/vue';
import MainHeader from '@/components/MainHeader.vue';
import MainDashboard from '@/components/MainDashboard.vue';
import CompletedInspectionsList from '@/components/CompletedInspectionsList.vue';
import inspectionsService from '@/services/inspectionsService.js'

import { ref, onMounted, computed } from 'vue';

const inspections = ref(null)
const sortedByDateInspections = computed(()=>{
  return  inspections.value.sort((a,b)=>{
    return new Date(a.date) - new Date(b.date)
  })
})

onMounted(async () => {
  try {
    const response = await inspectionsService.getPage('/inspections');
   
    inspections.value = response.data;
    sortedByDateInspections.value
    console.log(inspections.value);
    
  } catch (err) {
    console.error("Error:", err);
  }
});


</script>

<style scoped>
</style>
