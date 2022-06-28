import {useState} from 'react'
import {Grid, Image} from '@mantine/core'
import styles from '../styles/Culturas.module.scss'
import CultureDetails from './components/CultureDetails'

const CULTURES = [
  {image: './assets/real/banana.png', text: 'Banana'},
  {image: './assets/real/mango.png', text: 'Manga'},
  {image: './assets/real/orange.png', text: 'Laranja'},
  {image: './assets/real/papaya.png', text: 'Mamão'},
  {image: './assets/real/pineapple.png', text: 'Abacaxi'},
  {image: './assets/real/watermelon.png', text: 'Melancia'},
]

export default function Culturas() {
  const [openedModal, setOpenedModal] = useState(new Array(CULTURES.length).fill(false))
  const handleModalToggle = (value, index) => {
    console.log(index, value)
    setOpenedModal(oldValues => {
      oldValues.splice(index, 1, value)
      return [...oldValues]
    })
  }

  return (
    <Grid>
      {CULTURES.map(({image, text}, index) => (
        <Grid.Col
          md={4}
          gutter="xl"
          key={text}
          className={styles.culture}
        >
          <CultureDetails
            title={text}
            opened={openedModal[index]}
            setOpened={(value) => handleModalToggle(value, index)}
          />

          <Image
            src={image}
            alt={text}
            onClick={() => handleModalToggle(true, index)}
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}
