import { Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { ButtonPrimay } from "../../components/ButtonPrimary"
import { Layout } from "../../components/Layout"
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface IFormInputs {
    email: string
    password: string
}

export const Login = () => {
    const [show, setShow] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    const handleClick = () => setShow(!show)

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        try {
            console.log(data.email)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <Flex
                flexDirection='column'
                alignItems='center'
                gap='2rem'
            >
                <Text
                    as='b'
                    color='white'
                >
                    Login
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex flexDirection='column' alignItems='center'>
                        <Input
                            variant='flushed'
                            placeholder='email'
                            {...register("email", { required: true })}
                        />
                        {errors.email && "email is required"}
                        <InputGroup size='md'>
                            <Input
                                variant='flushed'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                {...register("password", { required: true })}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button  h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? '🫣' : '👁'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {errors.password && "password is required"}
                    </Flex>
                    <ButtonPrimay type="submit" width='100%' marginTop='2rem'>
                        login
                    </ButtonPrimay>
                </form>
                <Text>
                    don't have an account? <NavLink style={{ color: 'blue' }} to='/register'> Register</NavLink>
                </Text>
            </Flex>
        </Layout>
    )
}