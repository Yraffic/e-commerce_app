import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { ButtonPrimay } from "../Button"
import { Product } from "../../types"



export const CardItens = (
  {
    name, 
    image, 
    description, 
    value
  }: Product 
) => {
  return (
    <Flex
      gap='0.5rem'
      backgroundColor='blackAlpha.200'
      alignItems='flex-start'
      flexDirection='column'
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
          >
            Detail View
          </ButtonPrimay>
          <ButtonPrimay
            backgroundColor='blackAlpha.300'
          >
            Add to cart
          </ButtonPrimay>
        </Flex>
      </Flex>
      <Text 
        width='90%'
        height='3rem'
        overflow='hidden'
      >
       {description}
      </Text>
    </Flex>
  )
}