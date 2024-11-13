<template>
    <ion-header class="ion-no-border"> 
        <ion-toolbar  class="ion-padding-vertical">
           <ion-buttons >
                <ion-title mode="ios">
                  <img src="../assets/logo/real-estate-care-dark.svg" alt="Real Estate Care Logo" />
                </ion-title>
           </ion-buttons>   
        </ion-toolbar>
    </ion-header>
</template>

<script setup>
 import { 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons
} from '@ionic/vue';
</script>

<style scoped>
 ion-toolbar {
    --background:transparent;
    --background:url(../assets/image/bg44.png) no-repeat top center;
    height: 17vh;   
  }
  ion-buttons{
    margin-top:7vh;
    height: 26px;
  }
</style>