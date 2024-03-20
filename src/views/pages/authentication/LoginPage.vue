<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="login-wrapper">
            <div class="logo">
            </div>
            <div class="text-wrapper">
              <h1>Bonjur!</h1>
              <ion-text color="medium">
                Welcome to all new FastFood mobile app. Kindly login your account. Thank you!
              </ion-text>
            </div>
            <div class="form-login">
              <div class="form-group">
                <label for="name">Email Address</label>
                <input type="email" placeholder="" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder="" v-model="password">
                <a class="link-danger">
                  Forgot?
                </a>
              </div>
              <button class="btn-danger" @click="() => router.push('/home')">Login</button>
              <button class="btn-color-danger">Login as Guest</button>
            </div>
        </div>
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <div class="footer">Don't have an account yet? 
            <ion-text color="danger" class="link">
              <span>Create</span>
            </ion-text>
          </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </template>
  
<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    const email = '';
    const password = '';
    return { router, email, password };
  },
});
</script>
  
<style scoped>
  .login-wrapper{
    margin: 1em;
    display: flex;
    flex-direction: column;
  }
  .login-wrapper h1{
    font-weight: 500;
  }
  .login-text{
    margin-left: 0.3em;
  }
  .text-wrapper{
    margin-left: 0.3em;
  }
  .container {
    margin: 0.3em;
  }
  
  .container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  .container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  .container a {
    text-decoration: none;
  }
  .logo{
    background-image: url('https://i.ibb.co/tZ5HhDS/fast-food-logo.png');
    background-size: contain;
    width: 147px;
    height: 147px;
    display: block;
    content: '';
    background-repeat: no-repeat;
  }

  .form-login{
    width: 100%;
  }

  /* Custom Input */
  .form-group {
    position: relative;
    margin-top: 1em;
  }
  .form-group input {
    width: 100%;
    padding: 1.9em 1em 0.5em 1em;
    height: 60px;
    border-radius: 4px;
    transition: border-color 0.3s ease;
    border-radius: 20px;
    border: 1px solid var(--ion-color-medium);
  }
  .form-group label {
    position: absolute;
    left: 15px;
    top:15px;
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

  .btn-danger{
    background-color: var(--ion-color-danger);
    color: var(--ion-color-light);
    height: 60px;
    width: 100%;
    padding: auto;
    border-radius: 20px;
    margin-top: 1em;
    font-size: 14px;
    font-weight: 600;
  }

  .btn-color-danger{
    color: var(--ion-color-danger);
    height: 60px;
    width: 100%;
    padding: auto;
    border-radius: 20px;
    margin-top: 1em;
    font-size: 14px;
    font-weight: 600;
  }

  .form-group .link-danger{
    position: absolute;
    color:var(--ion-color-danger) ;
    font-weight: 600;
    top: 30px;
    right: 15px;
    font-size: 15px;
    cursor: pointer;
  }

  .link{
    font-weight: 600;
    font-size: 15px;
  }

  ion-footer ion-toolbar .footer{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ion-text span{
    margin-left: 0.5em;
  }
</style>