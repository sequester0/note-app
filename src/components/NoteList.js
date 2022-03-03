import React from "react";

function NoteList({ filtered }) {
  const notes = filtered();

  return (
    <div className="grid grid-cols-3 gap-2 justify-items-center">
      {notes.map((note) => (
        <div key={note.id} className="mt-4">
          <div className="mb-2 w-64 max-w-xs shadow-lg">
            <div className={`${note.color} pl-2 rounded-sm`}>
              <span className="text-sm font-semibold">{note.title}</span>
            </div>
            <div className="overflow-hidden p-2 text-sm bg-gray-200">
              <span className="whitespace-normal">{note.note}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
