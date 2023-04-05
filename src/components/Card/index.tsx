import { Flex, Image, Text } from "@chakra-ui/react"
import { Product } from "../../types"
import { ButtonPrimay } from "../ButtonPrimary"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { useNavigate } from "react-router-dom"

export const CardItens = (
  {
    id,
    name, 
    image, 
    description, 
    value, 
    item
  }: Product
) => {
  const navigate = useNavigate()
  const {setItemClicked} = useContext(AppContext)

  const handleClick = (item: Product)=>{
    setItemClicked([item])
    navigate('/detail')
  }

  return (
    <Flex
      gap='0.5rem'
      backgroundColor='blackAlpha.500'
      alignItems='flex-start'
      flexDirection='column'
      overflowX='auto'
      borderRadius='0.5rem'
      padding='0.5rem'
    >
      <Text as='b'>
        {name}
      </Text>
      <Flex alignItems='center' gap='0.5rem'>
        <Image
          boxSize='9.3rem'
          src={image}
          alt={name}
        />
        <Flex flexDirection='column' gap='0.5rem' width='10rem'>
          <Text>
          $ {value.toFixed(2)}
        </Text>
          <ButtonPrimay
            backgroundColor='teal.300'
            onClick={()=> handleClick(item)}
          >
            Detail View
          </ButtonPrimay>
          <ButtonPrimay
            
          >
            Add to cart
          </ButtonPrimay>
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