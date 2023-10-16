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
            <ion-title size="large">Polls</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-card>
          <ion-card-content>
            <strong style="font-size: 30px; line-height: 26px;">Polls</strong>

          </ion-card-content>
        </ion-card>
        <div id="cards">
          <div v-for="(p, i) in polls" :key="i">

            <ion-card>
              <img v-if="p.image != null && p.image != ''" style="height: 200px;" alt="announcement image" :src="p.image">
              <ion-card-header>
                <ion-card-title> {{ p.title }} </ion-card-title>
                <ion-card-subtitle> {{ getDate(p.timestamp) }}</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                <p>
                  {{ p.desc }}
                </p>
                
              </ion-card-content>
              
              <div class="voteButton">
                <ion-button :href="'/poll?index=' + p.id" :disabled="isDisabled(p)" class="vote" >{{ p.button }}</ion-button>
              </div>
            </ion-card>
          </div>
          <ion-infinite-scroll @ionInfinite="ionInfinite">
            <ion-infinite-scroll-content></ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardContent, IonCardSubtitle, IonInfiniteScrollContent, IonInfiniteScroll} from '@ionic/vue';
import { reactive } from 'vue';
import { Storage } from '@ionic/storage';
import { APIENDPOINT, setCookie, getCookie } from './constants';


const polls = reactive([]);
let off = 0;

async function delayedFalse() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(false);
    }, 1000); // 1000 milliseconds = 1 second
  });
}

function isDisabled (p) {
  console.log(getCookie("answered"));
  if (getCookie("answered") == null) {
    setCookie("answered", []);
    console.log("setting button " + p.disabled);
    return p.disabled;
  }
  console.log(eval(p.disabled) || (getCookie("answered")).includes(p.id + ""));
  return eval(p.disabled) || (getCookie("answered")).includes(p.id + "");
}

const getPolls = async () => {

  try {
    const result =  (await (await fetch(APIENDPOINT + "/polls?sortbytime=1&max=10&offset=" + (off), {method: "GET"})).json()).data;
    return result;
  } catch (e) {
    console.log(e);
  }
  return [];
};

const getDate = (d) => {
  const timestamp = d * 1000;
  const date = new Date(timestamp);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}



const ionInfinite = (ev) => {
  off += 10;
  getPolls().then((result) => {
    if (result.length == 0) {
      return;
    }
    console.log(result);
    result.forEach(element => {
      polls.push(element);
    });
    setTimeout(() => ev.target.complete(), 500);

  });
};

getPolls().then((result) => {
  polls.splice(0, polls.length, ...result)
})


</script>
  
<style scoped>
  
  ion-card {
    text-align: center;
  }

  p {
    font-size: large !important;
  }

</style>
  