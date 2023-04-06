import { Flex, Input, Select } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { CardItens } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { AppContext } from "../../context/AppContext";
import { Category, Product } from "../../types";

export const Home = () => {
  const { listItem } = useContext(AppContext)
  return (
    <Layout>
      <Flex width='90%' gap='1rem'>
        <Select variant='flushed' defaultValue='All' width='35%' >
            <option value='All'>All</option>
            <option value='mens items'>men's items</option>
            <option value='female items'>female items</option>
            <option value='electronics'>electronics</option>
        </Select>
        <Input variant='flushed' placeholder="digite" />
      </Flex>
      <Flex
        width='90vw'
        flexDirection='column'
        gap='1rem'
      >
        {listItem.map((item: Product): ReactNode => {
          return (
            <CardItens
              id={item.id}
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              value={item.value / 100}
              item={item}
            />
          )
        })}
      </Flex>
    </Layout>
  );
}



