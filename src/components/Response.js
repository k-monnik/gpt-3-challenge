

const Response = ({ text }) => {
    return (
        <div className="m-1.5 py-2.5 px-5 bg-green-100 text-gray-600">
            <p>
                <strong>Prompt: </strong>
                {text.prompt}
            </p>
            <p>
                <strong>Response: </strong>
                {text.response}
            </p>
        </div>
    )
}

export default Response