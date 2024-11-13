<template>
    <div class="container ion-margin">
        <h1>Dashboard Overzicht</h1>
      <ion-row>
          <ion-col size="6" v-for="card in dashboardCards">
            
              <ion-card color="primary">
                  <ion-card-header>
                       <ion-icon :icon="card.icon"></ion-icon>
                  </ion-card-header>
                  <ion-card-content>
                      {{ card.title }}
                  </ion-card-content>
              </ion-card>
         
          </ion-col>
      </ion-row>
  
    </div>
  
  </template>
  
  <script setup>
    import { 
      IonRow, 
      IonCol, 
      IonCard, 
      IonCardContent,
      IonCardHeader,
      IonIcon 
  } from '@ionic/vue';
  
    import { 
      documentTextOutline,
      checkmarkCircleOutline, 
      settingsOutline ,
      bookOutline 
  } from 'ionicons/icons';
  
    import { ref } from 'vue';
  
    const dashboardCards = ref([
      {id:1, title:'Openstaande inspecties', link:'/pending-inspections', icon:documentTextOutline},
      {id:2, title:'Uitgevoerde inspecties', link:'/completed-inspections', icon:checkmarkCircleOutline},
      {id:3, title:'Instellingen', link:'/settings', icon:settingsOutline},
      {id:3, title:'Kennisbank', link:'/knowledge', icon:bookOutline},
    ])
  
  </script>
  
  <style scoped>
  ion-row{
      padding: 5px;
      background: white;
  }
  ion-card{
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 0.1rem;
      height: 28vh;
  }
  
  ion-card-header{
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      width: 12vh;
      height: 12vh;
      border-radius: 50%;
      margin-top: 22px;
  }
  ion-icon{
      font-size: 4rem;
      color: var(--ion-color-primary);
  }
  ion-card-content{
      padding-inline: 11px;
      font-size: 1.2rem;
      font-weight: 600;
  }
  h1{
    font-size: 1.2rem;
    padding-left: 1vh;
    letter-spacing: 0.6px;
    font-weight: 700;
  }
  </style>