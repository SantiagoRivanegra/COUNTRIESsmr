import React from 'react'
import { Link } from 'react-router-dom'

import s from './ActivityDetail.module.css'

function ActivityDetail() {

  return(
    <div className={s.container}>
      <Link to='/activities'>
        <button>GO to activities
        </button>
      </Link>
    </div> 
  )

}

export default ActivityDetail