import React from 'react';
import ChannelList from '../features/channels/ChannelList';
import MessageList from '../features/messages/MessageList';
import MessageInput from '../features/messages/MessageInput';

const HomePage = () => {
    return (
        <div className="flex min-h-screen bg-discord-bg">
            <ChannelList />
            <div className="flex-1 flex flex-col">
                <MessageList channelId={1} />
                <MessageInput channelId={1} />
            </div>
        </div>
    );
};

export default HomePage;