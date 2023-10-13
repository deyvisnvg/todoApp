import { useState } from 'react';
import { TodoList, TodoListCategory, Modal } from './components';
import { categories } from './core/category';
import { tasks } from './mock/tasks';


export default function App() {

  const [currentCategory, setCurrentCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentTasks, setCurrentTasks] = useState(0);

  return (
    <>
      <div className='p-6'>
        <h1 className='text-2xl'>Manage your time well</h1>
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