new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
    },
    methods: {
        ChangeTitle: function(event) {
            this.title = event.target.value;
        }
    }
})