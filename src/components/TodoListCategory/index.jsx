import PropTypes from "prop-types";
import classNames from 'classnames';

export default function TodoListCategory({
    icon,
    text,
    setCurrentCategory,
    currentCategory
}) {

    const containerImg = classNames(
        "w-[51px] h-[51px] p-2 shadow rounded-md bg-white",
        {
            "border border-blue-500 shadow-blue-500": text === currentCategory,
        }
    );

    return (
        <button
            className={`grid place-items-center cursor-pointer ${text}`}
            onClick={() => setCurrentCategory(text)}
        >
            <img
                src={icon}
                alt=""
                className={containerImg}
            />
            <p className="mt-2 text-gray-500">{text}</p>
        </button>
    )
}

TodoListCategory.prototype = {
    icon: PropTypes.string,
    text: PropTypes.string,
    setCurrentCategory: PropTypes.func,
    currentCategory: PropTypes.string
}