import Link from 'next/link';
import { Button } from '@mantine/core';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <Link href="/" passHref>
      <Button component="a">
        <FontAwesomeIcon icon={faCarrot} />
      </Button>
    </Link>
  );
}
