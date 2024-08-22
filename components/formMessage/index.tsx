'use client';

import React, {useState, ChangeEvent, FormEvent} from 'react';
import {
  SmileOutlined,
  SendOutlined,
  UploadOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import styles from './style.module.css';
import dayjs from 'dayjs';
import useMessageStore from '@/store';
import uploadFile from '@/assets/image/uploadFile.svg';
import Image from 'next/image';

export const FormMessage = () => {
  const [message, setMessage] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const addMessage = useMessageStore(state => state.addMessage);

  const generateRandomId = () =>
    `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`; //Не лучшчий способ но за не имением лучшего

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      event.target.value = '';
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() || image) {
      const userMessage = {
        message,
        image: preview || '',
        timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isMine: true,
        uid: generateRandomId(),
      };

      addMessage(userMessage);

      const botMessage = {
        message: 'Hello world',
        timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isMine: false,
        uid: generateRandomId(),
      };

      setTimeout(() => addMessage(botMessage), 1000);

      setMessage('');
      setImage(null);
      setPreview(null);
    }
  };

  return (
    <form
      className={styles.chatForm}
      onSubmit={handleSubmit}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <SmileOutlined className={styles.icon} />
      <input
        type='text'
        placeholder={isHovered ? 'See you all then!' : 'Start typing...'}
        value={message}
        onChange={handleChange}
        className={styles.input}
      />
      <label className={styles.uploadButton}>
        <Image src={uploadFile} alt='upload file' />
        <input
          type='file'
          accept='image/webp,image/png,image/jpeg'
          onChange={handleImageChange}
          style={{display: 'none'}}
        />
      </label>
      {preview && (
        <div className={styles.imagePreviewContainer}>
          <Image
            width={30}
            height={40}
            src={preview}
            alt='preview'
            className={styles.imagePreview}
          />
          <CloseOutlined className={styles.removeImageIcon} onClick={handleRemoveImage} />
        </div>
      )}
      <button
        type='submit'
        className={styles.sendButton}
        disabled={!message.trim() && !image}>
        <SendOutlined />
      </button>
    </form>
  );
};
