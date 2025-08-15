import React from 'react';
import { Link } from 'react-router-dom';

const ChannelList = () => {
    const channels = [
        { id: 1, name: 'general' },
        { id: 2, name: 'random' },
    ];

    return (
        <div className="w-64 bg-gray-900 p-4">
            <h2 className="text-xl text-discord-text mb-4">Channels</h2>
            <div className="space-y-2">
                {channels.map((channel) => (
                    <Link
                        key={channel.id}
                        to={`/channels/${channel.id}`}
                        className="block p-2 text-discord-text hover:bg-gray-700 rounded"
                    >
                        # {channel.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ChannelList;