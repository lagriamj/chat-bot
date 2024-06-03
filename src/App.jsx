import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import ChatSection from "./ChatSection";
import Sidebar from "./Sidebar";
//import axios from "axios";
function App() {
  return (
    <NextUIProvider>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full bg-[#131314] flex items-center justify-center">
          <ChatSection />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
