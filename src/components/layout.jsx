import React from 'react'
import style from './layout.module.css'
import { Link } from 'gatsby'

export default ({ children }) => {
  return (<div className={style.base}>
      <div className={style.container}>
        <header>
          <Link to="/" className={style.mainTitle}>
            <h1>Blog</h1>
          </Link>
      </header>

      <section>
        { children }
      </section>

      <footer className={style.footer}>
        By Hannes Hertach
      </footer>
      </div>
  </div>)
}
