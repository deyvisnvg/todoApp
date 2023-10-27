import { useState } from "react";
import { Modal, Form, Button, Footer } from "../../components";
import { categories } from '../../core/category';
import { addTaks } from '../../assets/icons';
import PropTypes from "prop-types";
import { create } from "../../services";

export default function CreateTask({ getTasks }) {

    const [open, setOpen] = useState(false);

    const [listCategories, setListCategories] = useState(categories);

    const [values, setValues] = useState({
        text: "",
        select: listCategories[0],
        current: null,
        status: "created",
        doneAt: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = structuredClone(values);
        const category = data.select.text;

        delete data.select;
        delete data.current;

        await create({
            ...data,
            category,
        });

        setValues({
            text: "",
            select: listCategories[0],
            current: null,
            status: "created",
            doneAt: null,
        });
        setOpen(false);
        await getTasks();
    };

    return (
        <>
            <Modal open={open} onClose={() => setOpen(!open)}>
                <Form
                    optionForm={"Crear tarea"}
                    handleSubmit={handleSubmit}
                    listCategories={listCategories}
                    setListCategories={setListCategories}
                    values={values}
                    setValues={setValues}
                />
            </Modal>

            <Footer>
                <Button
                    option={true}
                    onClick={() => setOpen(!open)}
                >
                    <img src={addTaks} alt="image agregar" className='w-8' />
                </Button>
            </Footer>
        </>
    )
}

CreateTask.propTypes = {
    getTasks: PropTypes.func,
};