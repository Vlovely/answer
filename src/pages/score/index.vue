<template>
  <div class="wrap">
    <div class="score">
      <h2>{{score}}分！</h2>
      <p>{{viewtip}}</p>
    </div>
    <div class="share"></div>
    <div class="erwm"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'score',
  data(){
    return{
      score:0,
      rightAn:[2,7,12,13,18],
      tips:['垃圾','菜鸡','渣渣','真胖','流弊'],
      viewtip:''
    }
  },
  computed:mapState(['answer']),
  methods:{
    getStore(){
      console.log(this.answer)
      this.answer.forEach((item,index) => {
        if(item==this.rightAn[index]){
          this.score+=20
        }
      });
    },
    getTips(){
      switch(this.score){
        case 20:return this.viewtip=this.tips[0];break;
        case 40:return this.viewtip=this.tips[1];break;
        case 60:return this.viewtip=this.tips[2];break;
        case 80:return this.viewtip=this.tips[3];break;
        case 100:return this.viewtip=this.tips[4];break;
      }
    },
  },
  created(){
      this.getStore(),
      this.getTips()
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,.wrap{
  height: 100%;
}
body{
  position: relative;
}
.wrap{
  background: url('../../../static/images/4-1.jpg') no-repeat;
  position: relative
}
.score{
  width: 3.94rem;
  height: 3.82rem;
  margin: 0 auto;
  position: relative;
  background: url('../../../static/images/4-2.png');
  background-size: 100% 100%;
}
h2{
  font-size: 0.64rem;
  text-align: center;
  padding-left:0.6rem; 
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}
p{
  font-size: 0.36rem;
  text-align: center;
  position: absolute;
  top: 2.8rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.share{
  width: 2.1rem;
  height: 0.94rem;
  background: url('../../../static/images/4-3.png') no-repeat;
  background-size: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.05rem;
  margin-top: -0.47rem;
}
</style>
