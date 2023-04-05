import { Box, Flex, Grid } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { CardItens } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { api } from "../../services/api";
import { Product } from "../../types";






export const Home = () => {
  const [listItem, setListItem] = useState<[]>([])

  const listProduct = async () => {
    try {
      const products = await api.get('/products')

      setListItem(products.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listProduct()
  }, [])

  return (
    <Layout>
      <Flex
        width='95%'
        flexDirection='column'
        gap='1rem'
      >
        {listItem.map((item: Product): ReactNode => {
          return (
            <CardItens
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              value={item.value/100}
              id={item.id}
            />
          )
        })}
      </Flex>
    </Layout>
  );
}



