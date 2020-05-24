import React from 'react'

export default ({ children }) => {
  return (<div>
    <header>
      <h1>Blog</h1>
    </header>

    <section>
      { children }
    </section>

    <footer>
      By Hannes Hertach
    </footer>
  </div>)
}
