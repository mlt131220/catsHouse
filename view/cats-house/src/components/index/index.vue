<template>
  <div id="index">
    <div id="first_figure" :style="{height:windowHeight}">
      <img src="http://img.dogegg.pet/typecho/uploads/2020/08/3467962441.jpg">
    </div>
    <a href="https://github.com/mlt131220/DogEgg" target="_blank">
      <img width="149" height="149"
           src="../../assets/fork_github.png"
           alt="Fork me on GitHub"
           style="position: fixed;bottom: 0;right: 0;"
           v-if="screenWidth > 991">
    </a>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'index',
    data() {
      return {
        windowHeight:document.documentElement.clientHeight
      }
    },
    components:{},
    methods: {},
    mounted () {
      let that = this;
      console.log(that.windowHeight)
      window.onresize = () => {
        return (() => {
          that.$store.commit('base/setScreenWidth',document.documentElement.clientWidth);
          that.windowHeight = document.documentElement.clientHeight;
        })()
      }
    },
    computed:{
      screenWidth(){
        return this.$store.state.base.screenWidth;
      }
    },
    store
  }
</script>

<style scoped lang="scss">
#index{
  #first_figure{
    overflow:hidden;

    img{
      width: 100%;
    }
  }
}

</style>
