<template>
  <section class="section-b-space">
    <div class="container">
      <div class="checkout-page">
        <div class="checkout-form">
          <form>
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="checkout-title">
                  <h3>Billing Details</h3>
                </div>
                <div class="row check-out">
                  <div class="form-group col-md-6 col-sm-6">
                    <div class="field-label">First Name</div>
                    <input type="text" v-model="user.firstName.value" name="First name" />
                    <span class="validate-error" v-if="user.firstName.value.length === 0">{{
                      user.firstName.errormsg
                    }}</span>
                  </div>
                  <div class="form-group col-md-6 col-sm-6">
                    <div class="field-label">Last Name</div>
                    <input type="text" v-model="user.lastName.value" name="Last name" />
                    <span class="validate-error" v-if="user.lastName.value.length === 0">{{
                      user.lastName.errormsg
                    }}</span>
                  </div>
                  <div class="form-group col-md-6 col-sm-6">
                    <div class="field-label">Phone</div>
                    <input type="tel" v-model="user.phone.value" name="Phone" />
                    <span class="validate-error" v-if="user.phone.value.length === 0">{{ user.phone.errormsg }}</span>
                  </div>
                  <div class="form-group col-md-6 col-sm-6">
                    <div class="field-label">Email Address</div>
                    <input type="email" v-model="user.email.value" name="Email Address" />
                    <span class="validate-error" v-if="!user.email.value || !validEmail(user.email.value)">{{
                      user.email.errormsg
                    }}</span>
                  </div>
                  <div class="form-group col-md-12 col-sm-12">
                    <div class="field-label">Country</div>
                    <select required>
                      <option>India</option>
                      <option selected>South Africa</option>
                      <option>United State</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div class="form-group col-md-12 col-sm-12">
                    <div class="field-label">Address</div>
                    <input type="text" v-model="user.address.value" name="Address" />
                    <span class="validate-error" v-if="user.address.value.length === 0">{{
                      user.address.errormsg
                    }}</span>
                  </div>
                  <div class="form-group col-md-12 col-sm-12">
                    <div class="field-label">Town/City</div>
                    <input type="text" v-model="user.city.value" name="City" />
                    <span class="validate-error" v-if="user.city.value.length === 0">{{ user.city.errormsg }}</span>
                  </div>
                  <div class="form-group col-md-12 col-sm-6">
                    <div class="field-label">State / County</div>
                    <input type="text" v-model="user.state.value" name="State" />
                    <span class="validate-error" v-if="user.state.value.length === 0">{{ user.state.errormsg }}</span>
                  </div>
                  <div class="form-group col-md-12 col-sm-6">
                    <div class="field-label">Postal Code</div>
                    <input type="text" v-model="user.pincode.value" name="Postal Code" />
                    <span class="validate-error" v-if="user.pincode.value.length === 0">{{
                      user.pincode.errormsg
                    }}</span>
                  </div>
                  <div class="form-group col-lg-12 col-md-12 col-sm-12">
                    <nuxt-link :to="{ path: '/page/account/register' }">Create an Account?</nuxt-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="checkout-details">
                  <div class="order-box">
                    <div class="title-box">
                      <div>
                        Product
                        <span>Total</span>
                      </div>
                    </div>
                    <ul class="qty" v-if="cart.length">
                      <li v-for="(item, index) in cart" :key="index">
                        {{ item.title || uppercase }} X {{ item.quantity }}
                        <span>{{ (item.price * curr.curr) * item.quantity }}</span>
                      </li>
                    </ul>
                    <ul class="sub-total">
                      <li>
                        Subtotal
                        <span class="count">{{ cartTotal * curr.curr }}</span>
                      </li>
                      <li>Shipping
                        <div class="shipping">
                          <div class="shopping-option">
                            <input type="checkbox" name="free-shipping" id="free-shipping">
                            <label for="free-shipping">Free Shipping</label>
                          </div>
                          <div class="shopping-option">
                            <input type="checkbox" name="local-pickup" id="local-pickup">
                            <label for="local-pickup">Local Pickup</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul class="sub-total">
                      <li>
                        Total
                        <span class="count">{{ cartTotal * curr.curr }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="payment-box">
                    <div class="upper-box">
                      <div class="payment-options">
                        <ul>
                          <li>
                            <label class="d-block" for="edo-ani1">
                              <input class="radio_animated" id="edo-ani1" value="stripe" v-model="selectedPayment"
                                type="radio" name="rdo-ani" data-original-title="">Stripe
                            </label>

                          </li>
                          <li>
                            <label class="d-block" for="edo-ani2">

                              <input class="radio_anima ted" id="edo-ani2" value="paypal" v-model="selectedPayment"
                                type="radio" name="rdo-ani" data-original-title="" title="">PayPal


                            </label>

                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="text-end">


                      <div id="paypal-button-container" :class="[{ 'd-none': selectedPayment != 'paypal' }]"></div>
                      <div class="order-place" v-if="selectedPayment === 'stripe' && cart.length">

                        <button class="btn btn-primary" @click.prevent="payWithStripe">Place Order </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useCartStore } from '~~/store/cart'
import { useProductStore } from '~~/store/products'
  export default {
  computed: {
    cart(){
      return useCartStore().cartItems
    },
    cartTotal(){
      return useCartStore().cartTotalAmount
    },
    curr(){
      return useProductStore().changeCurrency
    }
  },
  data() {
    return {
      items: [{
        stripePriceId: '1',
        quantity: 5
      }],
      selectedPayment: 'paypal',
      errors: [],
      user: {
        firstName: { value: '', errormsg: '' },
        lastName: { value: '', errormsg: '' },
        phone: { value: '', errormsg: '' },
        email: { value: '', errormsg: '' },
        address: { value: '', errormsg: '' },
        city: { value: '', errormsg: '' },
        state: { value: '', errormsg: '' },
        pincode: { value: '', errormsg: '' }
      },
      isLogin: false,
      paypal: {
        sandbox: 'Your_Sendbox_Key'
      },
      payment: false,
      environment: 'sandbox',
      button_style: {
        label: 'checkout',
        size: 'medium', // small | medium | large | responsive
        shape: 'pill', // pill | rect
        color: 'blue' // gold | blue | silver | black
      },
      amtchar: ''
    }
  },
 
watch:{
    cart:{
      handler(value){
        if(value.length==0){
          useNuxtApp().$showToast({ msg: "Cart is Empty.", type: "error" })
          this.$router.replace('/page/account/cart')
        }
        
      },deep:true
    }
  },


  methods: {

    payWithStripe() {
      this.onSubmit()

      this.isLogin = useCookie('userlogin').value
      if (!this.isLogin) {

        this.$router.replace('/page/account/login')
      }
      else if (this.user.firstName.errormsg != '' && this.user.lastName.errormsg != '' && this.user.city.errormsg != '' && this.user.pincode.errormsg != '' && this.user.state.errormsg != '' && this.user.phone.errormsg != '' && this.user.address.errormsg != '' && this.user.email.errormsg != '') {

        this.onSubmit()
      }
      else if (this.isLogin) {

        this.payment = false
        var handler = (window).StripeCheckout.configure({
          key: 'PUBLISHBLE_KEY', // 'PUBLISHBLE_KEY'
          locale: 'auto',
          closed: function () {
            handler.close()
          },
          token: (token) => {
            this.$store.dispatch('products/createOrder', {
              product: this.cart,
              userDetail: this.user,
              token: token.id,
              amt: this.cartTotal
            })
            this.$router.push('/page/order-success')
          }
        });
        handler.open({
          name: 'Multikart ',
          description: 'Your Choice Theme',
          amount: this.cartTotal * 100
        });
      }


    },

    onSubmit() {

      if (this.user.firstName.value.length <= 1 || this.user.firstName.value.length > 10) {
        this.user.firstName.errormsg = 'empty not allowed'
      } else {
        this.user.firstName.errormsg = ''
      }

      if (this.user.lastName.value.length <= 1 || this.user.lastName.value.length > 10) {
        this.user.lastName.errormsg = 'empty not allowed'
      } else {
        this.user.lastName.errormsg = ''
      }

      if (this.user.city.value.length < 3 || this.user.city.value.length > 10) {
        this.user.city.errormsg = 'empty not allowed'
      } else {
        this.user.city.errormsg = ''
      }
      if (this.user.pincode.value.length < 4) {

        this.user.pincode.errormsg = 'empty not  allowed'
      } else {
        this.user.pincode.errormsg = ''
      }
      if (!this.user.state.value) {
        this.user.state.errormsg = 'empty not allowed'
      } else {
        this.user.state.errormsg = ''
      }
      if (!this.user.phone.value) {
        this.user.phone.errormsg = 'empty not allowed'
      } else {
        this.user.phone.errormsg = ''
      }
      if (!this.user.address.value) {
        this.user.address.errormsg = 'empty not allowed'
      } else {
        this.user.address.errormsg = ''
      }
      if (!this.user.email.value) {
        this.user.email.errormsg = 'empty not allowed'
      } else if (!this.validEmail(this.user.email.value)) {

        this.user.email.errormsg = 'Valid email required.'

      } else {
        this.user.email.errormsg = ''
      }

    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  },
  
   mounted(){
    window.paypal.Buttons({

    }).render('#paypal-button-container')




    this.isLogin = useCookie('userlogin').value

    if (!this.isLogin) {
      this.$router.replace('/page/account/login')
    }
    else if (this.isLogin && this.cart.length == 0) {
      useNuxtApp().$showToast({ msg: "Cart is Empty.", type: "error" })
      this.$router.replace('/page/account/cart')
    }

  },
}
</script>
