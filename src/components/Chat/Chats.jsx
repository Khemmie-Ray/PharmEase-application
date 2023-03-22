import TitleBar from "../Global/TitleBar"
import ChatBot from "./ChatBot"

const Chats = () => {
  return (
    <div>
        <TitleBar title="Chatbot" icon="FaRobot" />
        <ChatBot />
    </div>
  )
}

export default Chats