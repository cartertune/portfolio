import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 22px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/heart${useColorModeValue('', '-dark')}.png`

  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={22} height={22} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'white.Alpha.900')}
            fontFamily={'M PLUS Rounded 1c'}
            fontWeight={'bold'}
            ml={3}
          >
            Carter Tune
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
