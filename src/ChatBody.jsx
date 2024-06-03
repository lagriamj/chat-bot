/* eslint-disable react-hooks/rules-of-hooks */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

const ChatBody = () => {
  const [userInput, setUserInput] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");

  const API_KEY = "AIzaSyApMKDAgdIEeRUXRWMn74XNuGgKR8MdRg0";
  const geminiClient = new GoogleGenerativeAI(API_KEY);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const model = geminiClient.getGenerativeModel({ model: "gemini-pro" });

    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;
      console.log(response);
      setGeminiResponse(response.text);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <Input
          type="text"
          variant="faded"
          value={userInput}
          placeholder="Enter text here..."
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button type="submit" isLoading={isLoading}>
          Ask Me
        </Button>
      </form>
      {geminiResponse && <p>{geminiResponse}</p>}
    </div>
  );
};

export default ChatBody;
