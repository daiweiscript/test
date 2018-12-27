<template>
  <div class="tv-list"
       v-if="list">
    <videoPlayer v-if="playerOptions.sources[0].src" class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true" />
    <div class="select">
      <cube-button inline
                   light
                   outline
                   v-for="(video,idx) in list"
                   :key="video.vid"
                   @click="changeIdx(video.url)">{{idx+1}}</cube-button>
    </div>
  </div>
</template>

<script lang="js">
import { Component, Prop, Vue } from "vue-property-decorator";
import {list$,vip$} from './main.service'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
@Component({
  created(){
    const {id} = this.$route.params
    this.id = id
    this.getHistory(id)
    list$(id)
    .then(({list})=>{
      this.list = list
      vip$(list[this.activeIdx].url)
        .then(({url})=>this.playerOptions.sources[0].src = url)
    })
    console.log(this.playerOptions)
  },
  components : {
    videoPlayer
  }
})
export default class Index extends Vue {
  id=0
  list=null
  activeIdx = 1
   playerOptions = {
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: ""
          }],
          poster: "/static/images/author.jpg",
        }
  getHistory(id){
    if(localStorage[id]){
      const history = JSON.parse(localStorage[id])
      this.activeIdx = history.activeIdx
      this.lastTime = history.lateTime
    }
  }
  changeIdx(url){
    vip$(url).then(({url})=>this.playerOptions.sources[0].src = url)
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tv-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.select {
  display: flex;
  flex-wrap: wrap;
  width: 330px;
  padding: 15px 10px;
}
button {
  width: 40px;
  text-align: center;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.video-player-box /deep/  .video-js{
  width: 330px;
  height: 200px;
}
.video-player-box /deep/ .vjs-big-play-button {
  transform: translate(-50%, -50%) scale(0.5);
  top: 50%;
  left: 50%;
}
</style>
