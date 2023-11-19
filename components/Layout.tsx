import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title = 'Mantine' }) => {
  return (
    // flex + min-h-screenでwindow縦幅いっぱいにコンテンツを表示
    <div className="flex min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      {/* flex_colでflexの主軸を縦方向に、flex-1で縦方向に表示するコンテンツ数を1つに指定 */}
      <main className="flex flex-1 flex-col justify-center p-4">
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
