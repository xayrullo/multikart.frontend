<template>
  <div>
    <header>
      <div class="mobile-fix-option"></div>
      <WidgetsTopbar />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="main-menu">
              <div class="menu-left category-nav-right">
                <div class="brand-logo">
                  <a href="#">
                    <img src="/images/icon/layout4/logo.png" class="img-fluid" alt />
                  </a>
                </div>
                <div class="navbar">
                  <a @click="left_sidebar">
                    <div class="bar-style">
                      <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                    </div>
                  </a>
                  <WidgetsLeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" />
                </div>
              </div>
              <div class="menu-right pull-right">
                <WidgetsNavbar />
                <WidgetsHeaderWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
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
