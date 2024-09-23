import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState(null);

  function handleClick() {
    setEnterPlayerName(playerName.current.value);
    console.log(playerName.current.placeholder);
  }

  ///////////   This is a bit comlex with useState() ///////////
  //   function handleClick() {
  //     setSubmitted(true) ;
  //   }
  //   function onChangingName(e) {
  //     setPlayerName(e.target.value);
  //     setSubmitted(false);
  //   }

  return (
    <>
      <h1 className="text-welcomeNameColor my-6 text-xl">
        Welcome {enterPlayerName ?? 'unknown entity'}
      </h1>
      <div className="text-xs">
        <input
          className="text-inputColor px-2 bg-inputBG rounded-sm py-1 border border-inputBorder"
          type="text"
          ref={playerName}
          //   onChange={onChangingName}
        />
        <button
          onClick={handleClick}
          className=" bg-inputButtonBG py-1 px-4 rounded-sm border border-inputBorder hover:bg-onHoverBG hover:border-onHoverBorder  "
        >
          Set Name
        </button>
      </div>
    </>
  );
}
