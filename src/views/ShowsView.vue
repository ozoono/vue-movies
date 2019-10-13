<template>
  <div>
    <AppSearch :type="type" @new-search="handleSearch" />

    <div class="message">
      <div v-show="showMessage">{{ message }}</div>
      <div v-show="showResults">
        Results found for
        <span class="query">{{ query }}</span>
        : {{ totalResults }}
      </div>
    </div>

    <ItemList :results="results" :type="type" @item-clicked="viewDetailInfo" />

    <div v-show="loadMore" class="more-container">
      <a href="#" @click.prevent="viewResults('MORE')">
        <span v-if="loading">Loading...</span>
        <span v-else>Load more results</span>
      </a>
    </div>
  </div>
</template>

<script>
import AppSearch from '@/components/AppSearch';
import ItemList from '@/components/ItemList';
import AppServices from '@/services/AppServices';
import { viewDetailMixin } from '@/mixins/viewDetailMixin';

export default {
  name: 'ShowsView',
  mixins: [viewDetailMixin],
  components: {
    AppSearch,
    ItemList
  },
  props: {
    type: {
      default: 'movie'
    }
  },
  data() {
    return {
      query: '',
      page: 1,
      searching: false,
      loading: false,
      error: '',
      results: [],
      totalResults: null,
      totalPages: null
    };
  },
  computed: {
    loadMore() {
      return this.totalPages > this.page ? true : false;
    },
    showResults() {
      return !this.searching && this.totalResults != null;
    },
    showMessage() {
      return this.searching || this.error != '' ? true : false;
    },
    message() {
      return this.searching ? 'Searching...' : this.error;
    }
  },
  methods: {
    handleSearch(query) {
      this.query = query;
      this.viewResults('SEARCH');
    },
    async viewResults(action) {
      if (action == 'SEARCH') {
        this.page = 1;
        this.searching = true;
        this.results = [];
      } else {
        this.page++;
        this.loading = true;
      }

      try {
        const response = await AppServices.search(
          this.query,
          this.page,
          this.type
        );
        this.results = this.results.concat(response.data.results);
        this.totalResults = response.data.total_results;
        this.totalPages = response.data.total_pages;
      } catch (e) {
        if (action == 'MORE') this.page--;
        this.error = e;
      } finally {
        this.searching = false;
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.query {
  color: $color-primary;
  font-weight: bold;
  font-style: italic;
  text-transform: lowercase;
}
</style>