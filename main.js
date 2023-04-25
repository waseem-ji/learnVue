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
    methods:{
        some() {
            alert("haha , got u");
        }
    }
});