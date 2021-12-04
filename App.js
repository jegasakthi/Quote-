import React ,{useEffect, useRef, useState} from "react";
import "./App.css";

function App(){
    const [quote, setQuote] = useState('');
    const textRef = useRef();
    let color =["#ffff00" , "#90ee", "#ffa500", "ff68ff", "#a9a9a9", ]

    const getQuote =() => {
        fetch("https://type.fit/api/quotes")
        .then(res =>res.json())
        .then(data =>{
            let randomNum = Math.floor(Math.random()* data.length)
            setQuote(data[randomNum])
        })
    }

    useEffect(() => {
        getQuote();
    }, [])

    useEffect(() =>{
       textRef.current.style.color = color[Math.floor(Math.random() * color.length)]
    },[quote])

    return(
        <div className="App">
            <div className="quote">
                <p ref={textRef}>{quote.text}</p>
                <p>Author:{quote.author}</p>
                <div className="btnContainer">
                    <button onClick = {getQuote} className='btn'>Get Quote</button>
                    <a
                    href ={`https://twitter.com/intent/tweet?text=${quote.text}`}
                    target= 'blank'
                    rel = 'noopener noreferrer'
                     className="btn">
                        Tweet
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App;