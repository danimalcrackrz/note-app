import React, { useState } from "react"
import Note from "./Note"
import { useRecoilValue } from "recoil"
import { notesList } from "../atoms"

const Drawer = () => {
  const notes = useRecoilValue(notesList)
  return (
    <div className='drawer'>
      {notes.map((note, index) => (
        <Note key={index} item={note} />
      ))}
    </div>
  )
}

export default Drawer
