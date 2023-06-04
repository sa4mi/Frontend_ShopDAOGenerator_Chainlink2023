import Head from 'next/head'
import { NftContractContext } from '@/contexts/NftContractProvider/NftContractProvider'
import { useConnectWallet } from '@/hooks/thirdweb/useConnectWallet/useConnectWallet'
import { useMint } from '@/hooks/thirdweb/useMint/useMint'
import { Flex, VStack, Button, Box, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { useContext } from 'react'
import { getChain } from '@/helper'
import { Fade, NftImagesSlideShow } from '@/components'

const chain = getChain()

const MintProfitRightNft = () => {
  const store = useContext(NftContractContext)
  const address = useAddress()

  const { mint } = useMint()

  return (
    <>
      <Head>
        <title>ShopDAO Generator</title>
        <meta name="description" content="gernerator" />
        <meta
          property="og:image"
          content="https://bb55-240d-1a-d28-f400-38-f690-f78c-534c.ngrok-free.app/api/vercel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        maxW={'8xl'}
        justifyContent="center"
        h="100%"
        alignItems="center"
        mx="auto"
      >
        <Fade>
          <VStack spacing={6} padding="1rem">
            <Box width="240px" height="240px">
              <NftImagesSlideShow />
            </Box>

            <div>
              {address !== undefined && (
                <Button onClick={mint} disabled={store.isClaiming}>
                  {store.isClaiming
                    ? 'claiming...'
                    : `MINT (${store.claimPrice} ETH)`}
                </Button>
              )}
              <Text pt={2} fontSize="xs" textAlign={'center'}>
                {store.claimedSupply} / {store.totalSupply}
              </Text>
              <Text pt={2} fontSize="xs" textAlign={'center'}>
                {chain.name}
              </Text>
            </div>
          </VStack>
        </Fade>
      </Flex>
    </>
  )
}

export default MintProfitRightNft