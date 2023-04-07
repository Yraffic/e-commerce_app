import { Flex, Text } from "@chakra-ui/react"
import { ButtonPrimay } from "../ButtonPrimary"
import { ICart } from "../../types"
import { transformToUSD } from "../../utils/Currency"
import { api } from "../../services/api"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"


export const ListCart = ({name, id, amount, value, userId}:ICart) => {
    const {setUpdate, update} = useContext(AppContext)


    const handleDelete = async(id: number)=>{
        try {
            const product = await api.delete(`/carts/${id}`)
            if(product.status === 200){
                alert('item delete')
            }
            setUpdate(!update)
        } catch (error) {
            alert('error serve')
        }
    }

    const handleBuy = async(id: number)=>{
        try {
            const buyItem = await api.get(`/carts/${id}`)

            if(buyItem.status === 200){
                alert('purchased item')
            }
            const product = await api.delete(`/carts/${id}`)

            setUpdate(!update)
        } catch (error) {
            alert('error serve')
        }
    }

    return (
        <Flex
            width='95%'
            backgroundColor='teal.300'
            justifyContent='space-evenly'
            gap='0.5rem'
            padding='1rem'
            borderRadius='1rem'
            alignItems='center'
            overflow='auto'
        >
            <Text
            >
                {name}
            </Text>
            <Text  >
                {amount}
            </Text>
            <Text >
                {transformToUSD(value * amount)}
            </Text>
            <ButtonPrimay
                onClick={()=> handleDelete(id)}
            >
                delete
            </ButtonPrimay>
            <ButtonPrimay
            onClick={()=> handleBuy(id)}
            >
                Buy
            </ButtonPrimay>
        </Flex>
    )
}