<template>
  <ul>
    <ItemCard 
      v-for="(item, index) in results" 
      :key="index" 
      :item="item" 
      :type="type" 
      v-on='$listeners'/>
  </ul>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
  name: 'ItemList',
  components: {
    ItemCard
  },
  props: {
    results: Array,
    type: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    display: flex;   
    flex-wrap: wrap; 
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
