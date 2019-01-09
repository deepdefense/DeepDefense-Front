<template>
  <el-menu class="navbar" mode="horizontal">

    <breadcrumb class="breadcrumb-container"></breadcrumb>

    <logout :isShow.sync="isShow"></logout>
  </el-menu>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'

  import Breadcrumb from 'components/breadcrumb'
  import Screenfull from 'components/screenfull'
  import LangSelect from 'components/langSelect'
  import logout from 'components/logout/logout'
  import log from './log.jpg'

  export default {
    components: {
      Breadcrumb,
      Screenfull,
      LangSelect,
      logout
    },
    data() {
      return {
        name: '',
        avata: '',
        log,
        isShow: false
      }
    },
    computed: {
      ...mapState({
        agents: state => state.app.agents,
        currentAgent: state => state.app.currentAgent
      }),
      isCustom() {
        return this.$route.name === 'customMonitor'
      }
    },
    methods: {
      handleChange(item) {
        if (item.probe !== this.currentAgent.probe) {
          this.$store.commit('setCurrentAgent', item)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .navbar
    height: 50px
    line-height: 50px
    border-radius: 0px !important
    background: 0
    border: 0
    .service
      float: left
      margin-left: 15px
    .breadcrumb-container
      float: left
      font-size: 20px
    .errLog-container
      display: inline-block
      vertical-align: top
    .right-menu
      float: right
      height: 100%
      &:focus
        outline: none
      .right-menu-item
        display: inline-block
        margin: 0 8px
      .screenfull
        height: 20px
      .international
        vertical-align: top
      .theme-switch
        vertical-align: 15px
      .avatar-container
        height: 50px
        margin-right: 30px
        .avatar-wrapper
          cursor: pointer
          margin-top: 5px
          position: relative
          .user-avatar
            width: 40px
            height: 40px
            border-radius: 10px
          .el-icon-caret-bottom
            position: absolute
            right: -20px
            top: 25px
            font-size: 12px
</style>
