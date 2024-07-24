import MessageBar from './components/message-bar';
import ChatHeader from './components/chat-header';
import MessageContainer from './components/message-container';


const ChatContainer = () => {
  return (
    <div className="fixed top-0 h-[100vh] w-[100vw] bg-slate-950 flex flex-col md:static ms:flex-1">
        <ChatHeader />
        <MessageContainer />
        <MessageBar />
        </div>
  )
}

export default ChatContainer