import React from 'react';
import { StreamChat } from 'stream-chat';
import { chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import ChannelContainer from './components/ChannelContainer';
// import ChannelListContainer from './components/ChannelListContainer';
import { ChannelListContainer, ChannelContainer } from './components';
import './App.css';

const apiKey='zm6zkae54xf7'; // taken from stream chat dashboard

const client= StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className="app__wrapper">
            <chat client={client} theme="team light">
                <ChannelListContainer 
   
                />
                <ChannelContainer

                />
            </chat>
        </div>
    );
}

export default App;
