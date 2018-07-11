<template>
  <div>
    <li class='list-item'>
      <Row type='flex' justify='center' align='middle'>
        <Col span='2'>
          <Checkbox v-model='item.status'></Checkbox>
        </Col>
        <Col span='22'>
          <p v-show='!item.isFocusInput'>{{item.text}}</p>
          <Input v-model='item.text' v-show='item.isFocusInput'
          @on-focus='updateListFocus(true, index)'
          @on-blur='updateListFocus(false, index)'>
          </Input>
        </Col>
      </Row>
    </li>
  </div>
</template>

<script>
import { ElementMixin } from 'vue-slicksort'

export default {
  name: 'list-item',
  mixins: [ElementMixin],
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
