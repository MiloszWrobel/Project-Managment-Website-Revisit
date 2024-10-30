export default function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-3xl mt-8">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className="w-auto text-left px-4 py-2 rounded-lg my-1 bg-stone-800 hover:text-stone-200 hover:bg-stone-600">
          + Add Project
        </button>
      </div>
    </aside>
  );
}
