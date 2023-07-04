import React from 'react'

export const NewQuote = ({ content }) => {
  return (
    <article className="max-w-[614px] border-l-8 border-[#F7DF94] pl-20 [&>p]:text-4xl [&>p]:font-medium">
      <p>"{content}"</p>
    </article>
  )
}
