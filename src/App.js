import React from 'react'
import Addusers from './components/Users/Addusers'
import UserList from './components/Users/UserList'

const App = () => {

    const [userLiat, setUserList] = React.useState([])

    const onAddUser = (userN, userA) => {
        setUserList((previousData) => {  
            return [...previousData, {name:userN, age:userA, id:Math.random().toString()}]  
        })
    }
  return (
      <>
          <Addusers onAddUser={onAddUser} />
          <UserList users={userLiat} />
      </>
  )
}

export default App