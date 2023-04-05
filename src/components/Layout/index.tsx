import { Flex } from "@chakra-ui/react"
import { Footer } from "../Footer"
import { Header } from "../Header"

interface HTMLElement {
    children : any
}

export const Layout = ({children}: HTMLElement)=>{
    return(
        <Flex
            height='100vh'
            width='100vw'
            alignItems='center'
            justifyContent='space-between'
            flexDirection='column'
        >
            <Header />
            {children}
            <Footer />
        </Flex>
    )
}