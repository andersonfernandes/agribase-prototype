import { Navbar } from '@mantine/core';

export default function AppNavbar({ hidden }) {
  return (
    <Navbar
      width={{ sm: 200, lg: 300 }}
      hiddenBreakpoint="sm"
      hidden={hidden}
      p="md"
    >
      menu aqui
    </Navbar>
  )
}
