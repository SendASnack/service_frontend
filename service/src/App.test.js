// app.test.js
import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'

import '@testing-library/jest-dom'

import NotFoundPage from './Views/NotFoundPage/NotFoundPage'
import Home from './Views/Home/Home'

test('landing on a bad page', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
      <Router location={history.location} navigator={history}>
        <NotFoundPage />
      </Router>,
    )
  
    expect(screen.getByText(/Page not found!/)).toBeInTheDocument()
});

test('landing on Home page', () => {
    const history = createMemoryHistory()
    history.push('/home')
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>,
    )
});