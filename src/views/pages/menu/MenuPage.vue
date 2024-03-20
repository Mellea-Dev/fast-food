<template>
    <ion-menu content-id="menu-content">
        <ion-content class="ion-padding">This is the menu content.</ion-content>
    </ion-menu>
    <ion-page id="menu-content">
        <ion-toolbar>
            <div class="header">
                <ion-buttons>
									<ion-menu-button color="danger"></ion-menu-button>
                </ion-buttons>
								<h1>Our Foods</h1>
								<h1><i class="fa-solid fa-bag-shopping text-danger"></i></h1>
            </div>
        </ion-toolbar>
        <ion-content class="ion-padding">
            <div class="form-group">
                <label><i class="fa-solid fa-magnifying-glass text-danger"></i></label>
                <input type="text" placeholder="try our Steak Fries Veggies">
								<label><i class="fa-solid fa-sliders text-danger"></i></label>
            </div>
						<div class="tab-wrapper">
							<button class="btn-tab active">All</button>
							<button class="btn-tab">Breakfast</button>
							<button class="btn-tab">Chiken</button>
							<button class="btn-tab">Seafood</button>
							<button class="btn-tab">Dessert</button>
						</div>
						<div class="menu-wrapper">
							<card-food-component @click="() => router.push('/order')" name="Steak Fries Veggies" category="Meat" price="174"/>
							<card-food-component name="Chicken Salad" category="Chicken" price="172"/>
							<card-food-component name="Sorvtes Primavera" category="Dessert" price="185"/>
							<card-food-component name="Fried Chicken" category="Chicken" price="175"/>
							<card-food-component name="Sorvtes Primavera" category="Dessert" price="185"/>
							<card-food-component name="Fried Chicken" category="Chicken" price="175"/>
							<card-food-component name="Sorvtes Primavera" category="Dessert" price="185"/>
							<card-food-component name="Fried Chicken" category="Chicken" price="175"/>
						</div>
        </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
    import { IonContent, IonPage, IonToolbar, IonMenu } from '@ionic/vue';
    import { defineComponent } from 'vue';
		import CardFoodComponent from '../../../components/CardFoodComponent.vue';
		import { useRouter } from 'vue-router'
		const router = useRouter();

    defineComponent({
			name: 'MenuPage',
    })
		
</script>

<style scope>
.avatar{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: block;
    background-image: url('https://ionicframework.com/docs/img/demos/avatar.svg');
    background-repeat: no-repeat;
    background-size: contain;
}

.header{
    display: flex;
    align-items: center;
    margin: 1em;
}
.header h1{
	font-weight: 600;
	margin: 0;
}

.header h1:nth-child(3){
	margin-left: auto;
}

/* inpu */
.form-group {
    position: relative;
    margin-top: 1em;
  }
  .form-group input {
    width: 100%;
    padding: 0px 2.5em 0px 2.5em;
    height: 40px;
    border-radius: 4px;
    transition: border-color 0.3s ease;
    border-radius: 20px;
    border: 1px solid var(--ion-color-medium-tint);
  }
  .form-group label:nth-child(1) {
		font-weight: 600;
    position: absolute;
    left: 15px;
    top:13px;
    font-size: 14px;
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
    color: var(--ion-color-medium-shade);
  }
	.form-group label:nth-child(3) {
		font-weight: 600;
    position: absolute;
    right: 15px;
    top:13px;
    font-size: 14px;
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
    color: var(--ion-color-medium-shade);
  }
  .form-group input:focus {
    border-color: var(--ion-color-medium);
  }

  .form-group input:focus + a {
    display: none;
  }

  .form-group input::placeholder {
    font-size: 14px;
  }
/* end */

/* text */
.text-danger{
	color: var(--ion-color-danger);
}
/* end */

.tab-wrapper{
	margin-top: 1em;
	overflow-x: auto;
  display: grid;
  grid-gap: calc(10px);
  grid-auto-flow: column;
  grid-auto-columns: calc(auto);
}

.tab-wrapper .btn-tab{
	padding: 1em 1em;
	background-color: var(--ion-color-light-shade);
	color: var(--ion-color-medium-shade);
	border-radius: 15px;
	font-weight: 600;
}

.tab-wrapper .btn-tab.active{
	background-color: var(--ion-color-danger);
	color: var(--ion-color-light);
}

.menu-wrapper{
		margin-top: 3em;
    display: grid;
    grid-template-columns: calc(47%) calc(47%);
    grid-gap: 20px;
  }

</style>