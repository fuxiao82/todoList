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
      </Col>
    </Row>
  </div>
</template>

<script>
import List from './lists.vue'
export default {
  name: 'index',
  components: {
    List
  }
}
</script>
