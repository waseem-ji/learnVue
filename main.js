Vue.component('coupon',{
    template: '<input placeholder="enteryour coupon code" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            this.$emit("applied")
        }
    },
})

new Vue({
    el:"#root",
    data:{
        couponApplied :false
    },
    methods:{
        some() {
           this.couponApplied = true
        }
    }
});