import type { NextPage } from 'next'
import { useEffect } from 'react'
import { supabase } from '../utils/supabase'
import useStore from '../store'
import { Auth } from '../components/Auth'
import { DashBoard } from '../components/DashBoard'

const Home: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)
  useEffect(() => {
    // ログインユーザーのセッション情報を取得
    setSession(supabase.auth.session())
    // supabaseのサブスクリプション開始。ログイン・ログアウトの度に実行される
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])
  return <>{session ? <DashBoard /> : <Auth />}</>
}

export default Home
