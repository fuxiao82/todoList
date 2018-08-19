<template>
  <div>
    <Row>
      <Col :xs='1' :md='6'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </Col>
      <Col :xs='23' :md='18'>
        <List></List>
        <Button @click="test = true">test</Button>
        <Button @click="testSplice = true">testSplice</Button>
        <Table border :columns="columns7" :data="data6"></Table>
      </Col>
    </Row>
    <div @click='aAdd'>test store add</div>
    <div @click='minus'>test store minus</div>
  </div>
</template>

<script>
import List from './lists.vue'
import {mapActions, mapState} from 'Vuex'
export default {
  name: 'index',
  components: {
    List
  },
  data () {
    return {
      testSplice: false,
      test: false,
      data6: [{
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park'
      },
      {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park'
      },
      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park'
      },
      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park'
      }
      ]
    }
  },
  computed: {
    ...mapState('a', {
      'aA': 'a'
    }),
    columns7 () {
      let arr = [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ]
      if(this.testSplice) {
        arr.splice(0, 1)
      }
      if(this.test) {
        arr.push({
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        })
      }
      return arr
    }
  },
  methods: {
    ...mapActions('a', {
      'add2': 'add2'
    })
  }
}
</script>
