import React from 'react'
import UserInfo from '../../Component/UserInfo'
import Wether from '../../Component/Wether'
import Notes from '../../Component/notes'

function ShowCase() {
  return (
    <div>ShowCase
      <UserInfo/>
      {/* <Wether/> */}
      <Notes/>
    </div>
  )
}

export default ShowCase