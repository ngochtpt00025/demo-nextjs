'use client';
export default function Error({error, reset}) {
    console.log(error);
    return (
        <>
            <div>
                <h2>error</h2>
                <button onClick={reset}>reset</button>
            </div>
        </>
    )
    
}