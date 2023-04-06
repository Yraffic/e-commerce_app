import { Flex, Input, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { ButtonPrimay } from "../../components/ButtonPrimary"
import { Layout } from "../../components/Layout"

export const Login = () => {
   

    return (
        <Layout>
            <Flex 
                flexDirection='column'
                gap='2rem'
                
            >
                <Text
                    as='b'
                    color='white'
                >
                    Login
                </Text>
                <Input variant='flushed' placeholder='Nome de Usuario' />
                <Input variant='flushed' placeholder='Senha' />
                <ButtonPrimay>
                    Entrar
                </ButtonPrimay>
                <Text>
                    don't have an account? <NavLink style={{color:'blue'}} to='/register'> Register</NavLink>
                </Text>
            </Flex>
        </Layout>
    )
}