

import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import {avatarsBot} from '@/assets/image';
import optionIcon from '@/assets/image/optionIcon.png';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.icons}>
        {avatarsBot.map(avatar => (
          <Image src={avatar} key={avatar.src} alt='avatar Bot' />
        ))}
      </div>

      <div className={styles.grop}>
        <div className={styles.groupName}>
          <span className={styles.title}>🦄 Team Unicorns</span>
          <span className={styles.infoMessage}>last seen 45 minutes ago</span>
        </div>

        <button  className={styles.options}>
          <Image src={optionIcon} alt='option' />
        </button>
      </div>
    </header>
  );
};
