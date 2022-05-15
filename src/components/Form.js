import { useState } from "react";

const Form = ({ onAdd }) => {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // setTextOutput(result);

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('')

    const submitValue = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add some text')
            return
        }
        const frmdetails = {
            'First Name': fName,
            'Last Name': lName,
            'Phone': phone,
            'Email': email
        }

        onAdd({ text, frmdetails })

        console.log(text, frmdetails);

    };
    return (
        <div className="App">
            <header>
                <h1>Fun with AI</h1>
            </header>
            <form onSubmit={submitValue}>
                <div className="form-control form-control__text">
                    <label htmlFor="text">Text to be submitted</label>
                    <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
                    <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
                    <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <textarea
                        id="text"
                        onChange={e => setText(e.target.value)}
                    // value={prompt}
                    />
                </div>
                <button className="button" type="submit">Submit</button>
                <div className="">
                    <label htmlFor="result">API response</label>
                    {/* <output id="result" className="result">{textOutput}</output> */}
                    <div>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form