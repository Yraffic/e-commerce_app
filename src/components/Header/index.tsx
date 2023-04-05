import { Flex, Text } from "@chakra-ui/react"
import { ButtonPrimay } from "../Button"

export const Header = ()=>{
    return(
        <Flex
            backgroundColor='blackAlpha.500'
            width='100vw'
            height='9rem'
            alignItems='center'
            justifyContent='center'
            padding='1rem'
            position='relative'
        >
            <Flex 
                flexDirection='column'
                alignItems='center'
            >
                <Text 
                    as='b'
                    fontSize='6xl'
                >
                  E-commerce
                </Text>
                 <Text 
                    fontSize='2xl'
                >
                  your variety store
                </Text>
            </Flex>
            <ButtonPrimay 
                backgroundColor='whiteAlpha.800'
                position='absolute'
                right='1rem'
            >
                Login
            </ButtonPrimay>
        </Flex>
    )
}