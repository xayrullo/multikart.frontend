<template>
    <div>
        <div class="modal-backdrop fade show" v-if="showModal"></div>

        <div class="modal fade show d-block bd-example-modal-lg theme-modal" id="modal-newsletter" aria-hidden="true"
            tabindex="-1" role="dialog" aria-labelledby="modal-cartLabel" v-if="showModal">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body modal1">
                        <div class="container-fluid p-0">
                            <div class="row">
                                <div class="col-12">
                                    <div class="modal-bg">
                                        <button class="close btn-close" type="button" @click="closeCart()">
                                            <span>×</span>
                                        </button>
                                        <div class="offer-content">
                                            <img :src="imagepath" class="img-fluid" alt="offer" />
                                            <h2>newsletter</h2>
                                            <form class="auth-form needs-validation" target="_blank">
                                                <div class="form-group mx-sm-3">
                                                    <input type="email" class="form-control" name="EMAIL"
                                                        placeholder="Enter your email" required="required" />
                                                    <button type="submit" class="btn btn-solid"
                                                        id="mc-submit">subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagepath: ('../../images/Offer-banner.png'),
            showModal: false
        }
    },
 
    methods: {

        closeCart() {
            this.showModal = false
        }
    },
       mounted() {
        if (localStorage.getItem('showModel') !== 'newsletter') {
            this.showModal = true
            localStorage.setItem('showModel', 'newsletter')
        }
    },
}
</script>
