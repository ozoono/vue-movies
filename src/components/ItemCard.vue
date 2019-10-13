<template>
  <li class="card">
    <div>
      <a href="#" @click.prevent="viewDetail">
        <figure>
          <img :src="urlImg" />
        </figure>
        <span class="icon-container" v-show="showIcon">
          <font-awesome-icon 
            :icon="icon" 
            size="1x" 
            class="icon" />
        </span>
        <span class="card-title">{{ title }}</span>
      </a>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ItemCard',
  props: {
    item: Object,
    type: String
  },
  computed: {
    ...mapGetters(['imgPath']),
    urlImg() {
      return this.item.poster_path != null
        ? `${this.imgPath}${this.item.poster_path}`
        : require('@/assets/images/poster-not-available.png');
    },
    mediaType(){
      return this.type == 'multi' ? this.item.media_type : this.type;
    },
    title() {
      return this.mediaType == 'movie' ? this.item.title : this.item.name;
    },
    showIcon(){
      return this.type == 'multi' ? true : false;
    },
    icon(){
      return this.mediaType == 'movie' ? 'film' : 'tv';
    }

  },
  methods: {
    viewDetail() {
      this.$emit('item-clicked', this.item.id, this.mediaType);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
figure {
  margin: 0 0 10px;
  padding: 0;
}
img {
  width: 100%;
  height: auto;
  box-shadow: 0px 1px 5px 0px $poster-shadow;
  box-sizing: border-box;
}
span {
  padding: 2px;
  color: $color-text-primary;
  font-size: .9em;

  &.icon-container{
    float:left; 
    margin-right: 5px;
    padding-bottom:5px;
  }
}
i{
  display: inline-block;
  padding-top: 4px;
}
a {
  color: #333;
  text-decoration: none;
  &:hover {
    img {
      box-shadow: 0px 1px 5px 0px $poster-shadow-active;
    }
    span.card-title {
      color: $color-text-secondary;
      background-color: $color-primary;
    }
  }
}
.card {
  list-style: none;
  margin-bottom: 10px;
  padding: 0;
  width: 50%;

  div {
    padding: 10px 20px;
  }
}

.icon{
  display: inline;
  color: #fff;
}
@include sm {
  .card {
    width: 33%;
  }
}
@include md {
  .card {
    width: 25%;
  }
}
@include lg {
  .card {
    width: 20%;
  }
}
</style>
