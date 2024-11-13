<template>
    <ion-list lines="none">
        <ion-list-header>
            <ion-label>
                Uitgevoerde inspecties
            </ion-label>
        </ion-list-header>
        <div v-if="inspections">   
        <ion-card v-for="inspection in inspections" :key="inspection.id" >
            <router-link  :to="'/inspections/'+ inspection.id" >
            <ion-list lines="none" >
                <ion-item class="ion-margin-bottom" color="primary">
                    <ion-label>
                        {{ inspection.description }}
                        <p>
                            Inspectie nr:
                            <ion-chip color="light">
                                {{ inspection.id}}
                            </ion-chip>
                        </p>
                    </ion-label>
                    <ion-button class="checkmark" slot="end" fill="clear" color="medium">
                        <ion-icon :icon="checkmarkDoneOutline " />  
                    </ion-button>
                </ion-item>

                <ion-item color="primary">
                    <ion-thumbnail slot="start">
                        <ion-icon :icon="location" color="primary"></ion-icon>
                    </ion-thumbnail>
                    <ion-label class="locationInfo">
                        {{ inspection.client }}
                        <p>
                            
                            <ion-text>{{ inspection.address }}</ion-text>
                        </p>
                    </ion-label>
                    <ion-text slot="end" color="light">{{ inspection.date }}</ion-text>
                </ion-item>
                
            </ion-list>
            </router-link>
        </ion-card>
        </div>
        <div v-else>
            Bezig met laden...
        </div>
    </ion-list>

</template>

<script setup>
import { 
    IonList,
    IonListHeader,
    IonButton,
    IonLabel,
    IonText,
    IonCard,
    IonItem,
    IonChip,
    IonThumbnail,
    IonIcon,

} from '@ionic/vue';

import { checkmarkDoneOutline,location  } from 'ionicons/icons';

const props = defineProps({
    inspections:{
        type: Object
    }
})
</script>

<style scoped>
 ion-list{
    background: transparent;
 }
 ion-list-header{
    padding-right: 1vh;
 }
ion-list-header ion-label{
    font-size: 1.2rem;
}
ion-card{
    background-color: var(--ion-color-primary);
    margin: 1.5vh;
    border-radius: 15px;
}
ion-card ion-list{
    background: transparent;
    margin-top: 1vh;
    margin-bottom: 1vh;
}
ion-item ion-label{
  font-size: 0.95rem;
  font-weight: bold;
}
ion-label p{
    font-size: 0.9rem;
    font-weight: 500;
    /* margin-top: 5px; */
}
ion-chip {
    font-size: 0.7rem;
    border-radius: 8px;
    font-weight: 800;
    min-height: 0;
    padding: 4px 8px;
    margin-left: 10px;
    color: var(--ion-color-tertiary);
    letter-spacing: 2px;
}
.checkmark{
    align-self: start;
    margin-top: 1vh;
}
.checkmark ion-icon{
    color: white;
    font-size: 2rem;
}
ion-thumbnail{
    width: 4vh;
    height: 5vh;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
ion-thumbnail ion-icon{
    font-size: 2rem;
}
.locationInfo{
    font-size: 0.9rem;

}
.locationInfo p{
    font-size: 0.8rem;
    padding-top: 3px;
}
</style>