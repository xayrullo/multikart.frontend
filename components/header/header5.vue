<template>
    <header class="header-tools">
      <div class="mobile-fix-option"></div>
      <WidgetsTopbar />
      <div class="logo-menu-part">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="main-menu">
                <div class="menu-left">
                  <div class="navbar">
                    <a @click="left_sidebar">
                      <div class="bar-style">
                        <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                      </div>
                    </a>
                    <WidgetsLeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" />
                  </div>
                  <div class="brand-logo">
                    <nuxt-link :to="{ path: '/shop/fashion' }">
                      <img src="/images/icon/logo.png" class="img-fluid" alt="logo" />
                    </nuxt-link>
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
      </div>
    </header>
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
