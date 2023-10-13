import { Dialog, Transition } from "@headlessui/react"
import PropTypes from "prop-types"
import { Fragment } from "react"

export default function Modal({ children, open, onClose }) {
    return (
        <Transition show={open} as={Fragment}>
            <Dialog open={open} onClose={onClose} className="relative z-50">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-400"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
                        {children}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    )
}

Modal.prototype = {
    children: PropTypes.element,
    open: PropTypes.bool,
    onClose: PropTypes.func
}