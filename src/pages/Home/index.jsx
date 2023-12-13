import { useState, useEffect } from 'react';
import { TodoList, TodoListCategory, CreateTask } from '../../components';
import { categories } from '../../core/category';
import { read } from "../../services";
import { LogoSection } from '../';

export default function Home() {

  const [currentCategory, setCurrentCategory] = useState(null);

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const data = await read();
    setTasks(data.response)
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <>
        <div className='h-screen'>
          <LogoSection />

          <div className='my-6'>
            <h2 className='font-semibold text-gray-600'>
              Categories {currentCategory}
            </h2>
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
            <h2 className='font-semibold'>
              You have {tasks?.length} task for today
            </h2>
            <button
              className='text-blue-700'
              onClick={() => setCurrentCategory(null)}
            >
              Clear filter
            </button>
          </div>

          <TodoList
            tasks={tasks}
            category={currentCategory}
          />

          <CreateTask getTasks={getTasks} />
        </div>
      </>
    </>
  )
}