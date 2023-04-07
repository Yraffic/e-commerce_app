import { Flex, Image, Input, Text } from "@chakra-ui/react"
import { Product } from "../../types"
import { ButtonPrimay } from "../ButtonPrimary"
import { ChangeEvent, useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { useNavigate } from "react-router-dom"
import { transformToUSD } from "../../utils/Currency"
import { api } from "../../services/api"
import { getItem } from "../../utils/Storege"

export const CardItens = (
  {
    name,
    image,
    description,
    value,
    item
  }: Product
) => {
  const navigate = useNavigate()
  const { setItemClicked, update, setUpdate} = useContext(AppContext)
  const [inputValue, setInputValue] = useState<number>(1)
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value))
  }
  

  const handleClick = (item: Product) => {
    setItemClicked([item])
    navigate('/detail')
  }

  const handleAddToCart = async(item: Product)=>{
    try {
      if(!getItem("isLogged")){
        return alert('it is necessary to be logged in')
      }
      const productToCart = {
        id: 4,
        userId: getItem('idUser'),
        productId: item.id,
        amount: inputValue,
        name: item.name,
        value: item.value,
        description: item.description,
        image: item.image,
        categoryID: item.categoryId
      } 

      const addCart = await api.post('/carts', {
        productToCart
      })

      if(addCart.status === 201){
        alert('item add')
      }
      setUpdate(!update)
    } catch (error) {
      alert('error serve')
      console.log(error)
    }
  }

  return (
    <Flex
      gap='0.5rem'
      backgroundColor='teal.300'
      alignItems='flex-start'
      flexDirection='column'
      overflowX='auto'
      borderRadius='0.5rem'
      padding='0.5rem'
    >
      <Text as='b' fontSize='3xl'>
        {name}
      </Text>
      <Flex alignItems='center' gap='0.5rem'>
        <Image
          boxSize='9.3rem'
          src={image}
          alt={name}
        />
        <Flex flexDirection='column' gap='0.5rem'>
          <Text>
            {transformToUSD(value)}
          </Text>
          <ButtonPrimay
            backgroundColor='teal.700'
            onClick={() => handleClick(item)}
          >
            Detail View
          </ButtonPrimay>
          <ButtonPrimay
          onClick={()=> handleAddToCart(item)}
          >
            Add to cart
          </ButtonPrimay>
          <Input
            width='50%'
            value={inputValue}
            onChange={handleChange}
            placeholder='number'
            size='sm'
          />
        </Flex>
      </Flex>
      <Text
        width='90%'
        whiteSpace='nowrap'
        overflow='hidden'
        textOverflow='ellipsis'
      >
        {description}
      </Text>
    </Flex>
  )
}