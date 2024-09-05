import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'



const createBlogBtn = () => {
  return (
    <div>
        <button>
            <FontAwesomeIcon icon={faSquarePlus} />
        </button>
    </div>
  )
}

export default createBlogBtn