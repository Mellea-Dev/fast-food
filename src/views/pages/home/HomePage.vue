<template>
  <ion-menu content-id="main-content">
    <ion-content class="ion-padding">
      <side-menu-component />
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-toolbar>
      <div class="header">
        <ion-buttons>
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
        <div class="points-counter">
          <i class="fa-solid fa-crown text-warning"></i>
          <span>0 Points <span class="text-danger">&#10095;</span></span> 
        </div>
        <div class="avatar"></div>
      </div>
    </ion-toolbar>
    <ion-content class="ion-padding"> 
      <div class="banner">
        <div class="logo">
        </div>
        <div class="banner-desc">
          <span>Anneoyong, Chou!</span>
          <h1>What do you want to eat?</h1>
        </div>
      </div>
      <div class="form-group">
        <label><i class="fa-solid fa-magnifying-glass text-danger"></i></label>
        <input type="text" placeholder="try our Steak Fries Veggies">
      </div>
      <div class="special-offers">
        <div class="header">
          <h1>Special Offers!</h1>
          <span class="link">View All &#10095;</span>
        </div>
        <div class="horizontal-scroll">
          <div class="card-offer"></div>
          <div class="card-offer"></div>
          <div class="card-offer"></div>
        </div>
      </div>
      <div class="category">
        <div class="header">
          <h1>Category</h1>
        </div>
        <div class="horizontal-scroll">
          <div class="card-category">
            <span>Chicken</span>
            <span>9 Recipes</span>
          </div>
          <div class="card-category">
            <span>Seafoods</span>
            <span>6 Recipes</span>
          </div>
        </div>
      </div>
      <div class="new">
        <div class="header">
          <h1>What's New?</h1>
        </div>
        <div class="card-image"></div>
      </div>
      <div class="most-popular">
        <div class="header">
          <h1>Most Popular</h1>
        </div>
        <div class="menu-wrapper">
          <card-food-component name="Steak Fries Veggies" category="Meat" price="174"/>
          <card-food-component name="Chicken Salad" category="Chicken" price="172"/>
          <card-food-component name="Sorvtes Primavera" category="Dessert" price="185"/>
          <card-food-component name="Fried Chicken" category="Chicken" price="175"/>
        </div>
      </div>
    </ion-content>
    <buton class="btn-order" @click="() => router.push('/menu')">Order Now</buton>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonPage, IonTitle, IonToolbar, IonMenu } from '@ionic/vue';
  import CardFoodComponent from '../../../components/CardFoodComponent.vue';
  import { useRouter } from 'vue-router';
  import SideMenuComponent from '@/components/SideMenuComponent.vue';
  import { defineComponent } from 'vue';
  const router = useRouter();

  defineComponent({
    name: 'HomePage'
  })

</script>

<style scoped>
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
  justify-content: space-between;
  align-items: center;
  margin: 1em;
}

.text-warning{
  color: var(--ion-color-warning);
}

.text-danger{
  color: var(--ion-color-danger);
}

.points-counter{
  display: flex;
  align-items: center;
}

.points-counter span{ 
  font-weight: 600;
  margin-right: 1em;
}

.points-counter .text-warning{ 
  margin-right: 1em;
}

.logo{
  background-image: url('https://i.ibb.co/tZ5HhDS/fast-food-logo.png');
  background-size: contain;
  width: 120px;
  height: 120px;
  display: block;
  content: '';
  background-repeat: no-repeat;
  background-position: center center;
}

.banner{
 display: flex;
}
.banner-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner-desc span{
  font-size: 14px;
  font-weight: 500;
}
.banner-desc h1{
  margin:0; 
  font-weight: 600;
}

/* input */
  .form-group {
    position: relative;
    margin-top: 1em;
  }
  .form-group input {
    width: 100%;
    padding: 0px 1em 0px 2.5em;
    height: 40px;
    border-radius: 4px;
    transition: border-color 0.3s ease;
    border-radius: 20px;
    border: 1px solid var(--ion-color-medium-tint);
  }
  .form-group label {
    position: absolute;
    left: 15px;
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

  .special-offers .header h1, .category .header h1, .new .header h1, .most-popular .header h1{
    font-weight: 600;
    margin: 0;
  }

  .special-offers .header .link{
    color: var(--ion-color-danger);
    font-weight: 600;
  }

  .special-offers .header, .category .header, .new .header, .most-popular .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0;
  }

  /* card offer */
  .card-offer{
    display: inline-block;
    height: 130px;
    width: 300px;
    max-width: 300px;
    background-image: url('https://i.ibb.co/7vn8MBp/Untitled.png');
    background-color: var(--ion-color-danger);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    display: block;
    content: "";
    border-radius: 20px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 99% 41%, 98% 42%, 97% 44%, 96% 48%, 96% 50%, 96% 52%, 97% 56%, 98% 58%, 99% 59%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, 1% 59%, 2% 58%, 3% 56%, 4% 52%, 4% 50%, 4% 48%, 3% 44%, 2% 42%, 1% 41%, 0% 40%);
  }

  .card-category{
    display: inline-block;
    height: 300px;
    width: 200px;
    max-width: 300px;
    background-image: linear-gradient(0deg, rgba(68,68,68,0.835171568627451) 0%, rgba(97,97,97,0.7875525210084033) 29%, rgba(129,129,129,0.2637429971988795) 55%), url('https://i.ibb.co/27WN2T5/pexels-jess-bailey-designs-913136.jpg');
    background-color: var(--ion-color-danger);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: block;
    content: "";
    border-radius: 20px;
  }

  .card-image{
    display: inline-block;
    height: 200px;
    background-image: url('https://i.ibb.co/qkd2Z7g/Untitled-removebg-preview.png');
    background-color: var(--ion-color-danger);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: block;
    content: "";
    border-radius: 20px;
  }

.horizontal-scroll{
    display: grid;
    grid-auto-columns: 95%;
    grid-column-gap: 1px;
    grid-auto-flow: column;
    overflow-x: scroll;
  }

  .category .horizontal-scroll{
    display: grid;
    grid-auto-columns: 65%;
    grid-column-gap: 1px;
    grid-auto-flow: column;
    overflow-x: scroll;
  }

  .card-category{
    display: flex;
    flex-direction:column;
    justify-content: end;
    align-items: start;
    padding: 1.5em 1em;
  }

  .card-category span:nth-child(1){
    color: var(--ion-color-light);
    font-size: 15px;
    font-weight: 600;
  }

  .card-category span:nth-child(2){
    color: var(--ion-color-light);
    font-size: 13px;
    font-weight: 400;
    margin-top: 0.5em;
  }

  .menu-wrapper{
    display: grid;
    grid-template-columns: 47% 47%;
    grid-gap: 20px;
  }

  .btn-order{
    background-color: var(--ion-color-danger);
    color: var(--ion-color-light);
    font-weight: 600;
    font-size: 15px;
    padding: 1.5em 2.5em;
    border-radius: 20px;
    position: absolute;
    right: 19px;
    bottom: 19px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    width:160px;
  }
</style>

