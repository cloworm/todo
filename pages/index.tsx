import Head from 'next/head'
import { ReactNode, useState } from 'react'

import Footer from '../components/Footer'
import Toggle from '../components/Toggle'
import Input from '../components/Input'
import List from '../components/List'
import Todo from '../types/todo.type'
import useTodos from '../components/hooks/useTodos'

export default function Home(): ReactNode {
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
        <title>ToDo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="flex-1 w-1/2">
        <div>
          <p className="text-3xl text-white font-bold tracking-widest pt-10 pb-6">
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
      </main>

      <Footer />
    </div>
  )
}
