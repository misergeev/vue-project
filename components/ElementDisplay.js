app.component('element-display', {
    template:
    `<div
        v-for="(item, i) in items"
        v-if="items.length"
        :data-id="item.id"
        :class="{ completeElem: item.completed }"
        style="margin: 0 0 30px 0;"
    >
        <p>
            <span>{{ i + 1 }}. </span><b>{{ item.name }}</b>
        </p>
        <p v-if="item.descr">{{ item.descr }}</p>
        <p @click="deleteElem">УДАЛИТЬ</p>
        <p @click="completeElem">ЗАВЕРШИТЬ</p>
        <p v-if="item.completed">Завершено</p>
        <hr>
    </div>
    <p v-else>Нет дел</p>
    <add-element-form @add-to-list="onSubmit"></add-element-form>`,
    data() {
        return {
            items: [
                {id: 1, name: 'Прибраться', descr: 'Нужно прибрать комнату', completed: false},
                {id: 2, name: 'Сходить в магазин', completed: false},
                {id: 3, name: 'Элемент', descr: 'Описание элемента', completed: false},
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
        completeElem(element) {
            let elementId = element.path[1].dataset.id;
            for (let i = 0; i < this.items.length; i++ ) {
                if (elementId == this.items[i].id) {
                    this.items[i].completed = !this.items[i].completed;
                }
            }
        },
        onSubmit(newElem) {
            this.items.push(newElem);
        }
    }
})