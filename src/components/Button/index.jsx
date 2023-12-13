import PropTypes from "prop-types";
import classNames from 'classnames';

export default function Button({ children, onClick, option }) {

    const containerButton = classNames(
        "bg-blue-500",
        {
            "absolute left-[108px] top-[-20px] p-2 rounded-full": option,
            "w-full py-3 rounded text-white shadow text-lg uppercase tracking-wide font-semibold": !option,
        }
    );

    return (
        <div className="mt-5">
            <button
                className={containerButton}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func,
    option: PropTypes.bool,
}