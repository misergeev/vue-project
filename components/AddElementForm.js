app.component('add-element-form', {
    template:
    `<form @submit.prevent="onSubmit">
        <input type="text" v-model="name">
        <input type="text" v-model="descr">
        <input type="submit">
    </form>`,
    data() {
        return {
            name: '',
            descr: '',
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '') {
                alert('Name is empty')
            }


            let newItem = {
                id: Date.now(),
                name: this.name,
                descr: this.descr,
            }

            this.$emit('add-to-list', newItem)

            this.name = '';
            this.descr = '';
        }
    }
})