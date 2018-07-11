<template>
  <div>
    <Input v-model='text' @on-enter='add'></Input>
    <SortableList lockAxis="y"
                  v-model="list"
                  @input='saveNewList'>
      <SortableItem v-for='(item, index) in list'
        :index='index' :key='item.id' :item='item'>
      </SortableItem>
    </SortableList>
  </div>
</template>

<script>
import SortableItem from './list-item'
import SortableList from './list.vue'

export default {
  name: 'list',
  components: {
    SortableItem,
    SortableList
  },
  data () {
    return {
      text: '',
      list: [],
      items: []
    }
  },
  methods: {
    saveNewList(newList) {
      console.log(newList)
    },
    add () {
      if (this.text) {
        this.list.splice(0, 0, {
          id: this.list.length,
          text: this.text,
          status: false,
          isFocusInput: false
        })
        this.text = ''
      }
    },
    updateListFocus (status, index) {
      this.list[index].isFocusInput = status
    },
    updateListText (text, index) {
      this.list[index].text = text
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
