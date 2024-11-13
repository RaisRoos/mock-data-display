<template>
  <div v-if="inspection[0]?.completedInspections">
  <ion-card>
    <ion-card-header>
      <ion-card-title>Inspectiedetails</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
        <ion-item >
          <ion-label>
            Inspectiebeschrijving:
            <p>
              <ion-text>{{ inspection[0].description }}</ion-text>
            </p>
          </ion-label>
        </ion-item>

        <ion-item >
          <ion-label>
            Inspectie nr:
            <p>
              <ion-text>{{ inspection[0].id }}</ion-text>
            </p>
          </ion-label>
        </ion-item>

        <ion-item >
          <ion-label>
            Datum:
            <p>
              <ion-text>{{ inspection[0].date }}</ion-text>
            </p>
          </ion-label>
        </ion-item>

        <ion-item >
          <ion-label>
            Adres:
            <p>
              <ion-text>{{ inspection[0].address }}</ion-text>
            </p>
          </ion-label>
        </ion-item>

        <ion-item >
          <ion-label>
            Status:
            <p>
              <ion-text>{{ inspection[0].status }}</ion-text>
            </p>
          </ion-label>
        </ion-item>

        <ion-item >
          <ion-label>
            Uitgevoerde inspecties:
            <ul v-for="completedInspection in inspection[0].completedInspections">
              <li><ion-text>{{completedInspection.type }}</ion-text></li>
            </ul>
          </ion-label>
        </ion-item>

        <ion-item >
          <ion-label>
            Opdrachtgever:
            <p>
              <ion-text>{{ inspection[0].client}}</ion-text>
            </p>
          </ion-label>
        </ion-item>

        <ion-item lines="none">
          <ion-label>
            Inspecteur:
            <p>
              <ion-text>{{ inspection[0].inspector}}</ion-text>
            </p>
          </ion-label>
        </ion-item>

      </ion-list>
    </ion-card-content>
  </ion-card>
  </div>
  <div v-else>
    Bezig met laden...
  </div>
</template>

<script setup>
import { 
  IonLabel,
  IonText,
  IonCard, 
  IonCardContent,
  IonCardHeader, 
  IonCardTitle,
  IonItem,
  IonList
} from '@ionic/vue';

const props = defineProps({
  inspection:{
    type: Object
  }
})
</script>

<style scoped>
ion-card-header{
  background: var(--ion-color-primary);
}
    
ion-card-title{   
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
}
ion-item{
  --background: transparent;
      /* --border-style: dashed; */
  --border-color: var(--ion-color-primary);
      /* --padding-top: 0.8rem; */
  --padding-bottom: 0.3rem;
  --padding-start: 0;
  --padding-end: 0;
}
ion-card-content{
  padding-top: 12px;
  padding-bottom: 5px;
}
ion-label{
  display: flex;
  align-items: center;
  justify-content: space-around;   
}
ion-item ion-label{
  font-size: 1.7rem;
  font-weight: 800;
  padding-right: 20px;  
}

ion-item ion-label p{
  margin-top: 5px;
}
    
ion-text{
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ion-color-secondary);
}
    
</style>