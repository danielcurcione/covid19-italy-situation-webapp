<template>
  <div id="section-switch">

    <button id="homepage" class="active" @click="selection('homepage')"> valori </button>
    <button id="graphics" @click="selection('graphics')"> grafici </button>

    <transition name="component-fade" mode="out-in">
      <component v-bind:is="currentTab"></component>
    </transition>

  </div>
</template>


<script>
import Homepage from './Homepage'
import Graphics from './Graphics'

export default {
  name: 'SectionSwitch',
  data () {
    return {
      currentTab: "Homepage",
      tabs: ["Homepage", "Graphics"]
    }
  },
  components: {
    Homepage,
    Graphics
  },
  methods: {
    selection(x) {
      this.currentTab = x;

      if(x == 'homepage') {
        document.getElementById('homepage').classList.add('active');
        document.getElementById('graphics').classList.remove('active');
      } else {
        document.getElementById('homepage').classList.remove('active');
        document.getElementById('graphics').classList.add('active');
      }
    }
  }
}
</script>


<style scoped>
#section-switch {
  padding: 0;
  width: 100%;
  height: max-content;
  text-align: center;
}

button {
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 3px solid rgb(42, 42, 42);
  border-radius: 20px;
  color: white;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}

button#homepage {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0px;
}

button#graphics {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0px;
}

.active {
  background-color: rgb(42, 42, 42);
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
