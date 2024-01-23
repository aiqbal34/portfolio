import { useState } from "react";


const Random = () => {

    const [hello, setHello] = useState("Hello");

    const onClickHandler = async () => {
        try {
          const res = await fetch("http://localhost:3001/");
          
          if (!res.ok) {
            // Check if the response status is not OK (e.g., 404 or 500)
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
      
          const result = await res.json();
          setHello(result);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle the error, e.g., show an error message to the user
        }
      };
      

    return (<div><button onClick={onClickHandler}>Clcik Heere</button>
        <p className=" text-white">
            {hello}
        </p></div>

    )
}
export default Random;