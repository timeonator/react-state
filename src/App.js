import {useState} from 'react'


const Message = () => {
    const [message, setMessage] = useState( '' );
  
    return (
      <div>
        <input
           type="text"
           value={message}
           placeholder="Enter a message"
           onChange={e => setMessage(e.target.value)}
         />
        <p>
          <strong>{message}</strong>
        </p>
      </div>
    );
  };

  const Append = () => {
    const [message, setMessage] = useState( '' );
  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter some letters"
        onChange={e => {
          const val = e.target.value;
          setMessage(prev => prev + val)
        } }
      />
      <p>
        <strong>{message}</strong>
      </p>
    </div>
  );
};

const Object = () => {
    const [messageObj, setMessage] = useState({ message: '' });
  
    return (
      <div>
        <input
          type="text"
          value={messageObj.message}
          placeholder="Enter a message"
          onChange={e => {
            messageObj.message = e.target.value;
            setMessage(messageObj); // Doesn't work
          }}
        />
        <p>
          <strong>{messageObj.message}</strong>
        </p>
    </div>
    );
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Message />
      <Append />
      <Object />
    </div>
  );
}

export default App;
