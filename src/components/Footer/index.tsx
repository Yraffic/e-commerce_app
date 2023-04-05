import { Flex, Text } from "@chakra-ui/react"

export const Footer = ()=>{
    return(
        <Flex
            backgroundColor='blackAlpha.500'
            width='100vw'
            height='6rem'
            alignItems='center'
            justifyContent='center'
            padding='0.5rem'
        >
            <Flex flexDirection='column'>
                <Text>
                   Contac
                </Text>
            </Flex>
        </Flex>
    )
}