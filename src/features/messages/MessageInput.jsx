import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../slices/messages/messageSlice.js';

const MessageInput = ({ channelId }) => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSend = () => {
        if (content.trim()) {
            dispatch(addMessage({ userName: 'User', content, channelId }));
            setContent('');
        }
    };

    return (
        <div className="p-4">
            <div className="flex items-center">
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 p-2 bg-gray-700 text-discord-text rounded-l focus:outline-none"
                    placeholder="Type a message..."
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-blue-600 text-discord-text rounded-r hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default MessageInput;