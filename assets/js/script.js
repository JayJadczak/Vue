new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://esumomedia.com'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            return this.title;
        }
    }
})