import { useState } from 'react';
import { TodoList, TodoListCategory, Modal } from './components';
import { categories } from './core/category';
import { tasks } from './mock/tasks';
import { book_title, arrow, home, addTaks, brand } from './assets/icons'


export default function App() {

  const [currentCategory, setCurrentCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentTasks, setCurrentTasks] = useState(0);

  return (
    <>
      <div className='p-6 h-screen'>
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
        
        <div className='flex justify-center'>
          <div className='fixed bottom-[-30px] bg-bottonAdd shadow-gray-800 shadow-xl w-64 h-32 rounded-t-full'>
            <button
              onClick={() => setOpen(!open)}
              className='absolute left-[108px] top-[-20px] bg-blue-500 p-2 rounded-full'
              title='Agregar'
            >
              <img src={addTaks} alt="image agregar" className='w-8'/>
            </button>
            <div className='flex absolute top-12 left-16 gap-2'>
              <img src={brand} alt="icon" />
              <p className='text-lg'>Deyvisnvg</p>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}