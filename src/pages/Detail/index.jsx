import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../services";
import { EditTask } from "../../components";

export default function Detail() {
    const { id } = useParams();

    const [task, setTask] = useState(null);

    const getTask = async () => {
        const { response } = await read(id);
        console.log("response", response);
        setTask(response);
    };

    useEffect(() => {
        getTask();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <>
                {task ? (
                    <>
                        <div className="grid gap-2">
                            <div className="grid grid-flow-col auto-cols-max gap-4">
                                <div>Tarea </div>
                                <div>:</div>
                                <div>{task.text}</div>
                            </div>
                            <div className="grid grid-flow-col auto-cols-max gap-4">
                                <label>Categoría</label>
                                <span>:</span>
                                <p>{task.category}</p>
                            </div>
                        </div>
                        <EditTask taskDetail={task} getTask={getTask} />
                    </>
                ) : (
                    <>
                        <p>La tarea no fue encontrada</p>
                    </>
                )}

            </>
        </>
    );
}