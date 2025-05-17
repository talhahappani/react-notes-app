import Split from 'react-split'
import Sidebar from './components/Sidebar';
import { addDoc, deleteDoc, onSnapshot, doc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"
import React from "react";
import Editor from "./components/Editor";

function App() {

  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState("");
  const [tempNoteText, setTempNoteText] = React.useState("");

  const currentNote = notes.find(note => note.id===currentNoteId) || notes[0];

  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt); 

  React.useEffect(() => {
    if(currentNote) {
      setTempNoteText(currentNote.body);
    }
  }, [currentNote])

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
        const notesArr = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        setNotes(notesArr);
    })
    return unsubscribe
  }, [])

  React.useEffect(() => {
    if(!currentNoteId){
      setCurrentNoteId(notes[0]?.id)
    }
  }, [notes])

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(tempNoteText !== currentNote.body) {
        updateNote(tempNoteText);
      }
    }, 500);
    return () => clearTimeout(timeoutId)
  }, [tempNoteText])

  async function createNewNote() {
    const date = Date.now();
    const newNote = {
      createdAt: date,
      updatedAt: date,
      body: "# Type your markdown note's title here"
    };

    const newNoteRef = await addDoc(notesCollection, newNote);
    setCurrentNoteId(newNoteRef.id);
  }

  async function updateNote(text) {
    const date = Date.now();
    const noteRef = doc(db, "notes", currentNoteId)
    await setDoc(noteRef, {body: text, updatedAt: date }, {merge: true});
  }

  async function deleteNote(noteId) {
    const noteRef = doc(db, "notes", noteId);
    await deleteDoc(noteRef)
  }

  return (
    <main>
      {notes.length > 0 ?
          <Split
          sizes={[30, 70]}
          direction="horizontal"
          className="split"
          >
            <Sidebar 
              notes={sortedNotes}
              currentNote={currentNote}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            <Editor tempNoteText={tempNoteText} setTempNoteText={setTempNoteText} />
          </Split>
          
          : 
          <div className='no-notes'>
              <h1>You don't have any note</h1>
              <button className='first-note' onClick={createNewNote}>Create Note</button>
          </div>
        }
    </main>
    )
}

export default App
