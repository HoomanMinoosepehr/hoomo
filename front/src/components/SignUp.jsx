import { useState } from "react";
import { Input } from "./Inputs";
import { GreenButton } from "./Buttons";
import { post } from "../request";
import { useNavigate } from "react-router-dom";


export function SignUp(props) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const changeHandler = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = () => {
        post('users', {user})
            .then(data => {
                if(data.status === 200) {
                    props.setAlert({ message: data.message, color: 'green'})
                    navigate("/sign-in")
                } else {
                    props.setAlert({message: data.message, color: 'red'})
                }
            })
    }


    
    return (
        <div className="w-full h-full text-yellow-400 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center px-4 py-10">
            <p className="text-4xl">New Account :</p>
            <Input label='First name' name='first_name' onChange={changeHandler} />
            <Input label='Last name' name='last_name' onChange={changeHandler} />
            <Input label='Email' name="email" onChange={changeHandler} />
            <Input label='Password' type="password" name='password' onChange={changeHandler} />
            <Input label='Re-enter password' type="password" name='password_confirmation' onChange={changeHandler} />
            <GreenButton label="Sign Up" onClick={submit} />
            </div>
        </div>
    )
}