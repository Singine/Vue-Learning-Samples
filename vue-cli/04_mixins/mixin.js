export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('啵啵泥！')
    },
}

export const mixin2 = {
    data(){
        return {
            x:'x',
            y:'y'
        }
    }
}