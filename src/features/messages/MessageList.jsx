import React from 'react';
import { useSelector } from 'react-redux';

const MessageList = ({ channelId }) => {
    const { messages } = useSelector((state) => state.messages);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
                <div key={index} className="p-2 bg-gray-800 text-discord-text rounded">
                    <span className="font-bold">{msg.userName || 'User'}: </span>
                    {msg.content}
                </div>
            ))}
        </div>
    );
};

export default MessageList;