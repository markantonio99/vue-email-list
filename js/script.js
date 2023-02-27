const { createApp } = Vue;

createApp({
  data() {
    return {
      mail: [],
    };
  },
  methods: {
    mailList() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          this.mail.push(res.data.response);
        });
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.mailList();
    }
  },
}).mount('#app');
