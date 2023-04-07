import { ReactNode, useContext, useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"
import { getItem } from "../../utils/Storege"
import { ICart } from "../../types"
import { ListCart } from "../../components/ListCart"
import { Flex, Text } from "@chakra-ui/react"
import { transformToUSD } from "../../utils/Currency"
import { AppContext } from "../../context/AppContext"

export const Cart = () => {
    const {update} = useContext(AppContext)
    const [cart, setCart] = useState<ICart[]>([])
    let totalValue: number = 0

    const getCart = async () => {
        try {
            
            const cartUser = await api.get(`/carts?userId=${getItem("idUser")}`)

            return setCart(cartUser.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCart()
    }, [update])
    
    for (let i of cart) {
        totalValue += i.value * i.amount
    }
    
    return (
        <Layout>
            <Flex
                flexDirection='column'
                height='100%'
                width='100%'
                overflow='auto'
                gap='0.6rem'
                alignItems='center'
                justifyContent='flex-start'
            >
                <Text as='b' color='white'>
                    Your Shopping Cart
                </Text>
                <Text>
                    Total:{transformToUSD(totalValue)}
                </Text>
                {
                    cart.map((item: ICart): ReactNode => {
                        return (
                            <ListCart
                                name={item.name}
                                id={item.id}
                                value={item.value}
                                userId={item.userId}
                                amount={item.amount}
                                key={item.id}
                                categoryID={item.categoryID}
                                description={item.description}
                                productId={item.productId}
                            />
                        )
                    })
                }
            </Flex>
        </Layout>
    )
}