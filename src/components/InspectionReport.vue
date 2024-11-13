<template>
  <div v-if="inspection[0]?.completedInspections">
    <div v-for="completedInspection in inspection[0]?.completedInspections">
  <!-- Schade Inspectie Card -->
  <ion-card v-if="completedInspection.type == 'Schade-inspectie'">
    <ion-card-header>
        <ion-card-title>Opgenomen schade</ion-card-title> 
    </ion-card-header> 
    <ion-card-content>
      <ion-item >
        <ion-label>Locatie:</ion-label>
        <ion-text>{{ completedInspection.location }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Soort schade:</ion-label> 
        <ion-text>{{ completedInspection.damageType }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Nieuwe schade:</ion-label>
        <ion-text>{{ completedInspection.newDamage ? 'Ja' : 'Nee'}}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Acute actie vereist:</ion-label>
        <ion-text>{{ completedInspection.urgentRequired ? 'Ja' : 'Nee'}}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>
          Omschrijving:
            <p>
              <ion-text>{{ completedInspection.description }}</ion-text>
            </p>
        </ion-label>
      </ion-item>

      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-label>Visuele documentatie</ion-label>
          </ion-col>
          <ion-col size="6" v-for="photo in completedInspection.photos">
            <img :src="`/inspection/${photo.url}`" :alt="photo.description" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>

  <!-- Achterstalling onderhoud -->
  <ion-card v-if="completedInspection.type == 'Achterstallig onderhoud-inspectie'">
    <ion-card-header>
      <ion-card-title>Opgenomen achterstallig onderhoud</ion-card-title>  
    </ion-card-header>  
    <ion-card-content>
      <ion-item >
        <ion-label>Locatie:</ion-label>
        <ion-text>{{ completedInspection.location }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Soort onderhoud:</ion-label>
        <ion-text>{{ completedInspection.maintenanceType }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Acute Actie Vereist:</ion-label>
        <ion-text>{{ completedInspection.urgentRequired? 'Ja' : 'Nee' }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Kosten indicatie:</ion-label>
        <ion-text>{{ completedInspection.costEstimate }}</ion-text>
      </ion-item>

      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-label>Visuele documentatie</ion-label>
          </ion-col>
          <ion-col size="6" v-for="photo in completedInspection.photos">
            <img :src="`/inspection/${photo.url}`" :alt="photo.description" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>

  <!-- Technische installaties -->
  <ion-card v-if="completedInspection.type == 'Technishe installatie-inspectie'">
    <ion-card-header>
      <ion-card-title>Geïnspecteerde technische installaties</ion-card-title> 
    </ion-card-header> 

    <ion-card-content>
      <ion-item >
        <ion-label>Locatie:</ion-label>
        <ion-text>{{ completedInspection.location }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Soort installatie:</ion-label>
        <ion-text>{{ completedInspection.installationType }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>
          Gemelde storingen:
          <p>
            <ion-text>{{ completedInspection.reportedIssues }}</ion-text>
          </p>
        </ion-label>
      </ion-item>

      <ion-item >
        <ion-label>Goed gekeurd:</ion-label>
        <ion-text>{{ completedInspection.approved ? 'Ja' : 'Nee' }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>
          Opmerkingen:
          <p>
            <ion-text>{{ completedInspection.remarks }}</ion-text>
          </p>
        </ion-label>
      </ion-item>

      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-label>Visuele documentatie</ion-label>
          </ion-col>
          <ion-col size="6" v-for="photo in completedInspection.photos">
            <img :src="`/inspection/${photo.url}`" :alt="photo.description" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>

  </ion-card>

  <!-- Modificaties inventariseren -->
  <ion-card v-if="completedInspection.type == 'Modificatie-inspectie'">
    <ion-card-header>
      <ion-card-title>Opgenomen modificatie</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      <ion-item >
        <ion-label>Locatie:</ion-label>
        <ion-text>{{ completedInspection.location }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>Uitgevoerd door:</ion-label>
        <ion-text>{{ completedInspection.performedBy }}</ion-text>
      </ion-item>

      <ion-item >
        <ion-label>
          Beschrijving:
          <p>
            <ion-text>{{ completedInspection.modificationDescription }}</ion-text>
          </p>
        </ion-label>
      </ion-item>

      <ion-item >
        <ion-label>Te ondernemen actie:
          <p>
            <ion-text>{{ completedInspection.actionToBeTaken }}</ion-text>
          </p>
        </ion-label>
      </ion-item>

      <ion-item >
        <ion-label>
          Opmerkingen:
          <p>
            <ion-text>{{ completedInspection.remarks }}</ion-text>
          </p>
        </ion-label>
      </ion-item>

      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-label>Visuele documentatie</ion-label>
          </ion-col>
          <ion-col size="6" v-for="photo in completedInspection.photos">
            <img :src="`/inspection/${photo.url}`" :alt="photo.description" />
          </ion-col>
        </ion-row>
      </ion-grid>    
      

    </ion-card-content>
  </ion-card>
  </div>
  </div>
  <div v-else>
    Bezig met laden...
  </div>
</template>

<script setup>
import { 
  IonRow, 
  IonLabel,
  IonCol,
  IonText,
  IonCard, 
  IonGrid,
  IonCardContent,
  IonCardHeader, 
  IonCardTitle,
  IonItem,
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
ion-item ion-label{
  font-size: 1.7rem;
  font-weight: 800;
}
ion-text{
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ion-color-secondary);
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
}
ion-item ion-label p{
  margin-top: 5px;
}
</style>