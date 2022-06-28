import {useState} from 'react'
import {Center, Grid, Image, Text} from '@mantine/core'
import styles from '../styles/Culturas.module.scss'
import CultureDetails from './components/CultureDetails'

const CULTURES = [
  {image: './assets/real-icons/pineapple.png', text: 'Abacaxi'},
  {image: './assets/real-icons/banana.png', text: 'Banana'},
  {image: './assets/real-icons/orange.png', text: 'Laranja'},
  {image: './assets/real-icons/papaya.png', text: 'Mamão'},
  {image: './assets/real-icons/mango.png', text: 'Manga'},
  {image: './assets/real-icons/watermelon.png', text: 'Melancia'},
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
    <>
      <h1>Culturas</h1>

      <Grid gutter="lg">
        {CULTURES.map(({image, text}, index) => (
          <Grid.Col
            md={4}
            key={text}
            className={styles.culture}
          >
            <CultureDetails
              title={text}
              opened={openedModal[index]}
              setOpened={(value) => handleModalToggle(value, index)}
            />

            <Center p="md">
              <Image
                src={image}
                alt={text}
                width={200}
                onClick={() => handleModalToggle(true, index)}
              />
            </Center>

            <Text weight={700} size="lg" align="center">
              {text}
            </Text>
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
