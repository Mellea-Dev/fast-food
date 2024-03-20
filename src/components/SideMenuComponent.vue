<template lang="">
    <div class="user-profile">
        <span class="avatar"></span>
        <i class="fa-solid fa-crown text-warning"></i>
        <span>0 Points <span class="text-danger">&#10095;</span></span> 
    </div>
    <h4><strong>Chou Tzuyu</strong></h4>
    <small>+63 912 345 6759</small>

    <div class="sidenav">
      <span><i class="fa-solid fa-house text-muted"></i>Home</span>
      <span><i class="fa-solid fa-drumstick-bite text-muted"></i>Order Now!</span>
      <span><i class="fa-solid fa-bell text-muted"></i>Notifications<i class="badge">4</i></span>
      <span><i class="fa-solid fa-store text-muted"></i>Store Locator</span>
      <span><i class="fa-solid fa-circle-question text-muted"></i>FAQ's</span>
    </div>
    <div class="sidenav">
      <span><i class="fa-solid fa-house text-muted"></i>My Orders <i class="badge">2</i></span>
      <span><i class="fa-solid fa-drumstick-bite text-muted"></i>My Account</span>
      <span><i class="fa-solid fa-bell text-muted"></i>My Favorites</span>
      <span><i class="fa-solid fa-store text-muted"></i>Order Tracker</span>
      <span><i class="fa-solid fa-circle-question text-muted"></i>Order History</span>
    </div>
    <button>Logout</button>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .user-profile{
        max-width:200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .user-profile .avatar{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        display: block;
        background-image: url('https://ionicframework.com/docs/img/demos/avatar.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
    h4{
        margin-bottom: 0.2em;
    }
    small{
        color: var(--ion-color-medium)
    }

    .sidenav {
      display:flex;
      flex-direction:column;

    }

    .sidenav span {
      padding: 1em 0;
      text-decoration: none;
      display: block;
      transition: 0.3s;
      font-size: 14px;
      font-weight: 600;
    }

    .text-muted{
      margin-right: 1em;
      color: var(--ion-color-light-shade);
    }

    .badge{
      display: inline-block;
      background-color: var(--ion-color-warning);
      color: var(--ion-color-light);
      padding : 1px;
      border-radius: 10px;
      width: 20px;
      height : 20px;
      text-align: center;
      margin-left: 10em;
    }

    button{
      padding: 1.2em 5em;
      font-weight: 600;
      color: var(--ion-color-light);
      background-color: var(--ion-color-danger);
      border-radius: 15px;
      margin-top: 3em;
    }
</style>