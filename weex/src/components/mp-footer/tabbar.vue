<template>
  <div class="wrapper">
    <embed v-for="(item , index) in tabItems" :src="item.src" :key="index" type="weex" :style="{ visibility: item.visibility, marginBottom:100+fillOffset+'px' }" class="content" />
    <div class="tabbar" :style="{height:100+fillOffset+'px'}" append="tree">
      <tabitem v-for="(item , index) in tabItems" :tabberSignIndex="tabberSignIndex" :key="index" :index="index" :icon="item.icon" :title="item.title" :titleColor="item.titleColor" @tabItemOnClick="tabItemOnClick">
      </tabItem>
    </div>
    <div class="mask" v-if="isShowMask" :style="{height:100+fillOffset+'px'}"></div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 750px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 0;
  /* margin-bottom: 100px; */
}
.tabbar {
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #ffffff;
}
.mask{
  position: fixed;
  bottom: 0;
   left: 0;
  right: 0;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>

<script>
import tabitem from "./tabitem.vue";
const context = weex.requireModule('context')
export default {
  props: {
    tabItems: { default: ()=>[] },
    selectedColor: { default: "" },
    unselectedColor: { default: "red" }
  },
  data: function() {
    return {
      selectedIndex: 0,
      tabLength: 4,
      fillOffset:0,
      tabberSignIndex:['no','no','no','no','no'],
      isShowMask:false//底部菜单栏蒙层
    };
  },
  components: { tabitem },
  created: function() {
    // this.tabberSignIndex = ['no','no',2,3,'no'];
    this.initState();
    this.fitTabBar()
    this.tabberSignIndex = JSON.parse(context.sessionGetString("tabMessFlag"));
  },
  mounted(){
    const broadCast1 = new BroadcastChannel('OverlayShow');
    broadCast1.onmessage=(event)=>{
      if(event.data == 'show'){
        this.isShowMask = true;
      }else{
        this.isShowMask = false;
      }
    };
  },
  methods: {
    fitTabBar(){
        this.fillOffset=this.getTabbarHeight()-100;
    },
    initState() {
      // var baseURL = weex.config.bundleUrl.replace("/weex/index.weex.js?Page=Launcher", "");
      var baseURL = weex.config.bundleUrl.replace(/\/weex\/[a-zA-Z]+.weex.js\/?.*/,'')
      this.tabLength = this.tabItems.length;
      for (let i = 0; i < this.tabLength; i++) {
        this.$set(this.tabItems[i],'src',baseURL+this.tabItems[i].src)
        // if (this.tabItems[i].visibility == "visible") {
        //   this.selectedIndex = i;
        //   // break;
        // }
      }
      this.select(this.selectedIndex);
    },
    tabItemOnClick: function(e) {
      // 如果遮罩出现
      if(this.isShowMask){return}
      this.selectedIndex = e.index;
      if(this.selectedIndex==2){
        this.$set(this.tabberSignIndex,2,'no');
        // this.tabberSignIndex[2] = 'no';
        console.log(this.tabberSignIndex)
      }
      if(this.selectedIndex==3){
        this.$set(this.tabberSignIndex,3,'no');
        // this.tabberSignIndex[3] = 'no';
        console.log(this.tabberSignIndex)
      }
      this.select(e.index);
      this.$emit("tabBarOnClick", e);
      
    },
    select: function(index) {
      for (var i = 0; i < this.tabLength; i++) {
        var tabItem = this.tabItems[i];
        if (i == index) {
          tabItem.icon = tabItem.selectedImage;
          tabItem.titleColor = this.selectedColor;
          tabItem.visibility = "visible";
        } else {
          tabItem.icon = tabItem.image;
          tabItem.titleColor = this.unselectedColor;
          tabItem.visibility = "hidden";
        }
      }
    }
  },
  watch: {
    tabItems() {
      this.initState();
      this.select(this.selectedIndex);
    }
  }
};
</script>
