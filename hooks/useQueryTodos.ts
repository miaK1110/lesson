import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { delay } from '../utils/delay'
import { Todo } from '../types'

export const useQueryTodos = () => {
  const getTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: true })
    await delay(2000)
    if (error) {
      throw new Error(error.message)
    }
    console.log(data)
    return data
  }

  return useQuery<Todo[]>({
    // react-queryは、DBから取得したデータをクライアントサイドにキャッシュするので、特定する為のkeyを設定
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}
