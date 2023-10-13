import PropTypes from "prop-types";
import { checkCircle, checkCircleWarn } from "../../assets/icons";
import { useEffect } from "react";

export default function TodoList({ tasks, currentCategory, setCurrentTasks }) {
    const filterTask = currentCategory
        ? tasks.filter(task => task.category === currentCategory)
        : tasks;

    useEffect(()=> {
        setCurrentTasks(filterTask.length);
    })

    return (
        <div className="my-3 rounded-xl bg-gray-300 p-3">
            {
                filterTask.map(task => (
                    <div
                        key={task.text}
                        className="bg-white rounded-xl mb-3 px-2 py-3 flex gap-3"
                    >
                        <img
                            src={checkCircle}
                            alt=""
                        />
                        <p>{task.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

TodoList.prototype = {
    tasks: PropTypes.array,
    currentCategory: PropTypes.string,
    setCurrentTasks: PropTypes.func
}