<template>
  <v-app>
    <v-sheet width="300" class="mx-auto">
    <h1>Авторизація</h1>
    
    <v-form @submit.prevent>
      <v-text-field
        v-model="loginvalue"
        :rules="rules"
        label="Логін"
      ></v-text-field>
      <v-text-field
        v-model="parolvalue"
        :rules="rules"
        label="Пароль"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2" v-on:click="submit">Відправити</v-btn>
    </v-form>
  </v-sheet>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
    methods: {
      submit(){
        this.$router.push({path: '/home'})
      }
    }
    })
  }
</script>
