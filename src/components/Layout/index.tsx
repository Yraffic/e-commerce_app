import { Flex } from "@chakra-ui/react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { IProps } from "../../types"


export const Layout = ({children}: IProps)=>{
    return(
        <Flex
            height='100vh'
            width='100vw'
            backgroundColor='blackAlpha.400'
            overflow='auto'
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