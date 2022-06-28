import {Modal, Image, Grid} from '@mantine/core'

export default function CultureDetails({
  title,
  opened,
  setOpened,
  image
}) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={title}
      size="xl"
    >
      <Grid>
        <Grid.Col md={6}>
          <Image
            src={image}
            alt={title}
            width="100%"
          />
        </Grid.Col>

        <Grid.Col md={6}>
          <div>
            <strong>Descrição em Áudio</strong>

            <audio controls>
              <source src="./assets/audio/sample.mp3" type="audio/mp3" />

              Your browser does not support the audio element.
            </audio>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Grid.Col>
      </Grid>
    </Modal>
  )
}
