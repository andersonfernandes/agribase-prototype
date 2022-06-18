import { Group, Navbar, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faAtom } from '@fortawesome/free-solid-svg-icons'

export default function AppNavbar({ hidden }) {
  const links = [
    {label: 'Item 1', icon: <FontAwesomeIcon icon={faComputer} />},
    {label: 'Item 2', icon: <FontAwesomeIcon icon={faAtom} />}
  ]

  return (
    <Navbar
      width={{ sm: 200, lg: 200 }}
      hiddenBreakpoint="sm"
      hidden={hidden}
      p="md"
    >
      {links.map(({ label, icon }) => (
        <UnstyledButton
          key={label}
          sx={(theme) => ({
            display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,

              '&:hover': {
                backgroundColor: theme.colors.gray[0],
              },
          })}
        >
          <Group>
            <ThemeIcon color="gray" variant="light">
              {icon}
            </ThemeIcon>

            <Text size="sm">{label}</Text>
          </Group>
        </UnstyledButton>
      ))}
    </Navbar>
  )
}
