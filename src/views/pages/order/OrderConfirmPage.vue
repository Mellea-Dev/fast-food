<template>
    <ion-page>
        <ion-content class="ion-padding">
            <div class="confirm-wrapper">
                <div class="confirm-img"></div>
                <h2 class="h2"><strong>Order Received!</strong></h2>
                <span class="confirm-msg">
                    Your Order <span class="text-danger"><strong>No. 19049585</strong></span> has Successfullym take and
                    now being processed. Kindly wait for our notification
                    regarding your order.
                </span>
                <button>Track Order</button>
                <button @click="() => router.push('/home')">Back to Home</button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonContent, IonPage, IonToolbar, IonFooter, IonModal} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { useRouter } from 'vue-router'
	const router = useRouter();
    defineComponent({
        name: 'OrderConfirmPage',
    })
</script>

<style scope>
    .confirm-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .confirm-img{
        background-image: url('https://i.ibb.co/Dr7Bdy7/Untitled-removebg-preview-5.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        display: block;
        content: '';
        width: 150px;
        height: 150px;
        margin-top: 3em;
    }
    .text-danger{
        color: var(--ion-color-danger);
    }
    .confirm-msg{
        margin-top: 1em;
        font-size: 14px;
        color: var(--ion-color-medium);
        text-align: center;
    }
    .h2{
        margin-top: 1em;
    }

    .confirm-wrapper button:nth-child(4){
        margin-top: auto;
        background-color: var(--ion-color-danger);
        padding: 1.5em 0;
        width: 100%;
        color: var(--ion-color-light);
        font-weight: 600;
        border-radius: 15px;
    }
    .confirm-wrapper button:nth-child(5){
        padding: 1.5em 0;
        width: 100%;
        color: var(--ion-color-danger);
        font-weight: 600;
        border-radius: 15px;
    }
</style>