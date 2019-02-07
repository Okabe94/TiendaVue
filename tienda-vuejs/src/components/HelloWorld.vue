<template>
  <div class="hello">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registro de Compra</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-label>Nombre:</v-label>
                  <v-text-field type="text" v-model="name" /> <br>
                  <v-label>Precio:</v-label>
                  <v-text-field type="number" v-model="price" /><br>
                  <v-label>Cantidad:</v-label>
                  <v-text-field type="number" v-model="quantity" /><br>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn color="primary" @click="submit()">Añadir</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import {producRef} from '@/firebase';
  
  export default {
    data() {
      return {
        name: "",
        price: 0,
        quantity: 0
      }
    },
    firebase: {
      products: producRef
    },
    methods: {
      submit() {
        producRef.push({
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          edit: false
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
