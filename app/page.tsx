import {FormMessage, Header, MessageList} from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <section className={styles.messageContainer}>
          <MessageList />
        </section>
        <FormMessage />
      </div>
    </main>
  );
}
