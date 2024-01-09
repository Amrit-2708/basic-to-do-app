import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("counter", () => {
  const todos = ref([]);
  const show=ref('all')
  const id =ref(0)
  const addTodo = (newTodo) => {
    todos.value.push({ task: newTodo.value, id: id.value++, checked: false });
  };
  const filteredTodos = computed(() => {
    if (show.value === 'all') {
        return todos.value;
    } else if (show.value === 'active') {
        return todos.value.filter((t) => !t.checked);
    } else if (show.value === 'inactive') {
        return todos.value.filter((t) => t.checked);
    }

    return null;
});
const showTodoState=(value)=>{
  // showChecked.value=!showChecked.value
  show.value=value
}
const removeTodo=(id)=>{
  todos.value=todos.value.filter((t)=>t.id!==id)
  }
  return { todos,addTodo,removeTodo,showTodoState,filteredTodos };
});

// store todos
// filter todos
// delte todos
