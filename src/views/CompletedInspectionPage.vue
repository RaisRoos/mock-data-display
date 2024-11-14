<template>
   <ion-page class="container">
    <ion-header class="ion-no-border"> 
        <ion-toolbar  class="ion-padding-vertical">
            <ion-buttons class="backButton">
                <ion-thumbnail slot="start">
                    <ion-back-button mode="md" defaultHref="/"></ion-back-button>
                </ion-thumbnail>
            </ion-buttons>     
        </ion-toolbar>
        <ion-row>
            <ion-segment mode="ios" :value="segmentValue" @ionChange="changeSegment">
                <ion-segment-button value="inspectionReport">
                   <ion-label>Inspectierapport</ion-label>
                </ion-segment-button>
                <ion-segment-button value="inspectionDetails">
                   <ion-label>Details</ion-label>
                </ion-segment-button> 
            </ion-segment>
        </ion-row>
    </ion-header>
    <ion-content :fullscreen="true" color="white">
        <div v-if="segmentValue ==='inspectionReport'">
           <InspectionReport :inspection="inspection"/>
        </div>
        <div v-if="segmentValue ==='inspectionDetails'">
           <InspectionDetails :inspection="inspection"/>
        </div>
    </ion-content>
   </ion-page>
</template>

<script setup>
import { 
    IonPage,  
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonThumbnail,
    IonBackButton, 
    IonRow , 
    IonSegment,
    IonSegmentButton,
    IonLabel,
} from '@ionic/vue';

import InspectionReport from '@/components/InspectionReport.vue';
import InspectionDetails from '@/components/InspectionDetails.vue';

import inspectionsService from '@/services/inspectionsService.ts'

import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const inspectionId = route.params.id;

const segmentValue = ref("inspectionReport")
const changeSegment = (event)=>{
    segmentValue.value = event.detail.value;
}

const inspections = ref(null)
const inspection = computed(()=>{
  if (inspections.value) {
    return inspections.value.filter((inspection) => inspection.id === inspectionId);
  }
  return [];
})

onMounted(async () => {
  try {
    const response = await inspectionsService.getPage('/inspections');
    inspections.value = response.data;
    console.log(inspection.value);
  } catch (err) {
    console.error("Error:", err);
  }
});

</script>

<style scoped>
ion-toolbar {
  --background:transparent;
  --background:url(@/assets/image/bg44.png) no-repeat top center;
  height: 12vh;   
}
ion-buttons{
  margin-top:3vh;
  height: 26px;
}
.backButton{
    margin: 2vh 1.5vh;
}
ion-thumbnail{
  background-color: var(--ion-color-primary);
  border: 1px solid var(--ion-color-tertiary);
  --border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ion-segment {
  --background: var(--ion-color-light);
}
ion-segment-button{
  margin: 20px 7px;
  --background: white;
  --border-color: var(--ion-color-light);
  --indicator-color:var(--ion-color-primary);
  --color: var(--ion-color-primary);
  --color-checked: var(--ion-color-light);
  --border-radius: 5px;   
}
ion-segment-button ion-label{
  font-size: 0.9rem;
  font-weight: 500;
}
</style>