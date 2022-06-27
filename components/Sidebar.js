import React, { useState } from "react"
import { Spin as Hamburger } from "hamburger-react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
          <li>Create Note</li>
          <li>View Notes</li>
        </ul>
      )}
    </div>
  )
}

export default Sidebar
