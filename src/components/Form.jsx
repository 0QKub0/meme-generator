import memesData from "../memesData"
import { useState } from "react"
export default function Form() {
    
    const [memeImage, setMemeImage] = useState("");


    function randomImageButton() {
        // const memesArray = memesData.data.memes
        // const randomNumber = Math.floor(Math.random() * memesData.length)
        // setMemeImage(memesArray[randomNumber].url) 
        // // setNewMemeImage(memesData.data.memes[randomNumber].url)
        // setNewMemeImage(function (){
        //     return memesData.data.memes[randomNumber].url
        // }) 
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    console.log(memeImage)
    return (
        <main >
            <div className="form" >
                <input type="text" 
                    placeholder="SHUT UP" 
                    className="form-input" />
                <input type="text" 
                    placeholder="AND TAKE MY MONEY" 
                    className="form-input" />
                <button onClick={randomImageButton} 
                    className="form-button">Get a new meme image🧱</button>
            </div>
            <img src={memeImage} alt="" className="meme-image" />
        </main>
    )
}