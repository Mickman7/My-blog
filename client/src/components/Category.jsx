import React from 'react'

const Category = ({name}) => {
  return (
    <>
      <span className="px-10 my-5 flex items-center">
        <p className="mr-3">{name}</p>
        <hr className="flex-grow border-t border-black" />
      </span>
    </>
  )
}

export default Category