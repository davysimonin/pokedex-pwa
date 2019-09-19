<template>
  <div>
    <div class="navbar">
      <nuxt-link to="/" class="logo">
        <img src="~/assets/Logo.svg" alt="Groover logo">
        <h1 class="">
          Groover
        </h1>
      </nuxt-link>
      <div class="links">
        <div class="link goInf">
          Deviens influenceur
        </div>
        <div class="link signIn">
          Connexion
        </div>
        <div class="link signUp">
          Inscription
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style scoped>
  div.navbar {
    padding: 16px 64px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 5px 0 rgba(43, 38, 36, 0.2);
  }
  .logo {
    display: flex;
    text-decoration: none;
  }
  div.links {
    display: flex;
    align-items: center;
  }
  div.link {
    margin-right: 40px;
    cursor: pointer;
  }
  div.goInf {
    font-weight: 600;
    font-size: 18px;
    color: #2b2624;
  }
  div.signIn {
    font-size: 18px;
  }
  div.signUp {
    font-size: 18px;
    border-radius: 20px;
    border: solid 1px #eb6345;
    color: #eb6345;
    padding: 5px 20px;
    box-shadow: 0px 0px 0px 0px rgba(70, 61, 59, 0);
  }
  img {
    width: 30px;
    height: auto;
    margin-right: 12px;
  }
  h1 {
    color: #eb6345;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 0;
  }
</style>
