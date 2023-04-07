import { Flex, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ButtonPrimay } from "../ButtonPrimary"
import { getItem, remove } from "../../utils/Storege"

export const Header = () => {
    const navigate = useNavigate()

    const handleExit = ()=>{
        remove()
        navigate('/login')
    }

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
                onClick={() => navigate('/home')}
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
                    onClick={() => navigate('/cart')}
                    fontSize='0.9rem'
                >
                    Cart
                </ButtonPrimay>
                {
                    getItem("isLogged") ?
                        <ButtonPrimay
                            onClick={() => handleExit()}
                            fontSize='0.9rem'
                        >
                            exit
                        </ButtonPrimay>
                        :
                        <ButtonPrimay
                            onClick={() => navigate('/login')}
                            fontSize='0.9rem'
                        >
                            Login
                        </ButtonPrimay>
                }
            </Flex>
        </Flex>
    )
}