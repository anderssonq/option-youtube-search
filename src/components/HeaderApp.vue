<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center justify-space-around animate__animated animate__bounceInLeft">
      <h1 class="display-1">Your</h1>
      <div class="display-1 ml-1 brand_logo">Search</div>
      <h1 class="display-1">.com</h1>
    </div>
    <v-spacer></v-spacer>
    <v-btn href="https://andersson-dev.herokuapp.com/" target="_blank" text class="animate__animated animate__bounceInRight">
      <span class="mr-2">by Andersson Quintero</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style>
.brand_logo {
  background: #ffffffd6;
  padding: 5px;
  border-radius: 20px;
  color: red;
  font-weight: bold;
}
</style>
