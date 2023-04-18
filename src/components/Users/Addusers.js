import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import styles from  "./AddUser.module.css"
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'
import Wrapper from '../Helpers/Wrapper'

//first i use state then change it to use ref to read the input

const Addusers = (props) => {
 
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    // const [enterUserName, setEnterUserName] = useState('')
    // const [enterAge, setEnterAge] = useState('')
    const [error, setError] = useState()

    // const userNameChangeHanler = (event) => {
    //     setEnterUserName(event.target.value)
    // }
    // const ageChangeHanler = (event) => {
    //     setEnterAge(event.target.value)
    // }

    const addUserHandler = (event) => {
        event.preventDefault()
        console.log("you say wetin", nameInputRef)

        const userName = nameInputRef.current.value
        const userAge = ageInputRef.current.value

        if (userName.trim().length === 0 || userAge.trim().length === 0  )
        {
            setError({
                title: "invalid input",
                message:"Input filed can't be empty"  
            })
            return
        }
        // by adding a plus character it converted it to a number
        if (+userAge < 1 )
        {
             setError({
                title: "invalid age",
                message:"please enter a valid age(>0)"  
            })
            return
        }
        // console.log(enterUserName, enterAge)
        console.log(userName, userAge)
        props.onAddUser(userName, userAge)
        // setEnterUserName("")
        // setEnterAge("")
        nameInputRef.current.value = ""
        ageInputRef.current.value = ""
    }

    const errorHandler = () => {
       setError(null)
     }

    return (
        <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler } />}
        
      <Card className={`${styles.input}`}>
      <form onSubmit={addUserHandler}>
          <label htmlFor='username'>userName</label>
                    <input
                        id="username" type='text'
                        // value={enterUserName}
                        // onChange={userNameChangeHanler}
                        ref={nameInputRef}
                    />
          <label htmlFor='age'>age(years)</label>
                    <input
                        id='age'
                        type='number'
                        // value={enterAge}
                        // onChange={ageChangeHanler}
                        ref={ageInputRef}
                    />
           <Button type="submit">submit</Button>
            </form>
            </Card>
        </Wrapper>
  )
}

export default Addusers