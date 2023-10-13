import PropTypes from "prop-types";

export default function Header({ title, text }) {
    return (
        <>
            <nav className="bg-green-500 md:bg-red-500 lg:bg-purple-500 xl:bg-yellow-500 2xl:bg-orange-500">
                <ul className="flex border gap-3">
                    <li className="cursor-pointer hover:text-white">Home</li>
                    <li className="cursor-pointer hover:text-purple-400">About</li>
                    <li className="cursor-pointer hover:text-yellow-200">Contact</li>
                    <li className="cursor-pointer hover:text-yellow-200">Contact</li>
                </ul>
            </nav>
            <h2>{title}</h2>
            <p>{text}</p>
        </>
    )
}

Header.prototype = {
    title: PropTypes.string,
    text: PropTypes.string
}