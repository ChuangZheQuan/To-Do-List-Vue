<template>
  <div>
    {{ this.$store.state.db[this.index] }}
    <v-btn small color="primary" @click="isEditing = true">Edit Task</v-btn>
    <div v-if="isEditing">
      <v-text-field dense label="edit" outlined v-model="edit" />
      <v-btn small color="primary" @click="() => editTask([edit, this.index])"
        >Complete</v-btn
      >
    </div>
    &nbsp;
    <v-btn small color="primary" @click="() => deleteTask(index)"
      >Delete Task</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ToDoModel extends Vue {
  @Prop()
  index!: number;

  edit = "";
  isEditing = false;

  deleteTask(index: number): void {
    this.isEditing = false;
    this.$store.commit("deleteTask", index);
  }

  editTask(payload: { id: number; edit: string }): void {
    if (this.edit === "") {
      alert("Cannot be empty!");
    } else {
      this.$store.commit("editTask", payload);
      this.isEditing = false;
    }
  }
}
</script>

<style scoped>
.v-text-field {
  width: 200px;
}
</style>
