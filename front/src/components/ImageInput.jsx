import { useState } from "react"


export function ImageInput(props) {
    const [photo , setPhoto] = useState(null)

    const changeHandler = e => {
        // const {name,value} = e.target
        setPhoto({
            'file': URL.createObjectURL(e.target.files[0])
        })
    }

    return (
        <div>
            {
                photo === null ? (
                    <div>
                        <label className="text-yellow-400">File :</label><br />
                        <input className="border border-yellow-400 rounded-xl file:rounded-xl file:bg-yellow-400" name="file" onChange={changeHandler} type='file' />
                    </div>
                ) : (
                    <div className="m-10 flex flex-col items-center justify-center w-fit h-fit">
                        <img src={photo.file} className="w-32 h-36 rounded-2xl" alt="" />
                        <button className="border border-red-700 text-red-700 rounded-xl mt-5 px-2 py-1" onClick={() => setPhoto(null)}>Remove</button>
                    </div>
                )
            }
            <button className="border border-yellow-400 rounded-xl px-3 py-1 m-5" onClick={() => console.log(photo)}>Log</button>
        </div>
    )
}