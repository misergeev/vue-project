app.component('element-display', {
    template:
    `<div v-for="(item, i) in items" :index="i" :data-id="item.id" style="margin: 0 0 30px 0;">
        <p>
            <span>{{ i + 1 }}. </span><b>{{ item.name }}</b>
        </p>
        <p v-if="item.descr">{{ item.descr }}</p>
        <p @click="deleteElem">УДАЛИТЬ</p>
        <hr>
    </div>
    <add-element-form @add-to-list="onSubmit"></add-element-form>`,
    data() {
        return {
            items: [
                {id: 1, name: 'Прибраться', descr: 'Нужно прибрать комнату'},
                {id: 2, name: 'Сходить в магазин'},
                {id: 3, name: 'Элемент', descr: 'Описание элемента'},
            ],
            name: '',
            descr: ''
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
        },
        onSubmit(newElem) {
            this.items.push(newElem);
        }
    }
})