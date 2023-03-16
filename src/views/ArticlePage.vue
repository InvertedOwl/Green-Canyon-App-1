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
            <ion-title size="large">{{ title.title }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ArticleComp :title="title.title" :article="article.article"></ArticleComp>

      </ion-content>
    </ion-page>
  </template>
  
<script setup>
  const title = reactive({});
  const article = reactive({});
  const announcements = reactive([]); 

  const getNewAnn = async () => {
    const result =  await (await fetch("http://localhost:3000/announcements", {method: "GET"})).json();
    console.log(result);
    return result;
  }

  const t = this.$route.query.index;

  getNewAnn().then((result) => {
    announcements.splice(0, announcements.length, ...result);
    title.title = announcements[t].title;
    article.article = announcements[t].article
    console.log(title);
  });
</script>

  <script>
import ArticleComp from './ArticleTemp.vue';

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { reactive } from 'vue';



export default {
  name: 'MyComponent',
  components: {
    ArticleComp
  }
}
</script>
  