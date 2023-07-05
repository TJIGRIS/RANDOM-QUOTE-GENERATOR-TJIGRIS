import React from 'react'
import { useQuoteContext } from '../context/QuoteProvider'

import { MdAutorenew } from 'react-icons/md'
import { BsArrowLeftSquare } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const { getQuotesRandom } = useQuoteContext()
  const { pathname } = useLocation()

  const handleQuotesRandom = () => {
    getQuotesRandom()
  }

  return (
    <header className="flex flex-row-reverse mb-[48px] gap-10 text-[#4F4F4F]">
      <button
        onClick={handleQuotesRandom}
        className="flex items-center gap-[7px] text-lg font-medium hover:bg-black p-2 hover:text-white duration-300"
      >
        <p>random</p>
        <MdAutorenew size={24} />
      </button>

      {pathname === '/list-quotes' && (
        <Link
          to="/quote"
          className="flex items-center gap-2 hover:bg-black p-2 hover:text-white duration-300"
        >
          <BsArrowLeftSquare size={24} />
          <p>to back</p>
        </Link>
      )}
    </header>
  )
}
