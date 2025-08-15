import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [
            { userName: 'User1', content: 'Hello, welcome to the chat!', channelId: 1 },
            { userName: 'User2', content: 'Hey, this is a test message!', channelId: 1 },
        ],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;