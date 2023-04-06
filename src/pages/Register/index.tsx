import { Flex, Input, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { ButtonPrimay } from "../../components/ButtonPrimary"
import { Layout } from "../../components/Layout"

export const Register = () => {
    

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
                <Input variant='flushed' placeholder='username' />
                <Input variant='flushed' placeholder='email' />
                <Input variant='flushed' placeholder='password' />
                <Input variant='flushed' placeholder='confirm password' />
                <ButtonPrimay>
                    Register
                </ButtonPrimay>
                <Text>
                    do you have an account?<NavLink style={{color:'blue'}} to='/login'> Login</NavLink>
                </Text>
            </Flex>
        </Layout>
    )
}