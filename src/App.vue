<template>
  <div id="#app">
    <Navbar/>
    <b-container class="bv-example-row pt-4" fluid>
        <b-row align-v="stretch">
            <b-col cols="3">
                <b-list-group>
                    <b-list-group-item to="/">Monitoreo</b-list-group-item>
                    <b-list-group-item to="/historial">Historial</b-list-group-item>                
                </b-list-group>            
            </b-col>
            <b-col>
                <router-view/>
            </b-col>            
        </b-row>
    </b-container>
  </div>
</template>
<script>
import Navbar from './components/Menu/Navbar'

export default {
  name:"App",
  components:{Navbar}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
