import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const HeadSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const HeadContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="degen-head"
    m="auto"
    mt={['-20px', '-40px', '-60px']}
    mb={['-40px', '-90px', '-140px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
    zIndex={-1}
    background={
      'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(0,0,0, 1), 50%);'
    }
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <HeadContainer>
      <DogSpinner />
    </HeadContainer>
  )
}

export default Loader
