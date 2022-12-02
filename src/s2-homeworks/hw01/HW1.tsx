import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'

export type MessageType = {
  id: number
  user: userInfoType
  message: messageTextType
}

type userInfoType = {
  avatar: string
  name: string
}

type messageTextType = {
  text: string
  time: string
}

export const message0: MessageType = {
  id: 0,
  user: {
    avatar: 'https://avatars.githubusercontent.com/u/10399559?v=4',
    name: 'Odinokun'
  },
  message: {
    text: 'Hello, she didn’t do anything and rested all day, how are you?',
    time: '21:00'
  }
}
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: 'https://source.unsplash.com/800x800/?people,man',
    name: 'Unregistered user'
  },
  message: {
    text: 'Hello, how are you, what did you do yesterday?',
    time: '22:30'
  }
}

const HW1 = () => {
  return (
    <div id={'hw1'}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        <div>
          <Message message={message0}/>
          <FriendMessage message={friendMessage0}/>
        </div>

        <MessageSender M={Message}/>
      </div>
    </div>
  )
}

export default HW1
