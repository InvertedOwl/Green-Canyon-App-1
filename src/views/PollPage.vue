<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Polls</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ title.title }}</ion-title>
          </ion-toolbar>
        </ion-header>

        
        <div v-for="index in polldata.polldata" :key="index">
          <ion-card>
            <ion-card-header>
              <ion-card-title>{{ index.title }}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <!-- <div v-if="index.type == 'text'">
              </div> -->

              <div v-if="index.type == 'checkbox'">
                <div v-for="choice in index.choices" :key="choice">
                  <!-- <ion-checkbox :id="choice">{{ "  " + choice }}</ion-checkbox> -->
                  <ion-item>
                    <ion-label  style="position: relative; left: 5px;">{{choice}}</ion-label>
                    <ion-checkbox label-placement="start"></ion-checkbox>
                  </ion-item>
                </div>
              </div>

              <div v-if="index.type == 'radio'">
                <ion-radio-group value>
                  <div v-for="choice in index.choices" :key="choice">
                    <ion-item>
                      <ion-radio slot="end" :value="choice"></ion-radio>
                      <ion-label>{{choice}}</ion-label>

                    </ion-item>
                  </div>
                </ion-radio-group>
              </div>
            </ion-card-content>
          </ion-card>
        </div>

        <ion-button style="position: relative; left: 50%; transform: translate(-50%);" @click="onSubmit">Submit Poll</ion-button>

      </ion-content>
    </ion-page>
  </template>
  
<script setup>
const title = reactive({});
const polldata = reactive({});
import { APIENDPOINT } from './constants';
import { Device } from '@capacitor/device';

const onSubmit = async () => {
  console.log( await Device.getId());
}

const qs = (function(a) {
  if (a == "") return {};
  const b = {};
  for (let i = 0; i < a.length; ++i)
  {
      const p=a[i].split('=', 2);
      if (p.length == 1)
          b[p[0]] = "";
      else
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));


const t = qs["index"];

const getIndexedPoll = async () => {
  try {
    const result =  (await (await fetch(APIENDPOINT + "/polls?max=1&offset=" + t, {method: "GET"})).json()).data;
    return result[0];
  } catch (e) {
    console.log(e);
  }
  return [];
}



getIndexedPoll().then((result) => {
  title.title = result.title;
  polldata.polldata = JSON.parse(result.polldata).poll
});


</script>

  <script>
import ArticleComp from './ArticleTemp.vue';

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonLabel, IonCheckbox, IonItem, IonRadio, IonRadioGroup, IonCardContent} from '@ionic/vue';
  import { reactive } from 'vue';

</script>

<style>

</style>
  