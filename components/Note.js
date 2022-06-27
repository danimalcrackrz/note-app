import React from "react"

const Note = () => {
  return (
    <form className='note'>
      <input type='text' placeholder='title' />
      <textarea type='text' placeholder='content' />
    </form>
  )
}

export default Note
