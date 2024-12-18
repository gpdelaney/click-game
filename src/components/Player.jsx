import {useRef, useState} from "react";

export default function Player() {
  const inputName = useRef();

  const [enteredPlayerName, setPlayerName] = useState(null)

  function handleClick() {
    setPlayerName(inputName.current.value);
    inputName.current.value = ' ';
  }

  return (
      <section id="player">
        <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
        <p>
          <input ref={inputName} type="text"/>
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
  );
}
