<template>
  <div>
    <Input v-model='text' @on-enter='add'></Input>
    <ul>
      <li v-for='item in list' :key='item.id'>
        <Row type='flex' justify='center' align='middle'>
          <Col span='2'>
            <Checkbox v-model='item.status'></Checkbox>
          </Col>
          <Col span='22'>
            <Input v-model='item.text'></Input>
          </Col>
        </Row>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'list',
  data () {
    return {
      text: '',
      list: [],
      columns: [
        {
          title: '',
          key: 'id',
          width: 50,
          render: (h, params) => {
            return h('div', [
              h('Checkbox', {
                props: {
                  value: params.row.status
                },
                on: {
                  'on-change': (val) => {
                    this.$set(this.list[params.index], 'status', val)
                  }
                }
              })
            ])
          }
        },
        {
          title: '',
          key: 'text',
          render: (h, params) => {
            let value = params.row.text
            if (params.row.isFocusInput) {
              return h('Input', {
                props: {
                  value: params.row.text
                },
                on: {
                  'on-blur': () => {
                    this.$set(this.list[params.index], 'text', value)
                    this.$set(this.list[params.index], 'isFocusInput', false)
                  },
                  'on-change': (event) => {
                    value = event.target.value
                  },
                  'on-enter': () => {
                    this.$set(this.list[params.index], 'text', value)
                    this.$set(this.list[params.index], 'isFocusInput', false)
                  }
                }
              })
            } else {
              return h('div', {
                on: {
                  'click': () => {
                    this.$set(this.list[params.index], 'isFocusInput', true)
                  }
                }
              }, [
                h('span', {
                  domProps: {
                    innerHTML: params.row.text
                  }
                })
              ])
            }
          }
        }
      ]
    }
  },
  methods: {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
