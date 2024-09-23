import React from 'react'

const Category = ({name}) => {
  return (
    <>
      <span className="px-10 my-5 flex justify-center items-center">
        <p className="mr-3 text-2xl font-semibold">{name}</p>
        <hr className="flex-grow border-t border-black" />
      </span>
    </>
  )
}

export default Category