<template>
    <div class="products">
        <h2>New Collection</h2>
        <div class="items">
            <div class="item" v-for="i in 3" :key="i">
                <div class="name">Etude</div>
                <img src="https://cdn-images.farfetch-contents.com/18/72/47/90/18724790_40462333_1000.jpg" alt="">
                <div class="info">
                    <div class="price">$150</div>
                    <div class="quantity">
                        <div @click="count(i ,'-')" class="del">-</div>
                        <div class="count">{{num}}</div>
                        <div @click="count(i, '+')" class="add">+</div>
                    </div>
                </div>
                <button class="btn-add">Add to Bag</button>
            </div>
        </div>
        <h2>Outlet</h2>
        <div class="items">
            <div class="item" v-for="i in 3" :key="i">
                <div class="name">Etude</div>
                <img src="https://cdn-images.farfetch-contents.com/18/72/47/90/18724790_40462333_1000.jpg" alt="">
                <div class="info">
                    <div class="price">$150</div>
                    <div class="quantity">
                        <div @click="count(i ,'-')" class="del">-</div>
                        <div class="count">{{num}}</div>
                        <div @click="count(i, '+')" class="add">+</div>
                    </div>
                </div>
                <button class="btn-add">Add to Bag</button>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        let num = ref(0);
        let count = (idx, op) => {
            if(op === '+' && num.value < 10) {
                num.value++
            } else if(op === '-' && num.value !== 0) {
                num.value--
            }
        }


        return {
            num, count
        }
    }

}
</script>

<style>
.products h2 {
    font-family: 'Dhurjati';
    font-size: 50px;
    margin-top: -20px;
    margin-bottom: -20px;
    margin-left: 10vh;
    color: #6f7960;
    text-decoration: underline;
    text-decoration-color: #fff;
}
.items {
    display: flex;
    overflow-x: auto;
    
}
.item {
    max-width: 300px;
    padding: 4vh;
    background-color: #fff;
    border: 2px solid #393939;
    margin: 3vh;
    border-radius: 3%;

}
.item .name {
    font-family: 'Dhurjati', sans-serif;
    font-size: 5vh;
    margin-top: -3vh;
    color: #393939
}
.item img {
    width: 200px;
    
    
}
.item .info {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
}
.item .price {
    font-family: 'Roboto', sans-serif;
    color: #8c9a78;
    font-weight: 700;
    font-size: 20px;
    margin-right: auto;
}
.item .quantity {
    display: flex;
    align-items: center;
    border-radius: 2vh;
    font-weight: bolder;
    color: #393939;
}
.item .quantity .add, .del {
    padding: 1vh 3vh;
    background-color: #8c9a78;
    border-radius: 2vh;
    color: #fff;
    cursor: pointer;
}
.item .quantity .count {
    width: 2vh;
    text-align: center;
    margin: 0 auto !important;
    padding: 0px 2vh;
    font-family: 'Roboto', sans-serif;
}
.item .quantity .add:active,
.item .quantity .del:active {
background-color: #8c9a78b2;
}
.btn-add {
    width: 180px;
    margin: 6vh 3.4vh 0 4.6vh;
    padding: 0vh 5vh;
    font-family: 'Dhurjati', sans-serif;
    font-size: 4vh;
    letter-spacing: -0.1vh;
    border-radius: 10vh;
    border: 2px solid #8c9a78;
    color:#6f7960;
    background-color: #bbda9072;
    cursor: pointer;
}
.btn-add:hover {
    background-color: #fff;
    border: 2px solid #a3c178;
    color: #a3c178;
}
</style>