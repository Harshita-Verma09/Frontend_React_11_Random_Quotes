// import React, { useState } from 'react';

// const Quotes = () => {
//     const [quote, setQuote] = useState("");

//     const myFun = async () => {
//         try {
//             const response = await fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/random");
//             const data = await response.json();
//             const parsedData = JSON.parse(data.contents); // Nested JSON parse
//             setQuote(parsedData[0].q);
//             console.log("Quote Data:", parsedData);
//         } catch (error) {
//             console.log("Error:", error);
//         }
//     };

// myFun()


//     return (
//         <div className="flex flex-col items-center justify-center ">
//             <div className="bg-white shadow-lg rounded-lg p-20 max-w-lg text-center w-[45rem]">
//                 <p className="text-lg font-semibold">"{quote }"</p>
//                 <p className="text-sm text-gray-500 mt-2">- "{ }"</p>
//                 <button
//                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     onClick={myFun}
//                 >
//                     Get New Quote
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Quotes

import React, { useState } from 'react';

const Quotes = () => {
    const [quote, setQuote] = useState("Click the button to get a quote!");
    const [author, setAuthor] = useState("");

    const myFun = async () => {
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://zenquotes.io/api/random")}&timestamp=${new Date().getTime()}`);
            const data = await response.json();
            const parsedData = JSON.parse(data.contents);

            if (!parsedData.length) {
                throw new Error("No quote found");
            }

            setQuote(parsedData[0].q);
            setAuthor(parsedData[0].a);

        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="bg-gray-100 shadow-lg rounded-2xl p-10 max-w-lg text-center w-[45rem]">
                <p className="text-lg font-semibold">"{quote}"</p>
                <p className="text-sm text-gray-500 mt-2">- {author}</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                    onClick={myFun}> Get New Quote
                </button>
            </div>
        </div>
    );
};

export default Quotes;
