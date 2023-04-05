import { Flex } from "@chakra-ui/react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Props } from "../../types"


export const Layout = ({children}: Props)=>{
    return(
        <Flex
            height='100vh'
            width='100vw'
            alignItems='center'
            flexDirection='column'
            justifyContent='space-between'
            position='relative'
            gap='0.5rem'
        >
            <Header />
            {children}
            <Footer />
        </Flex>
    )
}