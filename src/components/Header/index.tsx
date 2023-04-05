import { Flex, Text } from "@chakra-ui/react"
import { ButtonPrimay } from "../ButtonPrimary"

export const Header = ()=>{
    return(
        <Flex
            backgroundColor='blackAlpha.500'
            width='100%'
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
                    fontSize='2rem'
                >
                  E-commerce
                </Text>
                 <Text 
                    fontSize='1rem'
                >
                  your variety store
                </Text>
            </Flex>
            <ButtonPrimay 
                width='3rem'
                position='absolute'
                right='1.5rem'
                bottom='0.5rem'
            >
                Login
            </ButtonPrimay>
        </Flex>
    )
}