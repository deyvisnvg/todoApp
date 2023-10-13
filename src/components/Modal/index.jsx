import { Dialog, Transition } from "@headlessui/react"
import PropTypes from "prop-types"

export default function Modal({ children, open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30"/>
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

Modal.prototype = {
    children: PropTypes.element,
    open: PropTypes.bool,
    onClase: PropTypes.func
}