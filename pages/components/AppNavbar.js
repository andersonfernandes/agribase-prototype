import { Group, Navbar, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function AppNavbar({ hidden, setHidden }) {
  const links = [
    {label: 'Culturas', icon: <FontAwesomeIcon icon={faSeedling} />, link: '/culturas'},
    {label: 'Financeiro', icon: <FontAwesomeIcon icon={faHandHoldingDollar} />, link: '/financas'}
  ]

  return (
    <Navbar
      width={{ sm: 200, lg: 200 }}
      hiddenBreakpoint="sm"
      hidden={hidden}
      p="md"
    >
      {links.map(({ label, icon, link }) => (
        <UnstyledButton
          key={label}
          sx={(theme) => ({
            display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,

              '&:hover': {
                backgroundColor: theme.colors.dark[8],
              },
          })}
        >
          <Link href={link}>
            <Group onClick={() => setHidden(true)}>
              <ThemeIcon color="gray" variant="light">
                {icon}
              </ThemeIcon>

              <Text size="sm">{label}</Text>
            </Group>
          </Link>
        </UnstyledButton>
      ))}
    </Navbar>
  )
}
