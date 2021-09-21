import React from 'react'
import PropTypes from 'prop-types'

function Page({ children }) {
  return (
    <div>
      <h1>I am the page component</h1>
      {children}
    </div>
  )
}

export default Page

Page.propTypes = {
  children: PropTypes.any,
}
