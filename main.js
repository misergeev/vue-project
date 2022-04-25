const app = Vue.createApp({
    data() {
        return {
            items: [
                {id: 1, name: 'Прибраться', descr: 'Нужно пирать комнату'},
                {id: 2, name: 'Сходить в магазин'},
                {id: 3, name: 'Элемент', descr: 'Описание элемента'},
            ],
        }
    },
    methods: {
        deleteElem(element) {
            let elementId = element.path[1].dataset.id;
            for (let i = 0; i < this.items.length; i++ ) {
                if (elementId == this.items[i].id) {
                    this.items.splice(i, 1)
                }
            }
        }
    }
})