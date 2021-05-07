<template>
  <div>
    <ol>
      <li
        class="list-tasks"
        v-for="(task, index) in this.$store.state.db"
        :key="index"
      >
        <ToDoModel :index="index"></ToDoModel>
      </li>
    </ol>
    <v-btn
      small
      color="primary"
      v-if="!isAdding"
      @click="
        isAdding = !isAdding;
        newTask = '';
      "
    >
      Add Task
    </v-btn>
    <div v-else>
      <v-text-field dense label="add" outlined v-model="newTask" />
      <v-btn small color="primary" @click="() => addTasks(newTask)"
        >Complete</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ToDoModel from "@/components/ToDoModel.vue";

@Component({
  components: {
    ToDoModel,
  },
})
export default class Main extends Vue {
  tasks: Array<string> = [];
  isAdding = false;
  newTask = "";

  addTasks(taskToAdd: string) {
    if (taskToAdd === "") {
      alert("Cannot be empty!");
    } else {
      this.isAdding = false;
      this.$store.commit("addTask", taskToAdd);
    }
  }
}
</script>

<style scoped>
.v-text-field {
  width: 200px;
}
</style>
