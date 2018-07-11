<template>
  <ul class='list'>
    <slot />
  </ul>
</template>

<script>
import { ContainerMixin } from 'vue-slicksort'

export default {
  name: 'list-ul',
  mixins: [ContainerMixin]
}
</script>
