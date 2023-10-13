import { useState } from 'react';
import { TodoList, TodoListCategory, Modal } from './components';
import { categories } from './core/category';
import { tasks } from './mock/tasks';
import { book_title, arrow, home } from './assets/icons'


export default function App() {

  const [currentCategory, setCurrentCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentTasks, setCurrentTasks] = useState(0);

  return (
    <>
      <div className='p-6'>
        <div className='mb-10 text-xs'>
          <img src={home} alt="" className='w-7 text-blue-700'/>
        </div>
        <div className='flex justify-evenly items-center px-8 py-4 bg-blue-400 rounded-xl h-36'>
          <h1 className='text-3xl text-white'>Manage your time well</h1>
          <img src={arrow} alt="" className='w-20' />
          <img src={book_title} alt="" className='w-20' />
        </div>
        <div className='my-6'>
          <h2 className='font-semibold text-gray-600'>Categories {currentCategory}</h2>

          <div className='flex mt-3 justify-between'>
            {categories.map(category => (
              <TodoListCategory
                key={category.text}
                icon={category.icon}
                text={category.text}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
              />
            ))}
          </div>
        </div>

        <div className='flex justify-between'>
          <h2 className='font-semibold'>You have {currentTasks} task for today</h2>
          <button className='text-blue-700' onClick={() => setCurrentCategory(null)}>Clear filter</button>
        </div>

        <TodoList
          tasks={tasks}
          currentCategory={currentCategory}
          setCurrentTasks={setCurrentTasks}
        />

        <Modal open={open} onClose={() => setOpen(!open)}>
          <h1>Es un Modal</h1>
        </Modal>

        <button
          onClick={() => setOpen(!open)}
          className='fixed bottom-10 right-10 bg-blue-500 p-2 rounded-full w-12 h-12'
        >
          +
        </button>
      </div >
    </>
  )
}