import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/griditem'

import thumbParade from '../public/images/works/parade-thumb.png'
import thumbTroav from '../public/images/works/troav-thumb.jpeg'
import thumbPosseMix from '../public/images/works/possemix-thumb.png'
import thumbENES from '../public/images/works/enes-thumb.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="parade"
            title="Parade"
            thumbnail={thumbParade}
            href="https://parade.events"
          >
            Parade is the platform for event discovery on campus. The app allows
            student organizations (orgs) to advertise their events, and for
            students to discover them.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="troav"
            title="Troav"
            thumbnail={thumbTroav}
            href="https://store.troav.com"
          >
            A 5-minute meal-delivery app. The driver was pre-stocked with food
            so it could go straight to the customer upon order saving time and
            money.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="possemix"
            title="PosseMix"
            thumbnail={thumbPosseMix}
            href="https://possemix.com"
          >
            A collaborative app for mixing music.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="enes"
            title="East Nashville Editing Suite"
            thumbnail={thumbENES}
            href="https://eastnashvilleeditingsuite.com"
          >
            We rent a powerful Mac Pro Editing Suite to local creatives.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
