import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from '../pages/Header'
import { Quote } from '../pages/Quote'
import { ListQuotes } from '../pages/ListQuotes'

export function RamdomRouter() {
  return (
    <div className="container mx-auto pt-9 pb-6">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/list-quotes" element={<ListQuotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
