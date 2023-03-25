import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const loading = useSelector(state => state.todoReducer.isLoading)
  return (
    <>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>

        {loading &&
          <div className='info-backend'>
            Backend may take some time to start initially, please wait a moment.
          </div>
        }
      </footer>

    </>



  )
}

export default React.memo(Footer)