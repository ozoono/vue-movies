<template>
  <div>
    <h2 class="title">
      <font-awesome-icon 
        icon="film" 
        size="1x" />&nbsp;
      Top 10 rated Movies
    </h2>
    <ItemList :results="resultsMovie" type="movie" @item-clicked="viewDetailInfo" />

    <h2 class="title">
      <font-awesome-icon 
        icon="tv" 
        transform="shrink-3"
        size="1x" />&nbsp;
        Top 10 rated TV shows
      </h2>
    <ItemList :results="resultsTv" type="tv" @item-clicked="viewDetailInfo" />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue';
import AppServices from '@/services/AppServices';
import { viewDetailMixin } from '@/mixins/viewDetailMixin';

export default {
  name: 'TopsView',
  mixins: [viewDetailMixin],
  components: {
    ItemList
  },
  data() {
    return {
      numItems: 10,
      resultsMovie: [],
      resultsTv: [],
      loading: true
    };
  },
  created() {
    this.fetchTops();
  },
  methods: {
    async fetchTops() {
      try {
        const [responseMovie, responseTv] = await Promise.all([
          AppServices.getTop('movie'),
          AppServices.getTop('tv')
        ]);
        this.resultsMovie = responseMovie.data.results.slice(0, this.numItems);
        this.resultsTv = responseTv.data.results.slice(0, this.numItems);
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>