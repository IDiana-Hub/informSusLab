<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav >
          <v-list-item prepend-icon="mdi-folder" title="Мій аккаунт" value="user" v-on:click="goTouser"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Друзі" value="freands" v-on:click="goTofreands" ></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Вихід" value="exit" v-on:click="exit" ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      methods: {
        goTouser(){
          this.$router.push({name: 'user'})
        },
        goTofreands(){
          this.$router.push({name: 'freands'})
        },
        exit(){
          this.$router.push({path: '/'})
        },
    }
    }),
  }
</script>
