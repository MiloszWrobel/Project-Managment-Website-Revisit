import image from "../assets/no-projects.png";

export default function NoProjectSelected({ handleClick }) {
  return (
    <section className="flex-1 p-8 bg-stone-100 text-stone-700 rounded-lg shadow-md flex items-center justify-center">
      <div className=" mt-[-45vh] text-center space-y-4">
        <img src={image} className="w-16 h-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold"> No project selected</h2>
        <p>Select a project or get started with a new one</p>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleClick}
        >
          Create a new project
        </button>
      </div>
    </section>
  );
}
