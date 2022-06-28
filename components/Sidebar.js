import React, { useState } from "react"
import { Spin as Hamburger } from "hamburger-react"
import { useSetRecoilState } from "recoil"
import { notesList } from "../atoms"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const updateNotesList = useSetRecoilState(notesList)

  const addNote = () => {
    updateNotesList((prevList) => [
      ...prevList,
      {
        title: "",
        content: "",
      },
    ])
  }

  return (
    <div className={isOpen ? "sidebar-active" : "sidebar"}>
      <Hamburger
        size={25}
        toggled={isOpen}
        toggle={setIsOpen}
        rounded
        onClick={() => setIsOpen(!isOpen)}
        color='white'
      />
      {isOpen && (
        <ul className='sidebar-menu'>
          <li onClick={addNote}>Create Note</li>
        </ul>
      )}
    </div>
  )
}

export default Sidebar
