

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // setTextOutput(result);

    };
    return (
        <div className="App">
            <header>
                <h1>Fun with AI</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form-control form-control__text">
                    <label htmlFor="text">Text to be submitted</label>
                    <textarea
                        id="text"
                    // onChange={handleTextareaChange}
                    // value={textInput}
                    />
                </div>
                <button className="button" type="submit">Submit</button>
                <div className="">
                    <label htmlFor="result">Text response</label>
                    {/* <output id="result" className="result">{textOutput}</output> */}

                </div>
            </form>
        </div>
    )
}

export default Form