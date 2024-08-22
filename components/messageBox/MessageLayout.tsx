import React from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import styles from './style.module.css';
import avatarBot from '@/assets/image/avatarBot.png';
import dobleCheck from '@/assets/image/dobleCheck.svg';
import indicator from '@/assets/image/indicator.svg';

interface IMessageContentProps {
  isMine: boolean;
  isEditing: boolean;
  message: string;
  image?: string;
  editedMessage: string;
  formattedTime: string;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  handleEdit: () => void;
  handleCancelEdit: () => void;
  handleDelete: () => void;
  setEditedMessage: (value: string) => void;
}

export const MessageLayout = ({
  isMine,
  isEditing,
  message,
  image,
  editedMessage,
  formattedTime,
  inputRef,
  containerRef,
  handleEdit,
  handleCancelEdit,
  handleDelete,
  setEditedMessage,
}: IMessageContentProps) => {
  return (
    <div
      className={`${styles.message} ${isMine ? styles.mine : styles.their} ${
        isEditing ? styles.editing : ''
      }`}>
      {!isMine && (
        <div className={styles.avatar}>
          <Image src={avatarBot} alt='avatar bot' width={32} height={32} />
          <Image src={indicator} alt='indicator' className={styles.indicator} />
        </div>
      )}

      <div
        ref={containerRef}
        className={`${styles.text} ${isMine ? styles.mineText : styles.theirText}`}>
        <div className={`${isMine ? styles.triangleRight : styles.triangleLeft}`}></div>
        {isEditing && isMine ? (
          <>
            {image && (
              <Image
                src={image}
                alt='uploaded'
                className={styles.messageImage}
                width={300}
                height={200}
                style={{objectFit: 'contain'}}
              />
            )}
            <textarea
              ref={inputRef}
              value={editedMessage}
              onChange={e => setEditedMessage(e.target.value)}
              className={styles.editInput}
            />
          </>
        ) : (
          <>
            <div className={styles.botInfo}>
              <span className={styles.botName}>Jav</span>
              <span className={styles.botPos}>Engineering</span>
            </div>
            <div className={styles.messageContent}>
              {image && (
                <Image
                  src={image}
                  alt='uploaded'
                  className={styles.messageImage}
                  width={300}
                  height={200}
                  style={{objectFit: 'contain'}}
                />
              )}
              <p className={styles.msgText}>{message}</p>
            </div>
          </>
        )}

        <div className={styles.messageInfo}>
          <div className={styles.timestamp}>
            {formattedTime}
            <div className={styles.checkMsg}>
              <Image width={16} height={8} src={dobleCheck} alt='dobleCheck' />
            </div>
          </div>

          {isMine && (
            <div className={styles.actions}>
              {isEditing ? (
                <>
                  <CheckOutlined
                    className={`${styles.icon} ${styles.checkIcon}`}
                    onClick={handleEdit}
                    style={{color: 'green'}}
                  />
                  <CloseOutlined
                    className={`${styles.icon} ${styles.closeIcon}`}
                    onClick={handleCancelEdit}
                    style={{color: 'red'}}
                  />
                </>
              ) : (
                <>
                  <EditOutlined className={styles.icon} onClick={handleEdit} />
                  <DeleteOutlined className={styles.icon} onClick={handleDelete} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
