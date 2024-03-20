<template>
    <ion-page>
        <ion-toolbar>
            <div class="header">
                <button class="btn-back" @click="() => router.push('/menu')"><i class="fa-solid fa-angle-left"></i></button>
                <h1>Meat</h1>
                <h1><i class="fa-solid fa-bag-shopping text-danger"></i></h1>
            </div>
        </ion-toolbar>
        <ion-content class="ion-padding">
            <div class="wrapper-order">
                <div class="order-image">
                    <button class="btn-like"><i class="fa-regular fa-heart"></i></button>
                </div>
                <span>Steak Fries Veggies</span>
                <span class="active">&#9733;&#9733;&#9733;&#9733;<span class="not-active">&#9733;</span></span>
                <span class="order-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla
                </span>
                <div class="wrapper-quantity">
                    <span>P 172</span>
                    <div class="qty-counter">
                        <button><i class="fa-solid fa-minus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <h3>Beverages</h3>
                <ion-select class="select" label="Choose Breverages" label-placement="stacked">
                    <ion-select-option value="coke">Coke</ion-select-option>
                    <ion-select-option value="juice">Juice</ion-select-option>
                    <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
                <div class="size">
                    <button class="btn-size active">Regular</button>
                    <button class="btn-size">Large</button>
                    <button class="btn-size">X-Large</button>
                </div>
                <h3>Add-Ons</h3>
                <div class="wrapper-addons">
                    <span class="addon-img"></span>
                    <div class="addon-content">
                        <div class="title">
                            <span>Tomato Sauce</span>
                            <span><i class="fa-solid fa-check text-warning"></i></span>
                        </div>
                        <span>Sauce</span>
                        <div class="wrapper-quantity">
                            <span class="addon-price">P 172</span>
                            <div class="qty-counter">
                                <button><i class="fa-solid fa-minus"></i></button>
                                <span>1</span>
                                <button><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrapper-addons mb-5">
                    <span class="addon-img"></span>
                    <div class="addon-content">
                        <div class="title">
                            <span>Tomato Sauce</span>
                            <span><i class="fa-solid fa-check text-warning"></i></span>
                        </div>
                        <span>Sauce</span>
                        <div class="wrapper-quantity">
                            <span class="addon-price">P 172</span>
                            <div class="qty-counter">
                                <button><i class="fa-solid fa-minus"></i></button>
                                <span>1</span>
                                <button><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ion-modal ref="modal" trigger="open-modal">
                <ion-content>
                    <div class="modal-content">
                        <div class="modal-img"></div>
                        <span>Successfully Added!</span>
                        <span>What do you want to do now?</span>
                        <button @click="() => router.push('/order/summary')">Proceed to Checkout</button>
                        <button>Add More</button>
                    </div>
                </ion-content>
            </ion-modal>
        </ion-content>
        <buton  id="open-modal" class="btn-order" >Add to Bag</buton>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonContent, IonPage, IonToolbar, IonSelect, IonModal, IonTitle, IonButtons, IonButton} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { useRouter } from 'vue-router'
	const router = useRouter();
    import { ref } from 'vue';

    const modal = ref();

    const dismiss = () => modal.value.$el.dismiss();
    defineComponent({
        name: 'OrderPage',
    })
</script>

<style scope>
    .btn-back{
        background-color: var(--ion-color-light-shade);
        color: var(--ion-color-medium-tint);
        padding: 0 0.5em;
        height: 31px;
        font-size: 19px;
        font-weight: 600;
        border-radius: 10px;
        margin-right: 1em;
    }
    
    .wrapper-order{
        display: flex;
        flex-direction: column;
    }
    .wrapper-order span{
        font-size: 14px;
        font-weight: 600;
        margin-top: 1em;
    }
    .order-image{
        background-image: url('https://i.ibb.co/h9Ckd7r/jacob-thomas-6j-Hpc-BPw7i8-unsplash-removebg-preview.png');
        width: 100%;
        height: 300px;
        border-radius: 20px;
        background-color: var(--ion-color-light-shade);
        display: block;
        content: '';
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
    }
    .order-image button{
        border-radius: 15px;
        padding: 0.5em;
        font-size: 20px;
        color: var(--ion-color-danger);
        position: absolute;
        right: 15px;
        bottom: -16px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    .wrapper-order .active{
        color: var(--ion-color-warning);
        font-size: 17px ;
    }

    .wrapper-order .active .not-active{
        color: var(--ion-color-medium);
        font-size: 17px ;
    }
    .wrapper-order .order-desc{
        color: var(--ion-color-medium);
        line-height: 20px;
        font-weight: 300;
    }
    .wrapper-quantity span{
        margin-top: 0;
        font-size: 26px;
    }
    .wrapper-quantity{
        margin-top: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .wrapper-quantity button{
        background-color: var(--ion-color-light-shade);
        color: var(--ion-color-danger);
        padding: 0.5em;
        border-radius: 9px;
    }
    .qty-counter{
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .qty-counter span{
        font-size: 16px;
    }
    .wrapper-order h3{
        margin-top: 1em;
        font-weight: 500;
    }

    ion-select.select{
        border-radius:20px;
        border: 1px solid var(--ion-color-light-shade);
        padding: 0 1em;
    }

    ion-select.select:focus{
        border: none;
    }
    ion-select .select-highlight{
        background-color: transparent;
    }

    ion-select::part(icon) {
        color: var(--ion-color-danger);
        opacity: 1;
    }

    .size{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;
    }
    .size .btn-size{
        padding: 1em 2em;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid var(--ion-color-light-shade);
    }
    .size .btn-size.active{
        background-color: var(--ion-color-warning);
        color: var(--ion-color-light);
        font-size: 14px;
    }
    
    .wrapper-addons{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .wrapper-addon .addon-content{
        display: flex;
        flex-direction: column;
    }
    .addon-content{
        width: 100%;
    }
    .addon-content .title{
        display: flex;
        justify-content: space-between;
    }
    .addon-content span:nth-child(2){
        font-size: 14px;
        font-weight: 400;
    }
    .addon-content .wrapper-quantity .addon-price{
        font-size: 16px;
        color: var(--ion-color-danger);
    }
    .wrapper-addons .addon-img{
        background-image: url('https://i.ibb.co/ysh9g76/Untitled-removebg-preview-1.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        width: 75px;
        height: 75px;
        display: block;
        content:"";
        margin-right: 0.5em;
    }

    .text-warning{
        color:var(--ion-color-warning);
    }

    .mb-5{
        margin-bottom: 5em;
    }

    .btn-order{
        width: 90%;
        background-color: var(--ion-color-danger);
        color: var(--ion-color-light);
        font-weight: 600;
        font-size: 15px;
        padding: 1.3em 2.5em;
        border-radius: 20px;
        position: absolute;
        text-align: center;
        right: 18px;
        bottom: 19px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    ion-modal {
        --height: 50%;
        --width: 85%;
        --border-radius: 16px;
        --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    ion-modal::part(backdrop) {
        background: rgb(68, 81, 100);
        opacity: 1;
    }
    .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .modal-img{
        background-image: url('https://i.ibb.co/zNB2kQ4/Untitled-removebg-preview-2.png');
        background-size: contain;
        background-position: center center;
        display: block;
        content: '';
        width: 75px;
        height: 75px;
        margin-top: 3em;
    }
    .modal-content span:nth-child(2){
        margin-top: 1em;
        font-weight: 600;
    }
    .modal-content span:nth-child(3){
        margin-top: 1em;
        font-size: small;
        color: var(--ion-color-medium);
    }
    .modal-content button:nth-child(4){
        margin-top: 2em;
        padding: 1em 2.5em;
        background-color: var(--ion-color-danger);
        color:var(--ion-color-light);
        border-radius: 15px;
    }
    .modal-content button:nth-child(5){
        padding: 1em 2.5em;
        color:var(--ion-color-danger);
        border-radius: 15px;
    }
</style>