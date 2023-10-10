import React, { useRef,useEffect, useCallback, useState} from 'react';
import Pass from './Components/Pass';

const App = () => {
  const [length, setLength] = useState(8);
  const [addNumbers, setaddNumbers] = useState(false);
  const [addCharacter, setaddCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false)
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (addNumbers) str += "0123456789";
    if (addCharacter) str += "!@#$%^&*-_=+{}[]~`";
    if(addNumbers && addCharacter) str += '0123456789' + '!@#$%^&*-_=+{}[]~`';


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, addNumbers, addCharacter, setPassword]);

  const copyToClipBoard = useCallback(() => {
    setCopy(true)
    passwordRef.current?.select();
    // passwordRef.current?.selectSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [addNumbers, addCharacter, length])

  return (
    < >

      <Pass
       password={password}
       passwordRef={passwordRef}
       copy={copy}
       copyToClipBoard={copyToClipBoard}
       length={length}
       addNumbers={addNumbers}
       addCharacter={addCharacter}
       setLength={setLength}
       setAddNumbers={setaddNumbers}
       setAddCharacter={setaddCharacter}
       />
       
    </>
  )
}

export default App
