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

        <ion-card >
          <img class="header" src="https://www.ccsdut.org/cms/lib/UT02205719/Centricity/Domain/694/GreenCanyonWolves%20with%20Wolf%20Graphic.png" style="height: 100px;">
        </ion-card>

        <div class="line"></div>

      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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

  .header {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }

  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 65px;
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
  