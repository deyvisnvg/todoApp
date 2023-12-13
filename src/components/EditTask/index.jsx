import PropTypes from "prop-types";
import { useState } from "react"
import { Modal, Form, Button, Footer } from "../../components";
import { update } from "../../services";
import { categories } from '../../core/category';

export default function EditTask({ taskDetail, getTask }) {

    const [open, setOpen] = useState(false);

    const [listCategories, setListCategories] = useState(categories);

    const [values, setValues] = useState({
        id: taskDetail.id,
        text: taskDetail.text,
        select: listCategories.find(item => item.text == taskDetail.category),
        current: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = structuredClone(values);
        delete data.id;
        delete data.select;
        delete data.current;

        await update(values.id, { ...data })

        setOpen(false);
        await getTask();
    }

    return (
        <>
            <Modal open={open} onClose={() => setOpen(!open)}>
                <Form
                    optionForm={"Editar Tarea"}
                    handleSubmit={handleSubmit}
                    listCategories={listCategories}
                    setListCategories={setListCategories}
                    values={values}
                    setValues={setValues}
                />
            </Modal>

            <Button
                onClick={() => setOpen(!open)}
            >
                <div>Editar</div>
            </Button>

            <Footer />
        </>
    )
}

EditTask.prototype = {
    taskDetail: PropTypes.object,
    getTask: PropTypes.func,
}