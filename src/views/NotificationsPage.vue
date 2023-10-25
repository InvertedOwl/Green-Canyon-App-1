<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Notifications</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Notifications</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <!-- Title -->
        <ion-card>
          <ion-card-content>
            <strong style="font-size: 30px; line-height: 26px;">Notifications</strong>
          </ion-card-content>
        </ion-card>

        <!-- Settings -->

        <ion-card>
          <ion-card-content>
            <div class="setting-container">
              <ion-toggle class="setting-toggle"></ion-toggle>
              <ion-label class="setting-label">
                <strong>Push Notifications</strong>
              </ion-label>
            </div>
            
            <hr>

            <div class="setting-container">
              <ion-toggle class="setting-toggle"></ion-toggle>
              <ion-label class="setting-label smaller">
                <strong>Game Notifications</strong>
              </ion-label>
            </div>

            <div class="setting-container">
              <ion-toggle class="setting-toggle"></ion-toggle>
              <ion-label class="setting-label smaller">
                <strong>Schedule Change Notifications</strong>
              </ion-label>
            </div>

            <div class="setting-container">
              <ion-toggle class="setting-toggle"></ion-toggle>
              <ion-label class="setting-label smaller">
                <strong>Event Notifications</strong>
              </ion-label>
            </div>

          </ion-card-content>
        </ion-card>

      </ion-content>
    </ion-page>
  </template>
  
<script setup>

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonToggle} from '@ionic/vue';
import { reactive } from 'vue';
import { APIENDPOINT } from './constants';


</script>


<script>
export default {

  
  data() {
    
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerWidth / 1.77777
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerWidth / 1.77777;
    }
  }
}
</script>




<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 65px;
}

.video {
  --inner-padding-end: 5;
  --padding-start: 5;
}

#cards > * {
  border-radius: 15px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #5c1e1e;
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-card {
  text-align: center;
}

.setting-container {
  display: flex;
  width: 100%;
  text-align: right;

}

.setting-toggle {
  float: left;
}

.setting-label {
  float: right;
  width: 100%;
  padding-top: 4px;
  font-size: 20px;
}

.smaller {
  font-size: 16px;
}

hr {
  background-color: #7a7a7a;
  height: 3px;
}

</style>
  