import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import ResponseList from './components/ResponseList';

const App = () => {

  const [responses, setResponses] = useState([
    {
      prompt: "write a poem about dinosaurs",
      response: 'Roses are red, dinosaurs are blue.',
    },
  ])

  //New Prompt
  const addPrompt = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newResponse = { id, ...text }
    setResponses([...newResponse, responses])
  }

  return (
    <div className="container text-blue-500 font-4xl">
      <Form onAdd={addPrompt} />
      {responses.length > 0 ? (
        <ResponseList responses={responses} />
      ) : (
        'No Responses to Show'
      )}
    </div>
  );
}

export default App;
