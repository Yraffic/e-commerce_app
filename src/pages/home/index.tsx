import { ReactNode, useEffect, useState } from "react";
import { CardItens } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { api } from "../../services/api";
import { Product } from "../../types";
import { Flex, Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";






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

  console.log(listItem)

  return (
    <Layout>
      {listItem.map((item: Product): ReactNode => {
        return (
          <Flex width='100vw'>
            <Grid
              templateColumns='repeat(3, 1fr)'
              gap='0.5rem'
            >
              <CardItens
                key={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                value={item.value}
                id={item.id}
              />
            </Grid>
          </Flex>
        )
      })}
    </Layout>
  );
}


