<template>
  <div class="wrap">
    <header>
      <div v-if="fatherTitle=='home'" class="top_tip">{{itemDetail[0].active_topic_phase}}</div>
      <div v-if="fatherTitle=='item'" class="top_tip">{{itemDetail[pageNum-1].topic_name}}</div>
    </header>
    <div class="content">
      <div v-if="fatherTitle=='home'">
        <router-link to="/item" class="btn_start"></router-link>
      </div>
      <div v-if="fatherTitle=='item'">
        <ul>
          <li v-for="item,index in itemDetail[pageNum-1].topic_answer" class="answer">
            <span class="before" :class="{choose:select===index}" @click="choosed(index,item.topic_answer_id)">{{choose(index)}}</span>{{item.answer_name}}
          </li>
        </ul>
      </div>
      <div v-if="fatherTitle=='item'">
        <div v-if="pageNum<itemDetail.length" class="btn_next" @click="next"></div>
        <div v-else class="btn_submit" @click="submit"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../css/common.css'
  import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return{
      select:null,
      chooseID:null,
    }
  },
  props:['fatherTitle'],
  computed:mapState(['itemDetail','pageNum','answer']),
  methods:{
    choose:type=>{
      switch(type){
        case 0:return 'A'
        case 1:return 'B'
        case 2:return 'C'
        case 3:return 'D'
      }
    },
    choosed(index,id){
      this.select=index
      this.chooseID=id
    },
    ...mapActions(['addNum','initData']),
    next(){
      if(this.chooseID!=null){
        this.addNum(this.chooseID)
        this.select=null
        this.chooseID=null
        // console.log(this.chooseID)
      }else{
        alert('煞笔不会做蒙一个啊')
      }
    },
    submit(){
      if(this.chooseID!=null){
        this.addNum(this.chooseID)
        this.select=null
        this.chooseID=null
        this.$router.push('score')
        // console.log(this.chooseID)
      }else{
        alert('煞笔不会做蒙一个啊')
      }
    },
    created(){
      this.initData()
    }

  }
}
</script>

<style>

</style>
