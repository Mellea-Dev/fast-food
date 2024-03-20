<template lang="">
    <div class="card-food">
        <div class="food-img"></div>
        <span class="name">{{name}}</span>
        <span class="category">{{category}}</span>
        <div class="footer">
            <span>P{{price}}</span>
            <span class="active">&#9733;&#9733;&#9733;&#9733;<span class="not-active">&#9733;</span></span>
        </div>
    </div>
</template>

<style scoped>
.card-food{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.food-img{
    width: 100%;
    content: "";
    display: block;
    background-image: url('https://i.ibb.co/h9Ckd7r/jacob-thomas-6j-Hpc-BPw7i8-unsplash-removebg-preview.png');
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}

.card-food .name{
    font-size: 12px;
    font-weight: 600;
    margin-top:2.5em;
}
.card-food .category{
    margin-top:0.5em;
    font-size: 12px;
    font-weight: 500;
}

.card-food .footer{
    color: var(--ion-color-danger);
    font-weight: 600;
    font-size: 15px;
    margin-top: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.footer span{
    margin:0;
}

.active{
    color: var(--ion-color-warning);
    font-size: 12px;
}
.not-active{
    color: var(--ion-color-medium);
    font-size: 12px;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
  defineProps({
    name: String,
    category: String,
    price: String
  });
</script>
