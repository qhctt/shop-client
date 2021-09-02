<template>
  <div id="animate">
    <button v-on:click="show = !show">
      target
    </button>
<!--    transition标签表示动画，必须取名，比如下面的动画组件取名为fade-->
<!--    <transition name="fade">-->
<!--      <p v-if="show">hello</p>-->
<!--    </transition>-->
<!--    在vue官方文档中自定义类名demo中使用的animate版本较低，现在应该使用animate动画类名为animate_animated-->
    <transition name="hello"
                enter-active-class="animate__animated animate__fadeInUp"
                leave-active-class="animate__animated animate__fadeInUp">
      <p v-if="show">hello</p>
    </transition>

    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
<!--        transition-group包裹起来的渲染目标标签，应该加上class，它的值就是transition-group的name+'item'-->
<!--        transition-group包裹起来的渲染目标标签 的:key不应该使用index,规范的做法是给每一个item对象加上id字段-->
    <span v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </span>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "animate",
  data(){
    return{
      show : true,
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    }
  }
}
</script>

<style scoped>
/*.fade-enter-active, .fade-leave-active{*/
/*  transition: opacity .5s;*/
/*}*/
/*!*enter表示显示，leave-to表示隐藏*!*/
/*.fade-enter, .fade-leave-to!*.fade-enter-active below version 2.1.8*!{*/
/*  opacity: 0;*/
/*}*/
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>