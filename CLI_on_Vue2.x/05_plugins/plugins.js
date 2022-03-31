export default {
    install(Vue,a,b,c) {
        console.log('@installed');
        console.dir(Vue,a,b,c);

        Vue.filter('mySlice', function (val) {
            return val.slice(0, 5)
        })

        Vue.directive('fbind-global', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element, binding) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
                element.focus()
            }
        })

        Vue.directive('big-global', function (element, binding) {
            element.innerText = binding.value * 10
        })

        Vue.mixin({
            data() {
                return {
                    x: 'x',
                    y: 'y'
                }
            },
            mounted() {
                console.log('啵啵泥！')
            },
        })

        Vue.prototype.hello = ()=>{
            alert('我想你')
        }
    }
}

