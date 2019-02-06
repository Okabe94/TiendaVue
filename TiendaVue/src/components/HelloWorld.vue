<template>
  <div class="hello">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
      <button @click="submitName()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="personName of names"
        v-bind:key="personName['.key']">{{ personName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from '@/firebase';

export default {
  data () {
    return {
      name: "Jhon"
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
