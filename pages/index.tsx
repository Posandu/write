import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

import ColormodeToggle from "@/colormodeToggle";
import Counter from "@/counter";

const Home: NextPage = () => {
	return (
		<Container maxW="4xl" p={4}>
			<Flex alignItems="center" justifyContent="space-between" mt={6}>
				<Heading>Next.js + Chakra UI Starter</Heading>
				<ColormodeToggle />
			</Flex>

			<Text my={6}>Next.js starter for NextJS apps.</Text>

			<Counter />

			<Link href="/page">
				<a>Open page</a>
			</Link>
		</Container>
	);
};

export default Home;
