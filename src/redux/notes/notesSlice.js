import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "Test",
        color: "bg-blue-500",
        note: "This is a note",
      },
      {
        id: nanoid(),
        title: "Random",
        color: "bg-yellow-500",
        note: "This is a note 2",
      },
      {
        id: nanoid(),
        title: "Asdasdasd",
        color: "bg-green-500",
        note: "This is a note 3",
      },
    ],
    color: null,
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (title, color, note) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            color: color,
            note: note,
          },
        };
      },
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
