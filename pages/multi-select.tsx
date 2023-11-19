import { useState } from 'react'
import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'
import {
  Center,
  Container,
  MultiSelect,
  Text,
  RadioGroup,
  Radio,
  TransferList,
  TransferListData,
} from '@mantine/core'
import { Layout } from '../components/Layout'

// データ型はTransferListDataを使用
const initialValues: TransferListData = [
  // 左側リストのデータ
  [
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'rust', label: 'Rust' },
    { value: 'py', label: 'Python' },
    { value: 'js', label: 'JavaScript' },
    { value: 'go', label: 'Golang' },
  ],
  // 右側リストのデータ（空）
  [],
]

const MultiSelectDemo = () => {
  const [radioValue, setRadioValue] = useState('react')
  const [selectValue, setSelectValue] = useState<string[]>([])
  const [transferValue, setTransferValue] =
    useState<TransferListData>(initialValues)
  console.log(transferValue)
  return (
    <Layout title="Multi Select">
      {/* Containerは領域を確保してくれる */}
      <Container>
        <Text>🚀 What is your most favorite frontend library ?</Text>
        <Center>
          <RadioGroup
            my="lg"
            value={radioValue}
            onChange={setRadioValue}
            required
          >
            <Radio value="react" label="React" />
            <Radio value="svelte" label="Svelte" />
            <Radio value="angular" label="Angular" />
            <Radio value="vue" label="Vue" />
          </RadioGroup>
        </Center>
        <Text>🚀 What is your favorite React framework ?</Text>
        {/* dataにはユーザーが選択できる選択肢を設定 */}
        <MultiSelect
          my="lg"
          value={selectValue}
          onChange={setSelectValue}
          data={['Next.js', 'Remix', 'Gatsby.js']}
          placeholder="Select items"
          clearable
        />
        {/* TransferListを使用するとリストの要素を↔に移動させることができる*/}
        {/* 今回の場合、ガベージコレクションがある言語と、そうでない言語で分ける */}
        <TransferList
          className="text-center"
          my="lg"
          value={transferValue}
          onChange={setTransferValue}
          searchPlaceholder="Search..."
          nothingFound="..."
          titles={['w/o GC', 'w GC']}
          breakpoint="sm"
        />
      </Container>
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default MultiSelectDemo
