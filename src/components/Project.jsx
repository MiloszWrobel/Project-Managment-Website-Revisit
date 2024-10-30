export default function Project() {
  return (
    <section className="flex-1 p-8 bg-stone-100 text-stone-700 rounded-lg shadow-md flex flex-col mt-8 w-3/4">
      <div className="flex w-3/5 mb-4 justify-end">
        <button className="px-4 py-2 mr-2 rounded-md bg-stone-100 text-stone-900">
          Cancel
        </button>
        <button className="px-4 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </div>
      <div className="space-y-4">
        <h3 className="font-bold">Title</h3>
        <input className="w-3/5 p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
        <h3 className="font-bold">Description</h3>
        <input className="w-3/5 p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
        <h3 className="font-bold">Due Date</h3>
        <input
          className="w-3/5 p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="date"
        />
      </div>
    </section>
  );
}
