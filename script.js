const app = Vue.createApp({
    data() {
        return {
            arrEmails: [],
        };
    },
    methods: {
        getTenEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(serverResponse => this.arrEmails.push(serverResponse.data.response));
            };
        }
    },
    created() {
        this.getTenEmails();
    },
});

app.mount('#app');