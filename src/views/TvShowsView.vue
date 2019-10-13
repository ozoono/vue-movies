<template>
  <div>
    <h2 class="title">
      <font-awesome-icon 
        icon="tv" 
        transform="shrink-3"
        size="1x" />&nbsp;
        TV Shows On Air
      </h2>
    <ItemList :results="results" type="tv" @item-clicked="viewDetailInfo" />
    <ItemListMore :loading="loading" :loadMore="loadMore" @view-more="fetchData('MORE')"/>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList';
import ItemListMore from '@/components/ItemListMore';
import AppServices from '@/services/AppServices';
import { viewDetailMixin } from '@/mixins/viewDetailMixin';

export default {
  name: 'TvShowsView',
  mixins: [viewDetailMixin],
  components: {
    ItemList,
    ItemListMore
  },
  data() {
    return {
      page: 1,
      loading: false,
      error: '',
      results: [],
      totalPages: null
    };
  },
  computed: {
    loadMore() {
      return this.totalPages > this.page ? true : false;
    },
    showMessage() {
      return this.searching || this.error != '' ? true : false;
    }
  },
  created(){
    this.fetchData('INIT');
  },
  methods: {
    async fetchData(action) {
      if (action == 'INIT') {
        this.page = 1;
      } else {
        this.page++;
        this.loading = true;
      }

      try {
        const response = await AppServices.getTvShowsOnAir(this.page);
        this.results = this.results.concat(response.data.results);
        this.totalPages = response.data.total_pages;
      } catch (e) {
        if (action == 'MORE') this.page--;
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