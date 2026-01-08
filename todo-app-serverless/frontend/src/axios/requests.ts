import axios from 'axios'
import { Todo, TodoForm } from '../interfaces/todoInterface'
import { apiURL } from '../config/apiconfig'

const api = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
  },
})

export const getAllTodos = async (): Promise<Todo[]> => {
  const response = await api.get('')
  // const todos = response.data.todos
  const todos = response.data.data
  return todos.sort((a: Todo, b: Todo) => (a.todoId > b.todoId ? 1 : -1))
}

export const getTodoById = async (id: number): Promise<Todo> => {
  const response = await api.get(`/${id}`)
  return response.data.todo
}

export const createTodo = async (todo: TodoForm): Promise<Todo> => {
  const response = await api.post('', todo)
  return response.data
}

export const updateTodo = async (id: string, todo: TodoForm): Promise<TodoForm> => {
  const response = await api.put(`/${id}`, todo)
  return response.data.data
}

export const deleteTodo = async (id: string): Promise<void> => {
  await api.delete(`/${id}`)
}

export const getAll = async (): Promise<Todo[]> => {
  const dataList = await api.get('')
  const data: Todo[] = dataList.data.todos
  return data
}
