<template>
  <div class="window">

    <header>
      <div class="logo">Under Sun</div>

      <div @click="clickMenu" class="burger">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="burger-menu">
        <ul>
          <li v-for="item in menu" :key="item">{{item}}</li>
        </ul>
        <img src="./assets/icons/search.svg" alt="">
        <img src="./assets/icons/heart.svg" alt="">
        <img src="./assets/icons/shop-cart.svg" alt="">
      </div>

      <div class="menu">
        <ul>
          <li v-for="item in menu" :key="item">{{item}}</li>
        </ul>
      </div>

      <div class="icons">
        <img src="./assets/icons/search.svg" alt="">
        <img src="./assets/icons/heart.svg" alt="">
        <img src="./assets/icons/shop-cart.svg" alt="">
      </div>

    </header>

    <div class="welcome">
      <div class="elipse"></div>
      <div class="line"></div>
      <div class="sunglasses">
        <img src="./assets/sungl.png" alt="" />
      </div>
      <div class="logo">Under Sun</div>
      <div class="small-text">Eye Catching EyeWear from L.A.</div>
    </div>

    <div class="buttons">
      <button class="button-shadow">new collection</button>
      <button class="button-shadow">outlet</button>
    </div>

  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'App',
  setup: () => {
    let menu = ['About', 'Collection', 'Shops', 'Contact'];

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
@media only screen and (max-width: 850px) {
   .burger {
    display:block;
    padding: 5vh 8vw 3vh 3vw;
    margin-left: auto;
    cursor: pointer;
  }
   .burger div {
      width: 40px;
      height: 4px;
      background-color: #393939;
      margin-bottom: 2vh;
     
    }
    .burger:hover {
      animation: burger;
      animation-duration: 1s;
    }
    @keyframes burger {
      from {
        transform: rotate(8deg);
      }
      to {
        transform: rotate(-8deg);
      }
    }
    .burger-menu {
      position: absolute;
      top: 20vh;
      z-index: 1111;
      background-color: #DAEDBD;
      padding: 10vh;
      display: none;
      
    }
    .burger-menu ul {
      list-style: none;
      display: block;
    }
     .burger-menu li {
        
        font-family: 'Roboto', sans-serif;
        text-transform: lowercase;
        color: #393939;
        font-size: 7vw;
        cursor: pointer;
     }
     .burger-menu li:hover{
      opacity: 0.7;
     }
     @keyframes show-menu {
      0%{
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
     }
      @keyframes hide-menu {
      0%{
        opacity: 0.9;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 0.2;
      }
     }
     .burger-menu img {
      text-align: center;
     }
    .menu, .icons {
      display: none;
    }
  .welcome .sunglasses {
  top: 35vh !important;
  }
  .welcome .sunglasses img{
    width: 60vw !important;
    
  }
  .welcome .logo {
    top: 15vh !important;
  }
  .welcome .small-text {
    display: none;
  }

  .buttons button {
    margin-top: 5vh;
  }
}

</style>
