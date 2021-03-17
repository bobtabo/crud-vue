<template>
  <v-app>
    <TheHeader />
    <v-content>
      <transition name="fade">
        <router-view />
      </transition>
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>
  export default {
    head: {
      title() {
        return {
          inner: '顧客管理'
        }
      }
    }
  }
</script>
