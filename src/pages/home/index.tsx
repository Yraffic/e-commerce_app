import { Flex, Input, Select } from "@chakra-ui/react";
import { ReactNode, useContext, useState } from "react";
import { CardItens } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { AppContext } from "../../context/AppContext";
import { IProduct } from "../../types";

export const Home = () => {
  const [filter, setFilter] = useState('')
  const { listItem, setValueSelect } = useContext(AppContext)

  const filterList = (value: string)=> {
      if(filter === ''){
        setValueSelect('/products')
      }

      setFilter(value)
      setValueSelect(`/products?name_like=${value}`)
  }

  return (
    <Layout>
      <Flex width='90%' gap='1rem'>
        <Select
          variant='flushed'
          defaultValue='/products'
          width='35%'
          onChange={(e) => setValueSelect(e.target.value)}
        >
          <option value='/products'>All</option>
          <option value='/products?categoryID=1'>men's items</option>
          <option value='/products?categoryID=2'>female items</option>
          <option value='/products?categoryID=3'>electronics</option>
        </Select>
        <Input
          variant='flushed'
          placeholder="digite"
          value={filter}
          onChange={(e) => filterList(e.target.value)} 
        />
      </Flex>
      <Flex
        width='90vw'
        flexDirection='column'
        gap='1rem'
      >
        {listItem.map((item: IProduct): ReactNode => {
          return (
            <CardItens
              id={item.id}
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              value={item.value}
              item={item}
              categoryId={item.categoryId}
            />
          )
        })}
      </Flex>
    </Layout>
  );
}



