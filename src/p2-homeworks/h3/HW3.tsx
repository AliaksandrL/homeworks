import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}


// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
        {_id: v1(), name: 'Sasha'},
        {_id: v1(), name: 'Masha'},
        {_id: v1(), name: 'Gari'},
        {_id: v1(), name: 'Nasty'},
        {_id: v1(), name: 'Valera'},
    ]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const user = {_id: v1(), name}
        setUsers([...users, user])
        // if (name.trim() !== '') {
        //     let user = {_id: v1(), name: name.trim()}
        //     let newUsers = [user, ...users];
        //     setUsers(newUsers)// need to fix
        // }
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
