<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Home</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card>
          <img class="header" src="https://www.ccsdut.org/cms/lib/UT02205719/Centricity/Domain/694/GreenCanyonWolves%20with%20Wolf%20Graphic.png" style="height: 100px;">
        </ion-card>

        <div class="line"></div>

        <div class="infocategory">
        <ion-card class="categoryheader">
          <ion-card-header>
            <ion-card-title style="text-align: center;">Announcements</ion-card-title>
          </ion-card-header>
        </ion-card>
        <div id="cards">
          <ion-card v-for="(item, index) in announcements" :key="index" class="infocontent">
            <img alt="announcement image" :src=" item.imglink" class="cardimg" />

            <ion-card-header class="cardheader">
                <ion-card-title> {{ item.title }} </ion-card-title>
                <ion-card-subtitle> {{ getDate(item.timestamp) }}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="cardcontent">
              <p>
                {{ shorten(item.descr) }}
              </p>
              <ion-button :href="'/article?index=' + index">Learn More</ion-button>

            </ion-card-content>

        </ion-card>
      </div>
        </div>

        <ion-card class="categoryheader">
          <ion-card-header>
            <ion-card-title style="text-align: center;">Polls</ion-card-title>
          </ion-card-header>
        </ion-card>
        <div id="cards">
          <div v-for="(p, i) in polls" :key="i">

              <ion-card class="infocontent">
                <img v-if="p.image != null && p.image != ''" style="height: 200px;" alt="announcement image" class="cardimg" :src="p.image">
                <ion-card-header class="cardheader">
                  <ion-card-title> {{ p.title }} </ion-card-title>
                  <ion-card-subtitle> {{ getDate(p.timestamp) }}</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content class="cardcontent">
                  <p>
                    {{ shorten(p.desc) }}
                  </p>
                <ion-button :href="'/poll?index=' + p.id" :disabled="isDisabled(p)" class="vote" >{{ p.button }}</ion-button>
                </ion-card-content>
                

              </ion-card>
            </div>
          </div>
      </ion-content>
    </ion-page>
  </template>
  
<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardContent, IonCardSubtitle, IonInfiniteScrollContent, IonInfiniteScroll, IonInfinite} from '@ionic/vue';
import { APIENDPOINT, setCookie, getCookie } from './constants';
import { reactive } from 'vue';

const announcements = reactive([]); 
const polls = reactive([]); 

// functions to get new things

const getNewAnn = async () => {
  const endpoint = APIENDPOINT + "/announcements?max=3&offset=0";
  console.log(endpoint);
  try {
    const result =  (await (await fetch(endpoint, {method: "GET"})).json()).data;
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
  return [];
}

const getPolls = async () => {
  try {
    const result =  (await (await fetch(APIENDPOINT + "/polls?sortbytime=1&max=3&offset=0", {method: "GET"})).json()).data;
    return result;
  } catch (e) {
    console.log(e);
  }
  return [];
};

// Actually getting the items

getNewAnn().then((result) => {
  announcements.splice(0, announcements.length, ...result);
});
getPolls().then((result) => {
  polls.splice(0, polls.length, ...result)
})


const getDate = (d) => {
  const timestamp = d * 1000;
  const date = new Date(timestamp);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
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

function shorten(str) {
  return str.length > 35 ? str.substring(0, 35) + '...' : str;
}

</script>

  <style scoped>
  .line {
    width: 80%;
    height: 2px;
    background-color: rgb(95, 95, 95);
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }

  .categoryheader ion-card-title {
    font-size: 30px !important;
    font-weight: 900;
  }

  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 65px;
  }

  ion-card {
    text-align: center;
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

  .cardcontent {
    padding: 0px;
    margin: 0;
  }
  .cardheader {
    padding: 0px;
    margin: 0;
    padding-top: 10px;
    align-self: flex-end;
  }
  .cardimg {
    float: left;
    height: 500px;
    width: 50%;
    max-height: 150px;
    object-fit: cover;
  }
  .infocontent {
    display: flexbox;
    justify-content: space-between;
    margin-left: 24px;
    margin-right: 24px;
  }

  </style>
  