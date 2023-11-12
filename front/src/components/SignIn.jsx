import { useState } from "react";
import { Input } from "./Inputs";
import { GreenButton } from "./Buttons";
import { post } from "../request";
import { useNavigate } from "react-router-dom";


export function SignIn(props) {
    const [user, setUser] = useState([])
    const navigate = useNavigate()

    const changeHandler = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const clickHandler = () => {
        post('sessions', user)
            .then(data => {
                if(data.status === 200) {
                    props.setUser({ id: data.id, full_name: data.full_name })
                    props.setAlert({ message: data.message, color: 'green' })
                    navigate('/list')
                } else {
                    props.setAlert({ message: data.message, color: 'red' })
                }
            })
    }

    return (
        <div className="w-full h-full text-yellow-400 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center px-4 py-10">
                <h1 className="text-4xl">Sign In :</h1>
                <Input name='email' label="Email" onChange={changeHandler}/>
                <Input type='password' label='Password' name='password' onChange={changeHandler}/>
                <GreenButton label='Sign In' onClick={clickHandler}/>
            </div>
        </div>
    )
}