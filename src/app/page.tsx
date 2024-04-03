"run client"

function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-3">
      
      <div className="bg-blue-950 rounded-md p-3">
        <h1 className="text-3xl mb-3 text-center">Todo List</h1>
        <input 
          type="text"
          className="bg-transparent p-2 outline-none border-b border-white text-white rounded-sm"
          placeholder="What to do?"
        />
        <button className="ml-3 bg-teal-500 py-2 px-5 rounded-sm active:bg-teal-400">Add</button>
        <ul className="mt-3 flex flex-col gap-3">
          <li className="rounded-sm flex items-center justify-between">
            <p className="inline pl-2">Task 1</p><button className="bg-pink-500 py-1 px-3 rounded-sm active:bg-pink-400">Delete</button>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Page;