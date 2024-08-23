'use client';

import React, {useLayoutEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import useMessageStore from '@/store';
import {MessageBox} from '../messageBox';
import styles from './style.module.css';
import {formattedDate} from '@/constant';

export const MessageList = () => {
  const messages = useMessageStore(state => state.messages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <section className={styles.messageList}>
      <div className={styles.date}>{formattedDate}</div>
      {messages.map(msg => (
        <motion.div
          key={msg.uid}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <MessageBox
            message={msg.message}
            timestamp={msg.timestamp}
            isMine={msg.isMine}
            image={msg.image}
          />
        </motion.div>
      ))}
      <div ref={messagesEndRef} />
    </section>
  );
};
