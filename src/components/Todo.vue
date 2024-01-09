<script setup>
import { ref ,computed} from 'vue';
import {useTodoStore} from '../stores/todo'
const newTodo = ref("")
const store=useTodoStore()
console.log("todo",store.todos)
const addTodo=()=>{
    if(newTodo.value.length>0)
    {
        store.addTodo(newTodo)
        newTodo.value=''
    }


    
}



</script>
<template>
    <h2>welcome to your todo list</h2>
    <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodo" />
        <button type="submit"> add todo</button>
    </form>
    <h3>all todos</h3>
    <template v-for="todo in store.filteredTodos" :key="todo.id">
        <div class="todoItem">
            <input type="checkbox" v-model="todo.checked" />
            <li style='list-style: none;' :class="{checkedStyle:todo.checked}">{{ todo.task }}</li>
            <li @click="()=>store.removeTodo(todo.id)" >X</li>
        </div>

        <!-- {{ console.log(todos) }} -->
    </template>
    <button @click="()=>store.showTodoState('active')">show active</button>
    <button @click="()=>store.showTodoState('inactive')">show inactive</button>
    <button @click="()=>store.showTodoState('all')">show all</button>
</template>



<style scoped>
.todoItem {
    display: flex;
    justify-content: space-around;
    
}
.checkedStyle{
    text-decoration: line-through;
}
</style>