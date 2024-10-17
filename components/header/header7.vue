<template>
  <div>
    <header class="h7" :class="{ 'header-gym': $route.name == 'shop-gym' }">
      <div class="mobile-fix-option"></div>
      <WidgetsTopbar />

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/shop/fashion' }">
                    <img src="/images/gym/logo.png" class="img-fluid" alt="logo" />
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
    </header>
  </div>
</template>
<script>
export default {


}
</script>