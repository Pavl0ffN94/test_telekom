'use client';

import React, {useState, useRef, useEffect, useCallback} from 'react';

import useMessageStore from '@/store';

import dayjs from 'dayjs';
import Image from 'next/image';

import {MessageLayout} from './MessageLayout';

interface IMessageBox {
  message: string;
  image?: string;
  timestamp: string;
  isMine: boolean;
}

export const MessageBox = ({message, image, timestamp, isMine}: IMessageBox) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const editMessage = useMessageStore(state => state.editMessage);
  const deleteMessage = useMessageStore(state => state.deleteMessage);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const formattedTime = dayjs(timestamp).format('h:mm A');

  const handleEdit = () => {
    if (isMine) {
      if (isEditing) {
        editMessage(timestamp, editedMessage);
      }
      setIsEditing(!isEditing);
    }
  };

  const handleCancelEdit = useCallback(() => {
    setEditedMessage(message);
    setIsEditing(false);
  }, [message]);

  const handleDelete = () => {
    if (isMine) {
      deleteMessage(timestamp);
    }
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isEditing &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleCancelEdit();
      }
    },
    [handleCancelEdit, isEditing],
  );

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isEditing]);

  return (
    <MessageLayout
      isMine={isMine}
      isEditing={isEditing}
      message={message}
      image={image}
      editedMessage={editedMessage}
      formattedTime={formattedTime}
      inputRef={inputRef}
      containerRef={containerRef}
      handleEdit={handleEdit}
      handleCancelEdit={handleCancelEdit}
      handleDelete={handleDelete}
      setEditedMessage={setEditedMessage}
    />
  );
};
