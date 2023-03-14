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

        <p>
            Hello World!
        </p>

      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    name: 'ArticleComp',
    props: {
      title: String,
      article: String
    }
  }
  </script>
  