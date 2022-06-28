import {Button, Center, SimpleGrid, Image, Text} from '@mantine/core'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Text align="center" weight="700" size="xl">
        O suporte que o produtor rural precisa na palma de sua mão
      </Text>

      <Center p="md">
        <Image
          src="./assets/produtorrural.jpg"
          width={550}
          alt="Fazendeiro com um telefone"
        />
      </Center>

      <SimpleGrid cols={2}>
        <Link href="/culturas" passHref>
          <Button color="teal" component="a">
            Culturas
          </Button>
        </Link>

        <Link href="/financas" passHref>
          <Button color="teal" component="a">
            Finanças
          </Button>
        </Link>
      </SimpleGrid>
    </>
  )
}
