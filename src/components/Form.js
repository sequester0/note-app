import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import NoteList from "./NoteList";

function Form() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({ key: "", value: "bg-blue-500" });
  const [note, setNote] = useState("");
  const notes = useSelector((state) => state.notes.items);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = () => {
    const title = "Note " + (notes.length + 1);
    dispatch(addNote(title, selected.value, note));
    setNote("");
  };

  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const filteredNotes = () => {
    return notes.filter((value) => {
      return value.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  return (
    <div className="grid place-content-center mt-2 w-screen">
      <div className="flex justify-center mb-2">
        <input
          className="p-2 pl-6 mt-2 rounded-full border border-gray-500"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <form onSubmit={handleSubmit} className="">
        <textarea
          placeholder="Enter your note here..."
          className="p-6 w-full h-full border-none outline-none resize-none"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyPress={handleUserKeyPress}
        />
      </form>
      <div className="flex justify-between mt-2">
        <section className="">
          {[
            "bg-pink-500",
            "bg-purple-500",
            "bg-yellow-500",
            "bg-blue-500",
            "bg-green-500",
          ].map((letter, key) => (
            <button
              className={`${letter} w-5 h-5 rounded-full mr-1 ${
                key === selected.key ? "selected" : ""
              }`}
              key={key}
              onClick={() => setSelected({ key, value: letter })}
            >
              {key === selected.key ? (
                <img
                  height={10}
                  width={10}
                  className="mx-auto"
                  src="https://www.svgrepo.com/show/43432/tick.svg"
                  alt=""
                />
              ) : null}
            </button>
          ))}
        </section>
        <button
          type="submit"
          className="w-20 h-6 text-gray-300 bg-slate-700 rounded-full"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <NoteList filtered={filteredNotes} />
    </div>
  );
}

export default Form;
