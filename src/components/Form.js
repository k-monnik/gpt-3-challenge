// import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const Form = () => {



    const submitValue = (e) => {
        e.preventDefault();

        // if (!text) {
        //     alert('Please add some text')
        //     return
        // }

        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formData.productName);

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-curie-001", {
            prompt: "Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: A pair of shoes that can fit any foot size.\nSeed words: adaptable, fit, omni-fit.\nProduct names: Omni-Fit shoes, Adapta-Fit shoes, All-Fit shoes.",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
            .then((response) => {
                this.setState({
                    heading: `AI Product DEscription Suggestions for: ${formDataObj.productname}`,
                    response: `${response.data.choices[0].text}`
                })
            });

        // setText('')
        // setResponses('')

    };





    return (
        <div className="">
            <header>
                <h1 className="text-4xl">Fun with AI</h1>
            </header>
            <form onSubmit={submitValue}>
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="prompt input">Enter prompt</label>
                    <textarea
                        id="text"
                        className="m-6"
                    // value={text}
                    // onChange={e => setText(e.target.value)}

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