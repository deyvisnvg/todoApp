/* eslint-disable react/prop-types */
import { Listbox } from "@headlessui/react";

export default function Select({ value, onChange, onMouseEnter, listItems }) {
  return (
    <>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="w-full flex gap-2 py-3 px-2 rounded border">
            <img src={value.select.icon} /> {value.select.text}
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 w-full bg-white mt-1 rounded shadow">
            {listItems.map((item) => (
              <Listbox.Option
                key={item.text}
                value={item}
                onMouseEnter={() => onMouseEnter(item)}
                className={`${
                  value.current?.text === item.text
                    ? "bg-blue-200 text-white"
                    : "bg-white"
                } py-3 flex gap-2 items-center cursor-pointer px-2 first:rounded-t last:rounded-b`}
              >
                <img src={item.icon} /> {item.text}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </>
  );
}