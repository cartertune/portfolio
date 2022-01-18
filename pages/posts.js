import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/griditem'

import thumbThingsLearned2019 from '../public/images/contents/things-learned-2019-thumb.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Things Learned in 2019"
            thumbnail={thumbThingsLearned2019}
            href="https://medium.com/@cartertune/things-learned-in-2019-26ed47dc1274"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
