import { GoogleGenerativeAI } from "@google/generative-ai";
import { Input, Button, Avatar } from "@nextui-org/react";
import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatSection = () => {
  const [userInput, setUserInput] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");

  const API_KEY = `${import.meta.env.API_KEY}`;
  const geminiClient = new GoogleGenerativeAI(API_KEY);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const model = geminiClient.getGenerativeModel({ model: "gemini-pro" });

    try {
      console.log("Before sendMessage:", userInput);
      const result = await model.generateContent(userInput);
      console.log("result:", result);
      const response = await result.response;
      console.log("response:", response);
      console.log(response);
      setGeminiResponse(response.text);
      setIsLoading(false);
      setUserInput("");
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[70%] h-[90vh] rounded-md relative">
      <form
        onSubmit={handleSubmit}
        className=" mt-auto absolute bottom-0 w-full"
      >
        <div className="flex flex-row gap-8">
          <div className="w-[60px]">
            <Avatar
              isBordered
              size="lg"
              radius="lg"
              className="w-[60px] mb-16 mt-auto"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </div>
          {isLoading ? (
            <div className="typing">
              <div className="typing__dot"></div>
              <div className="typing__dot"></div>
              <div className="typing__dot"></div>
            </div>
          ) : (
            <p className="text-white ">{geminiResponse}</p>
          )}
        </div>

        <Input
          type="text"
          variant="faded"
          value={userInput}
          placeholder="Enter a prompt here..."
          size="lg"
          endContent={
            <Button
              isIconOnly
              type="submit"
              isLoading={isLoading}
              className="bg-transparent"
            >
              <PaperAirplaneIcon className="h-6 w-6 text-white" />
            </Button>
          }
          classNames={{
            inputWrapper: ["bg-[#1E1F20]", "text-white", "border-none", "h-16"],
            root: ["mt-auto"],
          }}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatSection;

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { Input, Button, Avatar } from "@nextui-org/react";
// import { useState } from "react";
// import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

// const ChatSection = () => {
//   const [userInput, setUserInput] = useState("");
//   const [geminiResponse, setGeminiResponse] = useState("");

//   const API_KEY = "AIzaSyApMKDAgdIEeRUXRWMn74XNuGgKR8MdRg0";
//   const geminiClient = new GoogleGenerativeAI(API_KEY);

//   const [isLoading, setIsLoading] = useState(false);
//   const [conversationHistory, setConversationHistory] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     const model = geminiClient.getGenerativeModel({ model: "gemini-pro" });

//     try {
//       // Summarize recent conversation history
//       const MAX_HISTORY_TURNS = 3;
//       const recentHistory = conversationHistory
//         .slice(-MAX_HISTORY_TURNS)
//         .map((turn) => `${turn.user} ${turn.gemini}`)
//         .join(" ");

//       const newPrompt = userInput + " " + recentHistory;

//       const result = await model.generateContent(newPrompt);
//       console.log("result: ", result);
//       const response = await result.response;
//       console.log("response: ", response);

//       // Update conversation history
//       setConversationHistory([
//         ...conversationHistory,
//         { user: userInput, gemini: response.text },
//       ]);
//       setGeminiResponse(response.text); // Display only the latest response
//       setUserInput(""); // Clear input field
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-[70%] h-[90vh] rounded-md relative">
//       <form
//         onSubmit={handleSubmit}
//         className=" mt-auto absolute bottom-0 w-full"
//       >
//         {conversationHistory.map((turn, index) => (
//           <div key={index} className="flex flex-row gap-8 my-2">
//             <div className="w-[60px]">
//               {turn.user && (
//                 <Avatar
//                   src="https://i.pravatar.cc/150?u=user" // User avatar placeholder
//                   text="You"
//                   size="lg"
//                 />
//               )}
//               {turn.gemini && (
//                 <Avatar
//                   src="https://i.pravatar.cc/150?u=gemini" // Gemini avatar placeholder
//                   text="Gemini"
//                   size="lg"
//                 />
//               )}
//             </div>
//             <p
//               className={`text-white rounded-md p-2 ${
//                 turn.user ? "bg-gray-700" : "bg-blue-600"
//               }`}
//             >
//               {turn.user || turn.gemini}
//             </p>
//           </div>
//         ))}
//         <Input
//           type="text"
//           variant="faded"
//           value={userInput}
//           placeholder="Enter a prompt here..."
//           size="lg"
//           endContent={
//             <Button
//               isIconOnly
//               type="submit"
//               isLoading={isLoading}
//               className="bg-transparent"
//             >
//               <PaperAirplaneIcon className="h-6 w-6 text-white" />
//             </Button>
//           }
//           classNames={{
//             inputWrapper: ["bg-[#1E1F20]", "text-white", "border-none", "h-16"],
//             root: ["mt-auto"],
//           }}
//           onChange={(e) => setUserInput(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// };

// export default ChatSection;
