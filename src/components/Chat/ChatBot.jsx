import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    window.__be = window.__be || {};
    window.__be.id = "63ff2c890d9e34000755385e";
    const be = document.createElement('script');
    be.type = 'text/javascript';
    be.async = true;
    be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(be, s);

    return () => {
      s.parentNode.removeChild(be);
    }
}, [])

  return null;
}

export default ChatBot;