
const Pass = ({password, passwordRef, copy, copyToClipBoard, length, addNumbers, addCharacter, setLength, setAddNumbers, setAddCharacter}) => {
    
    return (


        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-5 my-8 text-orange-500 bg-gray-700'>
                <h1 className='text-4xl text-center m-4'>Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input
                        type="text"
                        className='outline-none w-full py-1 px-3'
                        placeholder='Pass'
                        value={password}
                        ref={passwordRef}
                        readOnly
                    />
                    <button onClick={copyToClipBoard} className={copy ? 'transition duration-700 ease-in-out outline-none bg-blue-400 text-white w-24 px-3 py-0.5 shrink-0' : 'transition duration-700 ease-in-out outline-none bg-blue-700 text-white w-24 px-3 py-0.5 shrink-0'}>{copy ? 'Copied' : 'Copy'}</button>
                </div>

                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            onClick={() => setCopy(false)}
                            className='cursor-pointer'
                        />
                        <label>Length: {length} </label>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <label htmlFor="num">Numbers</label>
                        <input
                            type="checkbox"
                            id="num"
                            onChange={() => setAddNumbers((prev) => !prev)}
                            defaultChecked={addNumbers}
                            onClick={() => setCopy(false)}
                        />
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <label htmlFor="char">Character</label>
                        <input
                            type="checkbox"
                            id="char"
                            onChange={() => setAddCharacter((prev) => !prev)}
                            defaultChecked={addCharacter}
                            onClick={() => setCopy(false)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pass
