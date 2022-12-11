<template>
  <div class="home">
    <div class="slidein bounce logo">
      <img src="../assets/logo-relatia.png"/>
    </div>
    
    <div class="form-container">
      <form method="post">
        <div class="input-text">
          <label for="prenom">Prenom : </label>
          <input type="text" name="prenom" v-model="prenom"/>
        </div>
        <div class="input-text">
          <label for="prenom">Email : </label>
          <input type="email" name="email" v-model="email"/>
        </div>
        <p>Vous êtes :</p>
        <div class="input-check">
          <input type="checkbox" name="femme" value="Femme" v-model="gender"/>
          <label for="femme">Femme</label>
        </div>
        <div class="input-check">
          <input type="checkbox" name="femme" value="Homme" v-model="gender"/>
          <label for="homme">Homme</label>
        </div>
      </form>

      <button type="submit" v-on:click="create()">Valider</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      prenom: "",
      email: "",
      gender: [],
    }
  },
  methods: {
    create(){
      const data = {
        prenom: this.prenom,
        email: this.email,
        gender: this.gender[0]
      }

      this.$store.commit("setMyForm", data)
      this.$router.push("success")
    }
  }
}
</script>


<style scoped>
  @import "@/css/Home.css";
</style>