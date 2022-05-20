import { useState } from "react";

function ShowNumber({ numbers = 0 }) {
  console.log(numbers);
  const [number, setNumber] = useState(numbers);

  return (
    <div>
      <p>{number}</p>
      <button
        onClick={() => {
          setNumber((oldNumber) => oldNumber + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber((oldNumber) => {
            if (oldNumber > 0) {
              var decrementNumber = oldNumber - 1;
              localStorage.setItem("number", String(decrementNumber));

              return decrementNumber;
            }

            return oldNumber;
          });
        }}
      >
        -
      </button>
    </div>
  );
}

export default ShowNumber;
