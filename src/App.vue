<template>
  <div id="app">
    <header>
      <AppNavigation />
    </header>
{{ }}
    <section>
      <keep-alive>
        <router-view :key="$route.fullPath" @open-modal="toggleModal" />
      </keep-alive>
      <AppModal v-if="showModal" @close-modal="toggleModal"></AppModal>
    </section>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppModal from '@/components/AppModal.vue';

export default {
  name: 'app',
  components: {
    AppNavigation,
    AppFooter,
    AppModal
  },
  data() {
    return {
      showModal: false
    };
  },
  created() {
    this.loadInitialData();
  },
  methods: {
    loadInitialData() {
      try {
        this.$store.dispatch('getInitialData');
      } catch (e) {
        this.error = 'Error: configuration not loaded';
      }
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono|Titillium+Web:200&display=swap);

body {
  margin: 0;
  padding: 0;
  background-color: $background-primary;
  font-size: 100%;
}
#app {
  font-family: $font-primary, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text-primary;
  padding: 0;
  font-size: 1em;
}
header{
  border-bottom: 1px solid $background-border;
  background-color: $background-secondary;
}
section {
  display: block;
  min-height: 400px;
  max-width: 1000px;
  margin: 0 auto;
}
footer{
  margin-top: 2em;
  border-top: 1px solid $background-border;
  background-color: $background-secondary;
}
.message {
  margin: 2em 20px;
  font-size: 0.9em;
  text-transform: uppercase;
}

.title {
  margin: 1em 0 1em 20px;
  font-family: $font-secondary, sans-serif;
  color: $color-secondary;
  font-size: 1.5em;
  text-transform: uppercase;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
