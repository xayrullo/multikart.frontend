<template>
  <!-- header start -->
  <header>
    <div class="mobile-fix-option"></div>
    <WidgetsTopbar />
    <div class="container layout3-menu">
      <div class="row">
        <div class="col-12">
          <div class="main-menu">
            <div class="menu-left around-border">
              <div class="navbar">
                <a @click="left_sidebar">
                  <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                </a>
                <WidgetsLeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" />
              </div>
              <div class="main-menu-right">
                <WidgetsNavbar />
              </div>
            </div>
            <div class="absolute-logo">
              <div class="brand-logo">
                <a href="#"><img alt="" src="/images/icon/logo/12.png"></a>
              </div>
            </div>
            <div class="">
              <div class="menu-right pull-right">
                <WidgetsHeaderWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header end -->
</template>

<script>
export default {
  data() {
    return {
      leftSidebarVal: false
    }
  },

  methods: {
    left_sidebar() {
      this.leftSidebarVal = true
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    }
  }
}
</script>
