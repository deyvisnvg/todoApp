import { Select, Button } from "../../components";

export default function Form({
    optionForm,
    handleSubmit,
    listCategories,
    setListCategories,
    values,
    setValues
}) {

    const handleChange = (e) => {
        if (e.target) {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });

            return;
        }

        setValues({
            ...values,
            select: e,
            current: e,
        });

        const items = listCategories.filter((category) => category.text !== e.text);
        setListCategories([{ ...e }, ...items]);
    };

    const handleMouse = (category) => {
        setValues({
            ...values,
            current: category,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <input
                        type="text"
                        placeholder="Escribe tu tarea"
                        className="w-full border px-2 py-3 rounded outline-none"
                        name="text"
                        value={values.text}
                        onChange={handleChange}
                        required
                    />
                    <div className="mt-5">
                        <Select
                            value={values}
                            onChange={handleChange}
                            onMouseEnter={handleMouse}
                            listItems={listCategories}
                        />
                    </div>
                    <Button>
                        <div>{optionForm}</div>
                    </Button>
                </div>
            </form>
        </>
    )
}