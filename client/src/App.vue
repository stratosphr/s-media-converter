<template>
    <v-app>
        <v-content>
            Hello from Vuetify!
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import axios from 'axios'

    export default {

        mounted(): void {
            axios.get('/').then(response => {
                console.log(response)
            })
        }

    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
