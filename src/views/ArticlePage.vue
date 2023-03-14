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

        <ArticleComp title=""></ArticleComp>

      </ion-content>
    </ion-page>
  </template>
  
  <script>
import ArticleComp from './ArticleTemp.vue';

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { reactive } from 'vue';

  const announcements = reactive([]); 

  const getNewAnn = async () => {
    const result =  await (await fetch("http://localhost:3000/announcements", {method: "GET"})).json();
    console.log(result);
    return result;
  }

  getNewAnn().then((result) => {
    announcements.splice(0, announcements.length, ...result);
    console.log("EEEEHHH" + announcements);
  });

export default {
  name: 'MyComponent',
  components: {
    ArticleComp
  }
}
</script>
  