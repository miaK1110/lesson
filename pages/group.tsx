import React from 'react'
import Link from 'next/link'
import { Group, Button, Center } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { Layout } from '../components/Layout'

const GroupDemo = () => {
  return (
    <Layout title="Group">
      {/* growを使用するとアイテムが等幅で並ぶようになる */}
      <Group my="md" grow>
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group direction="column" my="md" position="right">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      {/* alignで、コンテンツの開始位置を設定。start=上付き、end=下付き */}
      <Group my="md" align="end">
        <Button className="h-10" color="indigo">
          1
        </Button>
        <Button className="h-20" color="teal">
          2
        </Button>
        <Button className="h-32" color="orange">
          3
        </Button>
      </Group>
      {/* Centerで中のアイテムを中央寄せにできる */}
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default GroupDemo
