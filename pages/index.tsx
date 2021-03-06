import Head from 'next/head'
import { ReactElement, useState } from 'react'

import Footer from '../components/Footer'
import Toggle from '../components/Toggle'
import Input from '../components/Input'
import List from '../components/List'
import Todo from '../types/todo.type'
import useTodos from '../components/hooks/useTodos'

export default function Home(): ReactElement {
  const { addTodo } = useTodos()
  const [todo, setTodo] = useState(new Todo({
    value: '',
    completed: false
  }))

  const handleInputChange = (value: string) => {
    setTodo({
      ...todo,
      value
    })
  }

  const handleCheckboxChange = (completed: boolean) => {
    setTodo({
      ...todo,
      completed
    })
  }

  const handleSubmit = () => {
    addTodo(todo)

    setTodo(new Todo({
      value: '',
      completed: false
    }))
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Todo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex-1 lg:w-2/3 xl:w-2/5 w-full px-7">
        <div>
          <p className="text-3xl lg:text-4xl text-white font-bold tracking-widest pt-10 sm:pt-16 lg:pt-24 lg:pt-20 pb-6 lg:pb-10">
            TODO
            <Toggle />
          </p>

          <Input
            todo={todo}
            rounded
            onInputChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
            onSubmit={handleSubmit}
          />

          <List />
        </div>
      </div>

      <Footer />
    </div>
  )
}
