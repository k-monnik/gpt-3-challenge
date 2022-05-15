import { useState } from "react";

const Form = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [response, setResponse] = useState('')

    const submitValue = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add some text')
            return
        }

        onAdd({ text })

        setText('')
        setResponse('')

    };
    return (
        <div className="App">
            <header>
                <h1 className="text-4xl">Fun with AI</h1>
            </header>
            <form onSubmit={submitValue}>
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="prompt input">Enter prompt</label>
                    <textarea
                        id="text"
                        className="m-6"
                        value={text}
                        onChange={e => setText(e.target.value)}

                    />
                </div>
                <button className="button" type="submit">Submit</button>
                <div className="mt-12">
                    <label htmlFor="result" className="flex mx-6 text-2xl items-left">Responses</label>
                    {/* <output id="result" className="result">{textOutput}</output> */}
                    <div>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form