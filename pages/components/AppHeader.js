import {
  Header,
  Image,
  MediaQuery,
  Burger
} from '@mantine/core'
import Link from 'next/link'
import styles from './AppHeader.module.scss'

export default function AppHeader({ hiddenMenu, setHiddenMenu }) {
  return (
    <Header height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={!hiddenMenu}
            onClick={() => setHiddenMenu((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>

        <Link href={'/'} onClick={() => setHiddenMenu(true)}>
          <Image
            radius="md"
            src="./assets/logo.png"
            alt="App Logo"
            width="150px"
            className={styles.logo}
          />
        </Link>
      </div>
    </Header>
  )
}
