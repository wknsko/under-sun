<template>
  <div class="window" style="overflow-y:auto">

    <header>
      <div class="logo">
        <router-link to="/">Under Sun</router-link>
      </div>

      <div @click="clickMenu" class="burger">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="burger-menu">
        <ul>
          <li v-for="item in menu" :key="item">
            <router-link :to="'/' + item.toLowerCase()">{{item}}</router-link>
          </li>
        </ul>
        <img src="./assets/icons/search.svg" alt="">
        <img src="./assets/icons/heart.svg" alt="">
        <img src="./assets/icons/shop-cart.svg" alt="">
      </div>

      <div class="menu">
        <ul>
          <li v-for="item in menu" :key="item">
            <router-link :to="'/' + item.toLowerCase()">{{item}}</router-link>
          </li>
        </ul>
      </div>

      <div class="icons">
        <img src="./assets/icons/search.svg" alt="">
        <img src="./assets/icons/heart.svg" alt="">
        <img src="./assets/icons/shop-cart.svg" alt="">
      </div>

    </header>

    <router-view></router-view>

  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'App',
  setup: () => {
    let menu = ['About', 'Products', 'Shops', 'Contact'];

    let winWidth = ref(window.innerWidth);

    let clickMenu = () => {
      
      let div = document.getElementsByClassName('burger-menu')[0];
      if (div.style.display === 'block'){
        div.style.animation = 'hide-menu 2s';
        setTimeout(() => { 
          div.style.display = 'none';
        }, '2000' )
      } else {
        div.style.animation = 'show-menu 2s'
        div.style.display = 'block';
      }
    
    
    }

    return {
       menu, winWidth, clickMenu
    }
  },
  mounted() {
   
  },
  components: {
    
  }
}
</script>

<style>
 a{
  color: inherit !important;
  text-decoration: none;
}

</style>
