import { Flex, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { ButtonPrimay } from "../../components/ButtonPrimary"
import { Layout } from "../../components/Layout"
import { AppContext } from "../../context/AppContext"
import { useNavigate } from "react-router-dom"
import { transformToUSD } from "../../utils/Currency"

export const PageDetail = () => {
    const { itemClicked } = useContext(AppContext)
    const navigate = useNavigate()
    
    return (
        <Layout>
            <Flex
                flexDirection='column'
                alignItems='center'
                width='90vw'
            >
                <Image boxSize='auto' src={itemClicked[0].image} />
                <Text as='b' fontSize='4xl'>
                    {itemClicked[0].name}
                </Text>
                <Text marginBottom='3rem'>
                    {itemClicked[0].description}
                </Text>
                <Text marginBottom='3rem'>
                    {transformToUSD(itemClicked[0].value)}
                </Text>
                <Flex justifyContent='center' gap='1rem' width='100%'>
                    <ButtonPrimay backgroundColor='teal.700'>
                        Buy
                    </ButtonPrimay>
                    <ButtonPrimay >
                        add to cart
                    </ButtonPrimay>
                    <ButtonPrimay
                        backgroundColor='red.400'
                        onClick={()=> navigate('/home')}
                    >
                        to go back
                    </ButtonPrimay>
                </Flex>
            </Flex>
        </Layout>
    )
}