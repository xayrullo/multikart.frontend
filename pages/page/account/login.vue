<template>
<Header/>
<div>
    <WidgetsBreadcrumbs title="Login" />
    <section class="login-page section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h3>{{logintitle}}</h3>
                    <div class="theme-card">
                        <form class="theme-form" @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" v-model="user.email.value" placeholder="Email" name="email" />
                                <span class="validate-error" v-if="!user.email.value || !validEmail(user.email.value) ">{{ user.email.errormsg }}</span>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" v-model="user.password.value" placeholder="Enter your password"  />
                                <span class="validate-error" v-if="user.password.value.length < 7">{{ user.password.errormsg }}</span>
                            </div>

                            <button type="submit" class="btn btn-solid" >Login</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 right-login">
                    <h3>{{registertitle}}</h3>
                    <div class="theme-card authentication-right">
                        <h6 class="title-font">Create A Account</h6>
                        <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                        <nuxt-link :to="{ path: '/page/account/register'}" class="btn btn-solid">Create an Account</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<Footer />
</template>

<script>
import Userauth from '../auth/auth'
import { useCartStore } from '~~/store/cart'

export default {
   
  
    data() {
        return {
            result: {email:'',password:''},
            logintitle: 'Login',
            registertitle: 'New Customer',
            user: {
                email: {
                    value: 'test@admin.com',
                    errormsg: ''
                },
                password: {
                    value: 'test@123456',
                    errormsg: ''
                }
            }
        }
    },
      computed:{
    cart(){
      return useCartStore().cartItems
    },
  },
    methods: {
        onSubmit() {
            if (!this.user.password.value || this.user.password.value.length < 7) {
                this.user.password.errormsg = 'min length 7'
            }else{this.user.password.errormsg = ''}
            if (!this.user.email.value) {
                this.user.email.errormsg = 'empty not allowed'
            } else if (!this.validEmail(this.user.email.value)) {
              this.user.email.errormsg = 'Valid email required.'}
            else{
              this.user.email.errormsg=''
            }
             if(!this.user.email.errormsg && !this.user.password.errormsg && this.user.email.value != 'test@admin.com' || this.user.password.value != 'test@123456'){
                useNuxtApp().$showToast({msg:"enter valid email and password",type:"info"})
            }
            if(!this.user.email.errormsg && !this.user.password.errormsg && this.user.email.value == 'test@admin.com' && this.user.password.value== 'test@123456'){
                
                this.result ={email:this.user.email.value, password:this.user.password.value}
                Userauth.localLogin(this.result)
                if(this.cart.length>0){
                    this.$router.replace('/page/account/checkout')}
                else{this.$router.replace('/')}
            }
                   useCookie('userLogin').value === 'true'
          },
        validEmail: function (email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        }
    }

}
</script>
