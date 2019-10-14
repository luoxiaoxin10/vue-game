<template>
  <div id="app" @click="onLiftOrRight">
    <div class="content" :style="`transform:translate(0, ${transform}px)`">
      <div v-for="(itme,index) in json" v-bind:key="index" :class="`itme ${itme.type}`" :style="`width:${itme.width}%;top:-${itme.top}px`"></div>
      <div :class="`current ${current}`" :style="`transform:translate(0, -${transform}px);background-color:${currentcolor}`"></div>
    </div>
  </div>
</template>
<style lang="less">
  html,body,#app{
    margin:0px;
    padding:0px;
    width:100%;
    height:100%;
  }
  #app{
    background-color: red;
    max-width: 580px;
    margin:auto;
    overflow: hidden;
    .content{
      width: 100%;
      height: 100%;
      position: relative;
      .itme{
        position:absolute;
        width: 30%;
        height: 20px;
        background-color: white;
      }
      .left{
        left: 0px;
      }
      .right{
        right: 0px;
      }
      .current{
        position: absolute;
        top:50%;
        width: 20px;
        height: 20px;
      }
      .current.left{
        animation: myfirst .2s;
        -moz-animation: myfirst .2s;	/* Firefox */
        -webkit-animation: myfirst .2s;	/* Safari 和 Chrome */
        -o-animation: myfirst .2s;	/* Opera */
        
      }
      .current.right{
        animation: myfirst2 .2s;
        -moz-animation: myfirst2 .2s;	/* Firefox */
        -webkit-animation: myfirst2 .2s;	/* Safari 和 Chrome */
        -o-animation: myfirst2 .2s;	/* Opera */
      }
      @keyframes myfirst
      {
        0%  {left: 100%;}
        100% {left: 0px;}
      }

      @-moz-keyframes myfirst /* Firefox */
      {
        0%  {left: 100%;}
        100% {left: 0px;}
      }

      @-webkit-keyframes myfirst /* Safari 和 Chrome */
      {
        0%  {left: 100%;}
        100% {left: 0px;}
      }

      @-o-keyframes myfirst /* Opera */
      {
        0%  {left: 100%;}
        100% {left: 0px;}
      }
      @keyframes myfirst2
      {
        0%  {right: 100%;}
        100% {right: 0px;}
      }

      @-moz-keyframes myfirst2 /* Firefox */
      {
        0%  {right: 100%;}
        100% {right: 0px;}
      }

      @-webkit-keyframes myfirst2 /* Safari 和 Chrome */
      {
        0%  {right: 100%;}
        100% {right: 0px;}
      }

      @-o-keyframes myfirst2 /* Opera */
      {
        0%  {right: 100%;}
        100% {right: 0px;}
      }
    }
    
  }
</style>
<script>
import { forever_time_out } from '@/libs/util'
import { forla } from '@/libs/json'
export default {
  name: 'app',
  data(){
    return {
      transform:0,
      current:'left',
      currentcolor:'black',
      list:[],
      json:[],
      tiem:{},
      half:0,
    }
  },
  methods:{
    onLiftOrRight(){
      this.current =  this.current=='left'?'right':'left'
    },
    kainit(num){
      this.json = forla(num)
      this.list = JSON.parse(JSON.stringify(this.json))
    },
    rolling(){
      this.transform = this.transform + 1
    },
    over(){
      this.currentcolor = 'white'
      alert('游戏结束！当前得分' + (this.transform - this.half)+'分')
      this.tiem()
    }
  },
  watch:{
    transform(nval){
      if(this.list.length==0){
        alert('恭喜你，通关了')
        this.tiem()
      }
      if(this.transform + 19>=(this.list[0].top + this.half )){
        if(this.current == this.list[0].type){
          this.over()
        }
        this.list.shift()
      }
    }
  },
  mounted(){
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.half = height/2;
    this.kainit(1100)
    this.tiem = forever_time_out(this.rolling, 10)
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
