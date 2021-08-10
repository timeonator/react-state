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

const 
TObject = () => {
    const [messageObj, setMessage] = useState({ message: '' });
  
    return (
      <div>
        <input
          type="text"
          value={messageObj.message}
          placeholder="Enter a message"
          onChange={e => {
//        doesn't work because same object won't trigger a refresh.
//            messageObj.message = e.target.value; 
            const newMessageObj = { message: e.target.value };
            setMessage(newMessageObj); // Now it works
          }}
  
        />
        <p>
          <strong>{messageObj.message}</strong>
        </p>
    </div>
    );
  };

  const MessageList = () => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
  
    return (
      <div>
        <input
          type="text"
          value={message}
          placeholder="Enter a message"
          onChange={e => {
            setMessage(e.target.value);
          }}
        />
        <input
          type="button"
          value="Add"
          onClick={e => {
            setMessageList([
              ...messageList,
              {
                // Use the current size as ID (needed to iterate the list later)
                id: messageList.length + 1,
                message: message
              }
            ]);
            setMessage(""); // Clear the text box
          }}
        />
        <ul>
          {messageList.map(m => (
            <li key={m.id}>{m.message}</li>
          ))}
        </ul>
      </div>
    );
  };

  const SetStateSimulation = () => {
    const [messageObj, setMessage] = useState({ message: '', id: 1 });

    return (
      <div>
        <input
          type="text"
          value={messageObj.message}
          placeholder="Enter a message"
          onChange={e => {
            const val = e.target.value;
            setMessage(prevState => {
              return { ...prevState, message: val }
            });
          }}
        />
        <p>
          <strong>{messageObj.id} : {messageObj.message}</strong>
        </p>
    </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Message />
      <Append />
      <TObject />
      <MessageList />
      <SetStateSimulation />
    </div>
  );
}

export default App;
