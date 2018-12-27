<template>
  <div class="index" v-if="list">
    <div class="video-group">
      <router-link :to="`/tv-list/${video.id}`" class="video-item" v-for="video in list" :key="video.id">
        <img :src="video.poster">
        <div class="title">{{video.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="js">
import { Component, Prop, Vue } from "vue-property-decorator";
import {index$} from './main.service'
@Component({
  created(){
    index$.then(({list})=>this.list = list)
  }
})
export default class Index extends Vue {
  list=null
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.video-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.video-item{
  width:165px;
  margin-top:10px;
  img{
    width:100%;
  }
}
.video-item:nth-child(2n){
  margin-left:10px;
}
</style>
