import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Icon,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

import Paragraph from '../components/paragraph'

import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer in NYC
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Carter Tune
          </Heading>
          <p>Product Specialist (Developer / Designer / Strategist)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor={'whiteAlpha.800'}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/carter.jpeg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Carter is a full-stack product developer based in NYC. He has the
          know-how for 0-to-1 product creation by taking an idea through
          customer interviews, product design, and implementing functional,
          scalable code.
        </Paragraph>
        <Paragraph>
          When not building products, Carter enjoys exercising, learning, and
          enjoying meals with friends.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme={'pink'}>
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant={'section-title'}>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>Born in Nashville, Tennessee
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>Graduated with a degree in Computer Science
          from Northeastern University
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>Started East Nashville Editing Suite w/ friend
          Hank
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>Became employee #2 @ Troav Delivery as a
          Product Developer
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>Crypto rabbit holing
        </BioSection>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Nutrition, Crypto, Golf, Football, Philosophy, Chess, Food
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/cartertune" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @cartertune
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/carter_tune" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @carter_tune
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                Posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Section>
    </Container>
  )
}

export default Page
