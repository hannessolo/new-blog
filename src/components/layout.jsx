import React from 'react'
import style from './layout.module.css'

export default ({ children }) => {
  return (<div className={style.base}>
      <div className={style.container}>
        <header>
        <h1 className={style.mainTitle}>Blog</h1>
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
