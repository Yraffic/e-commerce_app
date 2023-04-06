import { Flex, Text } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Flex
            backgroundColor='teal.700'
            width='100%'
            height='7rem'
            alignItems='center'
            justifyContent='center'
            padding='1.5rem'
        >
            <Flex flexDirection='column'>
                <Text>
                    Contac
                </Text>
            </Flex>
        </Flex>
    )
}