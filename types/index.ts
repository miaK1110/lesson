export type Form = {
  email: string
  password: string
  age: number
}
export type Todo = {
  id: number
  created_at: string
  title: string
}
export type AuthForm = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  termsOfService: boolean
}
export type Post = {
  id: number
  created_at: string
  title: string
  content: string
  post_url: string
  status: string
}
