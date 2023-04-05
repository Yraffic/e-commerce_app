import { Flex } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { CardItens } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { AppContext } from "../../context/AppContext";
import { Product } from "../../types";

export const Home = () => {
  const {listItem} = useContext(AppContext)
  

  return (
    <Layout>
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
              value={item.value/100}
              item={item}
            />
          )
        })}
      </Flex>
    </Layout>
  );
}



