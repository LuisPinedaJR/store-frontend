import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

function Page({ children }) {
  return (
    <div>
      <Header />
      <h1>I am the page component</h1>
      {children}
    </div>
  )
}

export default Page

Page.propTypes = {
  children: PropTypes.any,
}
