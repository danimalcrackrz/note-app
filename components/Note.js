import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { notesList } from "../atoms"
import { FaTrashAlt } from "react-icons/fa"

const Note = ({ idx, title, content }) => {
  const [notes, updateNotesList] = useRecoilState(notesList)

  const deleteNote = (idx) => {
    const newNoteList = [...notes]
    newNoteList.splice(idx, 1)
    updateNotesList(newNoteList)
  }

  return (
    <form className='note'>
      <input type='text' placeholder='title' value={title} />
      <textarea type='text' placeholder='content' value={content} />
      <FaTrashAlt className='trash-icon' onClick={deleteNote} />
    </form>
  )
}

export default Note
