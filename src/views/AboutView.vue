<script setup>
import { useTodoStore } from '@/stores/todo';
const store=useTodoStore()
</script>


<template>

  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <template v-for="todo in store.filteredTodos" :key="todo.id">
        <div class="todoItem">
            <input type="checkbox" v-model="todo.checked" />
            <li style='list-style:none' :class="{checkedStyle:todo.checked}">{{ todo.task }}</li>
            <li @click="()=>store.removeTodo(todo.id)" >X</li>
        </div>

        <!-- {{ console.log(todos) }} -->
    </template>
</template>

<style scoped>


.about {
    min-height: 100vh;
    align-items: left;
}

.todoItem {
    display:flex;
    justify-content: space-around;
    
}

.checkedStyle{
    text-decoration: line-through;
}

</style>
