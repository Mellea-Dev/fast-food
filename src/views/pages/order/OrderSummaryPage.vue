<template>
    <ion-page>
        <ion-toolbar>
            <div class="header">
                <button class="btn-back" @click="() => router.push('/order')"><i class="fa-solid fa-angle-left"></i></button>
                <h1>Oder Summary</h1>
            </div>
        </ion-toolbar>
        <ion-content class="ion-padding">
            <div class="info">
                <div class="text">
                    <span>Chou Tzuyu</span>
                    <span>+63 912 345 6789</span>
                    <span>chou.tzu-yu@email.com</span>
                </div>
                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
            <div class="info">
                <div class="text">
                    <span>My Home Address</span>
                    <span>No. 21 St.Agustin Street, Brgy.De Jose</span>
                    <span>Delgado City 2234 Philippines</span>
                </div>
                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
            <div class="info">
                <div class="text">
                    <span>Work/Office</span>
                    <span>3rd flr Anyeong Bldg. Seareal St.Joaqin</span>
                    <span>City 3456 Philippines</span>
                </div>
                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
            <h4><strong>Orders</strong></h4>
            <div class="order-summary">
                <div class="img"></div>
                <div class="addon-list">
                    <span><strong>Steak Fries Veggies</strong></span>
                    <small>1x Tomato Sauce</small>
                    <small>1x Regular Coke</small>
                    <small>1x Fried Chicken</small>
                </div>
            </div>
            <hr class="hr"></hr>
            <div class="wrapper-quantity">
                <span>P 172</span>
                <div class="qty-counter">
                    <button><i class="fa-solid fa-minus"></i></button>
                    <span>1</span>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <h4><strong>Payment Options</strong></h4>
            <div class="payment-option">
                <small><strong>Cash on Delivery</strong></small>
                <small>Pay when you receive the order</small>
            </div>
            <div class="payment-option">
                <small><strong>Loyalty Points <span>(0 points)</span></strong></small>
                <small>Pay using your earned loyalty points</small>
            </div>
            <div class="payment-option">
                <span class="payment-img" style=" background-image: url('https://i.ibb.co/g7YncB9/Untitled-removebg-preview-3.png');"></span>
                <small>A new tab will open to access your account</small>
            </div>
            <div class="payment-option">
                <span class="payment-img" style=" background-image: url('https://i.ibb.co/xHYxY2x/Untitled-removebg-preview-4.png');"></span>
                <small>A new tab will open to access your account</small>
            </div>
        </ion-content>
        <ion-footer class="footer">
            <ion-toolbar>
                <div class="flex-row">
                    <div class="flex-column">
                        <small>Grand Total</small>
                        <h4><strong>P 244</strong></h4>
                    </div>
                    <button @click="() => router.push('/order/confirm')">Place Order</button>
                </div>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonContent, IonPage, IonToolbar, IonFooter, IonModal} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { useRouter } from 'vue-router'
   

	const router = useRouter();
    defineComponent({
        name: 'OrderSummaryPage',
    })
</script>

<style scope>
.info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.info span:nth-child(2){
    font-size: 26px;
    color: var(--ion-color-warning);
}
.text{
    display: flex;
    flex-direction: column;
}

.text span:nth-child(1){
    margin-bottom: 1em;
    font-size: small;
    font-weight: 600;
}
.text span:nth-child(2),.text span:nth-child(3){
    font-size: small;
    color: var(--ion-color-medium);
}
.ion-padding .info:nth-child(2), .ion-padding .info:nth-child(3){
    margin-top: 2em;
}
.order-summary{
    display: flex;
    align-items: center;
}
.order-summary .img{
    background-image: url('https://i.ibb.co/h9Ckd7r/jacob-thomas-6j-Hpc-BPw7i8-unsplash-removebg-preview.png');
    background-position: center center;
    background-size: contain;
    width: 75px;
    height: 75px;
    display: block;
    content: '';
    background-repeat: no-repeat;
    margin-right: 0.5em;
}
.addon-list{
    display: flex;
    flex-direction: column;
}
.addon-list span:nth-child(1){
    margin-bottom: 0.9em;
}

.hr{
    margin-top: 1em;
    border-top: 1px solid var(--ion-color-light-shade);
    width: 90%;
}

    .wrapper-quantity span:nth-child(1){
        margin-top: 0;
        font-size: 16px;
        color: var(--ion-color-danger);
        font-weight: 600;
    }
    .wrapper-quantity{
        margin-top: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 1em;
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
    .qty-counter span:nth-child(2){
        font-size: 16px;
        font-weight: 600;
    }
    .payment-option{
        margin: 1em;
        display: flex;
        flex-direction: column;
    }
    .payment-option .payment-img{
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        display: block;
        content: '';
        width: 80px;
        height: 30px;
    }
    .payment-option small:nth-child(2){
        margin-top: 1em;
        color: var(--ion-color-medium);
    }
    ion-footer.footer{
        padding: 0 1em;
    }
    .flex-row button{
        height: 40px;
        padding:0em 5em;
        background-color: var(--ion-color-danger);
        border-radius: 15px;
        color: var(--ion-color-light);
    }
    ion-toolbar h4{
        margin-top: 0.5em;
    }
    .flex-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex-column{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .flex-column small{
        margin-top: 1em;
    }
    
</style>