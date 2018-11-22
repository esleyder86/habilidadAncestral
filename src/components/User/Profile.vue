<template>
  <v-layout>
    <v-flex xs12 sm12>
      <v-card height="350px" v-if="userIsAuthenticated">
        <v-navigation-drawer
          v-model="drawer"
          permanent
          absolute
        >
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="this.$store.getters.user.photoUrl">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{this.$store.getters.user.name | capitalize}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
              v-for="item in items"
              :key="item.title"
              @click="plants(item)"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <router-view></router-view>
      </v-card>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        drawer: true,
        items: [
          {title: 'Plantas medicinales', icon: 'dashboard', link: '/signup'},
          {title: 'About', icon: 'question_answer', link: '/signin'}
        ],
        right: null
      }
    },
    methods: {
      plants (item) {
        this.$router.push(item.link)
        console.log('jajaja')
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Registrate', link: '/profile'},
          {icon: 'lock_open', title: 'Iniciar sesión', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'person', title: 'Perfil', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>
