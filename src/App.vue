<template>
  <div id="app">
    <div id="newItem" class="title">添加新项</div>
    <div id="addDiv" class="addTask">
      <input type="text" id="txtTitle"/>
      <i class="icon-add"></i>
    </div>
    <div id="taskItemList" class="taskItemList">
      <div :class="['taskItem',{done:task.status === 'off'}]" v-for="task in taskList" @click="changeStatus(task)">
        <i class="icon iconfont icon-checkboxunchecked"></i><span class="taskTitle">{{task.des}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      taskList: [
        {
          status: 'off',
          des: 'thing1'
        },
        {
          status: 'on',
          des: 'thing2'
        },
        {
          status: 'on',
          des: 'thing3'
        }
      ]
    }
  },
  methods: {
    changeStatus(obj) {
      obj.status = obj.status === 'off' ? 'on' : 'off';
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #000;
  overflow: hidden;
  font-size: 12px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
}

.hidde {
  display: none;
}

.show {
  display: block;
}

.addTask {
  display: flex;
  position: relative;
  margin: 20px 20px;
  align-items: center;

  > input {
    width: 100%;
    min-width: 220px;
    height: 30px;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 0;
  }

  .icon-add {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB8SURBVDhP7ZLBCYAwEATTUpIe9KNgExYrWIIiCPYg4sM5uachcvrMwBKWXOYRzuXw3rcxxk6rHUQrokWrHSSbRKudIsrzWhRCqBgcU+H+YAVOMqfCTC+ihkxPAxJkO2dSJG9vUQ6GB2Tf/6iI8vwqIqtWO+xILbumNYFzF7qXXjWStUohAAAAAElFTkSuQmCC");
    position: absolute;
    right: 8px;
    width: 18px;
    height: 18px;
  }
}

label.off,
label.on {
  width: 18px;
  display: inline-block;
  height: 18px;
  margin: 0 8px 0 0;
}

label.on {
  /*background: url(assets/on.png) no-repeat 0px 0px;*/
}

label.off {
  background: url(assets/off.png) no-repeat 1px 0px;
}

.taskItemList {
  margin: 20px 0 0 0;


  .taskItem {
    cursor: pointer;
    display: flex;
    align-items: center;
    min-width: 200px;
    margin: 10px 5px;
    padding: 10px 18px;
    border-radius: 2px;

    &:hover {
      background: #f3f5f7;
    }

    &.done {
      text-decoration: line-through;
      color: lightgray;
    }
  }
}

</style>
