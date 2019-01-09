<template>
  <div class="app" :class="{hideSidebar:sidebar.opened}">
    <sidebar></sidebar>
    <div class="main">
      <navbar></navbar>
      <section class="main-wrapper">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </section>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Navbar, Sidebar } from './components'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .app
    .main
      margin: 0 53px 0 264px
      padding-top: 20px
      .main-wrapper
        margin: 50px 0 0 53px
    .bg
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: auto
      position: fixed
      z-index: -1
      background-size: cover
      background-repeat: no-repeat
      background-image: url(media/bg.jpg)

  .hideSidebar
    .main
      margin-left: 97px
</style>
