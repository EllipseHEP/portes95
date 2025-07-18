<template>
  <div id="app">
    <div class="logo">Google</div>
    <div class="search-box">
      <input
        type="text"
        v-model="query"
        @input="onInput"
        @keydown.down.prevent="highlightSuggestion(1)"
        @keydown.up.prevent="highlightSuggestion(-1)"
        @keydown.enter="search"
        placeholder="Recherche Google ou saisir un URL"
        class="search-input"
      />
      <ul v-if="suggestions.length" class="suggestions">
        <li
          v-for="(suggestion, index) in suggestions"
          :key="suggestion"
          :class="{ highlighted: index === highlightedIndex }"
          @mousedown.prevent="selectSuggestion(index)"
        >
          {{ suggestion }}
        </li>
      </ul>
      <div class="buttons">
        <button @click="search">Recherche Google</button>
        <button @click="search">J'ai de la chance !</button>
      </div>
    </div>
    <p v-if="searchResult" class="search-result">{{ searchResult }}</p>
  </div>
</template>

<script>
import emitter from "@/components/misc/eventHandler"
import {usePayloadsStore} from '@/stores/payloads.ts'

export default {
  computed: {
    store: () => usePayloadsStore()
  },
  data() {
    return {
      query: '',
      validTerms: ['google', 'minecraft', 'free minecraft', 'minecraft download', 'inception'],
      suggestions: [],
      highlightedIndex: -1,
      searchResult: ''
    };
  },
  methods: {
    onInput() {
      const input = this.query.toLowerCase();
      this.suggestions = this.validTerms.filter(term => 
        term.match(".*" + input + ".*") != null && input != ""
      );
      this.highlightedIndex = -1;
    },
    highlightSuggestion(direction) {
      const maxIndex = this.suggestions.length - 1;
      if (maxIndex < 0) return;
      this.highlightedIndex =
        (this.highlightedIndex + direction + this.suggestions.length) %
        this.suggestions.length;
    },
    selectSuggestion(index = this.highlightedIndex) {
      if (index >= 0 && index < this.suggestions.length) {
        this.query = this.suggestions[index];
        this.suggestions = [];
        this.highlightedIndex = -1;
      }
    },
    search() {
      const input = this.query.toLowerCase()
      
      if(input.match(".*minecraft.*") != null && input != ""){
        emitter.emit("openPage", "minecraft - Google search")
        emitter.emit("closePage", "Google")
      }else if(input.match(".*google.*") != null && input != ""){
        this.store.bluescreen = true;
      }else if(input.match(".*inception.*") != null && input != ""){
        emitter.emit("openPage", "Inception")
        emitter.emit("closePage", "Google")
      }else if(input == ""){
      }else{
        emitter.emit("openPage", "Dino")
        emitter.emit("closePage", "Google")
      }
    }
  }
};
</script>

<style scoped>
body {
  background-color: #fff;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
}

.logo {
  font-size: 60px;
  color: #4285f4;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Product Sans', Arial, sans-serif;
}

.search-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-input {
  width: 500px;
  height: 44px;
  padding: 0 20px;
  font-size: 18px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  outline: none;
}

.search-input:focus {
  border: 1px solid #4285f4;
}

.suggestions {
  list-style: none;
  margin-top: 5px;
  padding: 0;
  width: 500px;
  border: 1px solid #dfe1e5;
  border-top: none;
  background: white;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 4px 6px rgba(32, 33, 36, 0.2);
  font-size: 16px;
}

.suggestions li {
  padding: 10px 20px;
  cursor: pointer;
}

.suggestions li.highlighted {
  background-color: #f1f3f4;
}

.buttons {
  margin-top: 20px;
}

button {
  background: lightgray;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 5px;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  border: 1px solid #dadce0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.search-result {
  margin-top: 30px;
  font-size: 18px;
}
</style>
