<template>
    <view class="no"> 
       <view class="nones" >
       	<img src="@/imgs/none.png"></img>
       	<view>暂无数据</view>
       </view> 
    </view>
</template>

<script>
export default {
  name: 'none', 
  props: [], 
  data() {
    return {
      
    } 
  },
   mounted(){      
  }
}
</script>

<style lang="less">
   .nones{padding: 150px 0;text-align: center;color:#ADADAD;line-height:50px;font-size: 18px;
   	img{width: 60px;height: 60px;}
   }
</style>