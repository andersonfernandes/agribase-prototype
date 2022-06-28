import {Modal} from '@mantine/core'

export default function CultureDetails({
  title,
  opened,
  setOpened
}) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={title}
    >
      {title}
    </Modal>
  )
}
