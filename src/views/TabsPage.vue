<template>
  <ion-page class="container">  
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
          <!-- <ion-label>Tab 1</ion-label> -->
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="search" />
          <!-- <ion-label>Tab 2</ion-label> -->
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="notifications" />
          <!-- <ion-label>Tab 3</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet} from '@ionic/vue';
import {  home, search,notifications } from 'ionicons/icons';
</script>

<style scoped>

ion-tabs {
    background: transparent;
  }
  
  ion-tabs ion-tab-bar {
    height: 80px;
    width: 90%;
    --background: var(--ion-color-secondary);
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.196);
  
    position: relative;
    left: 50%;
    transform: translate(-50%, -10%);
    overflow: hidden;
  
    border-radius: 50px;
  }
  
  ion-tab-button {
    --color: var(--ion-color-tertiary);
  }
  
  ion-tab-button ion-icon {
    font-size: 1.9rem;
    --color: var(--ion-color-tertiary);
  }
</style>
