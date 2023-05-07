import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { Icon } from "@iconify/react";
const ComboBoxInline = () => {
  const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
  ];

  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <span className="inline-block   ">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative    ">
          <div className="relative   ">
            <Combobox.Input
              className=" border-none w-[5.8rem]  font-medium  text-[#6B00F2]    text-[0.8rem]  "
              displayValue={(person: any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <Combobox.Options className="absolute  mt-1 overflow-auto  bg-white rounded-md shadow-md max-h-60    focus:outline-none">
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="cursor-default select-none relative py-1 px-4 ">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `cursor-default text-xs select-none relative py-1  px-4 ${
                      active ? "text-white bg-purple-600" : "text-gray-900 "
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={` truncate  ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3  ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        >
                          <Icon
                            icon="charm:tick"
                            fontSize={20}
                            color="red"
                            // className={` ${
                            //   active ? "text-white" : "text-teal-600"
                            // }`}
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>

      {/* <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
            <Combobox.Input
              className="w-full border-none focus:ring-0 py-1 pl-3 pr-10 text-sm leading-5 "
              displayValue={(person: any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
     
              <Icon
                icon="charm:tick"
                fontSize={20}
                className="text-gray-400"
       
              />
            </Combobox.Button>
          </div>

          <Combobox.Options className="absolute w-full  mt-1 overflow-auto text-xs bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none ">
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="cursor-default select-none relative  px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active, selected }) =>
                    `cursor-default select-none relative py-1 px-2 ${
                      active ? "text-white bg-teal-600" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={` flex items-center  w-full  ${
                            active ? "text-red-400" : "text-yellow-600"
                          }`}
                        >
                          selected
                    
                        </span>
                      ) : (
                        <span>hello</span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox> */}
    </span>
  );
};

export default ComboBoxInline;

// import { Fragment, useState } from "react";
// import { Combobox, Transition } from "@headlessui/react";
// import { Icon } from "@iconify/react";
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

// const people = [
//   { id: 1, name: "Wade Cooper" },
//   { id: 2, name: "Arlene Mccoy" },
//   { id: 3, name: "Devon Webb" },
//   { id: 4, name: "Tom Cook" },
//   { id: 5, name: "Tanya Fox" },
//   { id: 6, name: "Hellen Schmidt" },
// ];

// export default function Example() {
//   const [selected, setSelected] = useState(people[0]);
//   const [query, setQuery] = useState("");

//   const filteredPeople =
//     query === ""
//       ? people
//       : people.filter((person) =>
//           person.name
//             .toLowerCase()
//             .replace(/\s+/g, "")
//             .includes(query.toLowerCase().replace(/\s+/g, ""))
//         );

//   return (
//     <div className="w-72 fixed top-16">
//       <Combobox value={selected} onChange={setSelected}>
//         <div className="relative mt-1">
//           <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
//             <Combobox.Input
//               className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
//               displayValue={(person) => person.name}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <SelectorIcon
//                 className="w-5 h-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </Combobox.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery("")}
//           >
//             <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {filteredPeople.length === 0 && query !== "" ? (
//                 <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
//                   Nothing found.
//                 </div>
//               ) : (
//                 filteredPeople.map((person) => (
//                   <Combobox.Option
//                     key={person.id}
//                     className={({ active }) =>
//                       `cursor-default select-none relative py-2 pl-10 pr-4 ${
//                         active ? "text-white bg-teal-600" : "text-gray-900"
//                       }`
//                     }
//                     value={person}
//                   >
//                     {({ selected, active }) => (
//                       <>
//                         <span
//                           className={`block truncate ${
//                             selected ? "font-medium" : "font-normal"
//                           }`}
//                         >
//                           {person.name}
//                         </span>
//                         {selected ? (
//                           <span
//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                               active ? "text-white" : "text-teal-600"
//                             }`}
//                           >
//                             <Icon icon="circle" />
//                           </span>
//                         ) : null}
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   );
// }
