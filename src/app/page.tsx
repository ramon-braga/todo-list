"use client"

import { todoList } from "@/types/todoList";
import { useState } from "react";

function Page() {

  const [ inputValue, setInputValue ] = useState('');

  const [ list, setList ] = useState<todoList[]>([]);

  function handleAddButton() {
    if (inputValue.trim() === '') return;

    setList([...list, { label: inputValue, check: false }]);
    setInputValue('');
  }

  function handleDeleteButton(index: number) {
    setList(list.filter((item, key) => key !== index));
  }

  function toggleCheckBox(index: number) {
    const newList = [...list];
    newList[index].check = !newList[index].check;
    
    setList(newList);
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-3">
      
      <div className="bg-black border border-white rounded-md p-9">
        <h1 className="text-4xl mb-6 text-center font-serif">Todo List</h1>
        <input 
          type="text"
          className="bg-transparent p-2 outline-none border-b border-white text-white rounded-sm"
          placeholder="What to do?"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          className="ml-3 bg-red-500 py-2 px-5 rounded-sm active:bg-red-400"
          onClick={handleAddButton}>
            Add
          </button>
        
        <ul className="mt-9 flex flex-col gap-4">

        {list.map((task, index) =>
          <li key={index} className="rounded-sm flex items-center justify-between">
            <input type="checkbox" checked={task.check} onClick={() => toggleCheckBox(index)}  className="w-6 h-6" />
            <p className="inline pl-2">{task.label}</p><button className="bg-transparent border border-red-500 py-1 px-3 rounded-sm active:bg-red-400" onClick={() => handleDeleteButton(index)}>Delete</button>
          </li>
        )}

        </ul>

      </div>

    </div>
  );
}

export default Page;