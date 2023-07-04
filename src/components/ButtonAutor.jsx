import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const ButtonAutor = ({ author }) => {
  return (
    <Link
      to="/list-quotes"
      className="flex justify-between items-center ml-20 mt-[106px] text-left duration-300 hover:bg-[#333] px-6 py-10 [&>div>p]:hover:text-[#F2F2F2] [&>div>p]:text-2xl [&>div>small]:text-[#828282] [&>div>small]:text-sm"
    >
      <div>
        <p>{author}</p>
        <small>author</small>
      </div>
      <MdArrowRightAlt color="#fff" size={38} />
    </Link>
  )
}
