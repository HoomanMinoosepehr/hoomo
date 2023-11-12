import { NavLink } from "react-router-dom";
import { post } from "../request";
import { GiCarKey } from 'react-icons/gi'


export function Navbar(props) {

    const logOut = () => {
        post('sessions', null, "DELETE")
            .then(data => {
                if (data.status === 200){
                    props.setUser([])
                    props.setAlert({message: data.message, color: 'yellow'})
                } else {
                    props.setAlert({message: data.message, color: "red"})
                }
            })
    }

    return (
        <div className="bg-blue-700 absolute w-full flex items-center min-h-fit px-3 py-5 justify-between text-yellow-400">
            <p className="text-3xl text-gray-300 flex">
                <GiCarKey/>
                <NavLink to={'/'}>Hoomo Rental Car</NavLink>
            </p>
            <div className="flex items-center">
                <p className="mx-3"><NavLink to={'/list'}>Cars List</NavLink></p>
                { props.user.length !== 0 ? (
                    <div className="flex justify-center items-center">
                        <p className="mx-3"><NavLink to={'/new-account'}>Add Your Car</NavLink></p>
                        <p className="truncate mx-2">Hello, {props.user.full_name}</p>
                        <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-gray-300 px-2 py-1 rounded-lg ml-2"
                                onClick={logOut}
                        >
                            Log Out
                        </button>
                    </div>
                    ) : (
                    <div className="flex">
                        <p className="mx-3"><NavLink to={'/sign-in'}>Sign In</NavLink></p>
                        <p className="mx-3"><NavLink to={'/sign-up'}>Sign Up</NavLink></p>
                    </div>
                    )
                }
            </div>
        </div>
    )
}