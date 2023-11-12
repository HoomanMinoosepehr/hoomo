

export function GreenButton(props){

    return(
        <div>
            <button 
                className="bg-green-800 ring-2 ring-green-800 rounded-lg px-2 py-1 mt-7 text-yellow-300 hover:bg-green-400 hover:text-green-900" 
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    )
}