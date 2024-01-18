import React from 'react'
import './account.css'
import SavedShow from '../components/savedShow/SavedShow'
const Account = () => {
  return (
    <div className='account'>
      <div className='inner'>
        <h2 >My Shows</h2>
      </div>
      <div className='saved-div'>
        <h5 className='text-secondary'>My Shows</h5>
        <SavedShow/>
      </div>
    </div>
  )
}

export default Account