import { Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { NavLink, useNavigate } from "react-router-dom"
import { ButtonPrimay } from "../../components/ButtonPrimary"
import { Layout } from "../../components/Layout"
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { api } from "../../services/api";
import { setItem } from "../../utils/Storege";
import { Usuario } from "../../types";

interface IFormInputs {
    email: string
    password: string
}

export const Login = () => {
    const [show, setShow] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    const navigate = useNavigate()

    const handleClick = () => setShow(!show)

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        try {
            const userArray: Usuario[] = []
            const user = await
                api.get<Usuario[]>(
                    `/users?email=${data.email}&password=${data.password}`
                )
            if (user.data.length === 0) {
              return  alert('invalid email or password')
            }
            userArray.push(...user.data)

            navigate('/home')
            setItem("isLogged", String(userArray[0].isLogged))
            setItem("idUser", String(userArray[0].id))
            return 
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
                    fontSize='4xl'
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
                        <span
                            style={{ color: 'red' }}
                        >
                            {errors.email && "email is required"}
                        </span>
                        <InputGroup >
                            <Input
                                variant='flushed'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                {...register("password", { required: true })}
                            />
                            <InputRightElement >
                                <Button
                                    variant='ghost'
                                    size='sm'
                                    onClick={handleClick}>
                                    {show ? 'hide' : 'show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <span
                            style={{ color: 'red' }}
                        >
                            {errors.password && "password is required"}
                        </span>
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