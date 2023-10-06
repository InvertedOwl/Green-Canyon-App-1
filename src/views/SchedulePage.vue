<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Weekly Schedule</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Schedule</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <pdf src="https://docs.google.com/viewerng/thumb?ds=AON1mFzwDZ42Fl6qS18gqY4w-MfqX7QU2nBXY_tawKgi-zN7R5dRoiUD5RK-Ap_QHgOjNvY0X3cu5Lz7BPcSyRKj9BBoiVyIa2xGp_elwqQURo-IVmzM0Cj4ZBJmabD-t71A2AYPdzkd9a4f_8SU2VlBpIrmuJbTTFiS9M8r994FKlEQw20JWUMCXf2dDIFUsl8iDouTeZcMzdXa0z8WICKdNHbWoH2TospB9T4NasqdGTtGdv17JET9JxAnZEdWaZHy5SbfBqMSZ-h7lRlc0sEbpkycd_M18_e-2Xlvjtu6edPk0oSvgZVP83RLJ_4bLj08w1bVd1Jt&ck=lantern&authuser=0&w=800&webp=true&p=proj"></pdf>

      </ion-content>
    </ion-page>
  </template>
  
<script setup>

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { reactive } from 'vue';

let resultNum = 5;

const getNewVideos = async () => {
  const result =  await (await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAy3canGYotL10o_c8EhlIwPjxDvliEhjw&channelId=UC31rtOI4SCddOKbNC6o3EYA&part=snippet,id&order=date&maxResults=" + resultNum, {method: "GET"})).json();
  console.log(result);
  return result.items;
}


const videoUrl = (videoId) => {
  console.log(videoId);
  return `https://www.youtube.com/embed/${videoId}`;
}

const items = reactive([]);
getNewVideos().then((result) => {
  items.splice(0, items.length, ...result);
  console.log("EEEEHHH" + items);
});

const ionInfinite = (ev) => {
  resultNum += 5;
  getNewVideos().then((result) => {
    items.splice(0, items.length, ...result);
    console.log("EEEEHHH" + items);
    setTimeout(() => ev.target.complete(), 500);

  });
};
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
</style>
  