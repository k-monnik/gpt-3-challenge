import Response from './Response';

const ResponseList = ({ responses }) => {
    return (
        <>
            {responses.map((text) => (
                <Response
                    key={text.id}
                    text={text} />
            ))}
        </>
    )
}

export default ResponseList