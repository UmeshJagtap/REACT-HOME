import React from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
// import { data } from './data';
import Split from 'react-split';
import { nanoid } from 'nanoid';

/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

/**
 * Challenge:
 * 1. Every time the `notes` array changes, save it
 *    in localStorage. You'll need to use JSON.stringify()
 *    to turn the array into a string to save in localStorage.
 * 2. When the app first loads, initialize the notes state
 *    with the notes saved in localStorage. You'll need to
 *    use JSON.parse() to turn the stringified array back
 *    into a real JS array.
 */

/**
 * Challenge: When the user edits a note, reposition
 * it in the list of notes to the top of the list
 */

/**
 * Challenge: complete and implement the deleteNote function
 *
 * Hints:
 * 1. What array method can be used to return a new
 *    array that has filtered out an item based
 *    on a condition?
 * 2. Notice the parameters being based to the function
 *    and think about how both of those parameters
 *    can be passed in during the onClick event handler
 */

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem('notes')) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ''
  );
  // const [state, setState] = React.useState(() =>
  //   console.log('State initialization')
  // );

  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    // console.log(JSON.stringify(notes[0].body))
    // console.log(notes[0].body.split('/n')[0]);
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    // Try to rearrange the most recently-modified note to be at the top
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  // Detailed explanation !!
  // function updateNote(text) {
  //   // Try to rearrange the most recently-modified
  //   // note to be at the top
  //   setNotes((oldNotes) => {
  //     // Create a new empty array
  //     // Loop over the original array
  //     //   if the id matches
  //     //     put the updated note at the
  //     //     beginning of the new array
  //     //   else
  //     //     push the old note to the end
  //     //     of the new array
  //     // return the new array
  //     const newArray = [];
  //     for (let i = 0; i < oldNotes.length; i++) {
  //       const oldNote = oldNotes[i];
  //       if (oldNote.id === currentNoteId) {
  //         newArray.unshift({ ...oldNote, body: text });
  //       } else {
  //         newArray.push(oldNote);
  //       }
  //     }
  //     // for (let i = 0; i < oldNotes.length; i++) {
  //     //   if (oldNotes[i].id === currentNoteId) {
  //     //     newArray.unshift({ ...oldNotes[i], body: text });
  //     //   } else {
  //     //     newArray.push(oldNotes[i]);
  //     //   }
  //     // }
  //     return newArray;
  //   });
  //   // This does not rearrange the notes
  //   // setNotes((oldNotes) =>
  //   //   oldNotes.map((oldNote) => {
  //   //     return oldNote.id === currentNoteId
  //   //       ? { ...oldNote, body: text }
  //   //       : oldNote;
  //   //   })
  //   // );
  // }

  function deleteNote(event, noteId) {
    event.stopPropagation(); // It will stop propagating event to it's parent div,...i.e. delete/trash icon is progtng to Note element
    // Your code here
    // console.log('deleted note', noteId);
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }
  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
