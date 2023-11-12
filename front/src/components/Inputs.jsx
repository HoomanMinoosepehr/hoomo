

export function Input(props) {
    return(
        <div className="mt-3">
            <label
                className="text-yellow-400"
            >
                {props.label}: 
            </label><br/>

            <input
                className="text-yellow-200 border border-yellow-400 rounded-lg bg-black px-1 mt-1"
                type={props.type || "text"}
                name={props.name}
                onChange={props.onChange}
            />
        </div>
    )
}