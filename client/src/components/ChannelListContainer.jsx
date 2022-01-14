// sidebar //
import React from 'react';
import { ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ChatIcon from '../assets/ChatIcon.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={ChatIcon} alt="Chatlogo" width="30" />
            </div>
        </div>

        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
)
const CompanyHeader =() => (
    <div className='channel-List__header'>
        <p className='channel-List__header__text'>chatPage</p>
    </div>
)
const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader/>
            </div>
        </>
    );
}

export default ChannelListContainer;
