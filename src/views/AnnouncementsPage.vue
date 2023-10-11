<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Announcements</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Announcements</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-content>
          <strong style="font-size: 30px; line-height: 26px;">Announcements</strong>

        </ion-card-content>
      </ion-card>
      <div id="cards">
          <ion-card v-for="(item, index) in announcements" :key="index">
              <img style="height: 200px;" alt="announcement image" :src=" item.imglink" />
              <ion-card-header>
                  <ion-card-title> {{ item.title }} </ion-card-title>
                  <ion-card-subtitle> {{ getDate(item.timestamp) }}</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                <p>
                  {{ item.descr}}
                </p>
              </ion-card-content>
              <div id="learnButton">
                <ion-button id="learn" :href="'/article?index=' + index">Learn More</ion-button>
              </div>
          </ion-card>
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
  import { APIENDPOINT } from './constants';

  const announcements = reactive([]); 
  let off = 0;

const getNewAnn = async () => {
  const endpoint = APIENDPOINT + "/announcements?max=10&offset=" + (off);
  console.log(endpoint);
  try {
    const result =  (await (await fetch(endpoint, {method: "GET"})).json()).data;
    return result;
  } catch (e) {
    console.log(e);
  }
  return [];

}

const ionInfinite = (ev) => {
  off += 10;
  getNewAnn().then((result) => {
    if (result.length == 0) {
      return;
    }
    console.log(result);
    result.forEach(element => {
      announcements.push(element);
    });
    setTimeout(() => ev.target.complete(), 500);

  });
};

getNewAnn().then((result) => {
  announcements.splice(0, announcements.length, ...result);
});

const getDate = (d) => {
  const timestamp = d * 1000;
  const date = new Date(timestamp);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
  
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
  ion-card {
    text-align: center;
  }

  p {
    font-size: large !important;
  }

  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 65px;
  }
  #learn {
  }
  #learnButton {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  #cards {
  
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
  </style>
  