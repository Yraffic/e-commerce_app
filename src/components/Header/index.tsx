import { Flex, Text } from "@chakra-ui/react"
import { ButtonPrimay } from "../ButtonPrimary"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <Flex
            backgroundColor='teal.700'
            width='100%'
            alignItems='center'
            justifyContent='center'
            padding='2.5rem'
            position='relative'
        >
            <Flex
                flexDirection='column'
                alignItems='center'
                color='white'
                onClick={()=> navigate('/home')}
                cursor='pointer'
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
            <Flex 
                gap='0.5rem'
                position='absolute'
                right='0.5rem'
                bottom='0.5rem'
            >
                <ButtonPrimay
                    width='3rem'
                    onClick={() => navigate('/cart')}
                >
                    Cart
                </ButtonPrimay>
                <ButtonPrimay
                    width='3rem'
                    onClick={() => navigate('/login')}
                >
                    Login
                </ButtonPrimay>
            </Flex>
        </Flex>
    )
}