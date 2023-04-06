import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { ButtonPrimay } from "../ButtonPrimary"

export const TableCart = () => {
    return (
        <TableContainer 
            width='90%'
            height='100%'
            overflow='auto'
        >
            <Table variant='simple'>
                <Thead backgroundColor='blackAlpha.300'>
                    <Tr>
                        <Th>Product</Th>
                        <Th>Amount</Th>
                        <Th isNumeric>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr >
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                        <Td>
                        <ButtonPrimay 
                            backgroundColor='red' 
                            color='white'
                            marginRight='0.5rem'
                        >
                             delete
                        </ButtonPrimay>
                        <ButtonPrimay
                            backgroundColor='teal.300'
                        >
                             Buy now
                        </ButtonPrimay>
                        </Td>
                    </Tr>

                </Tbody>
            </Table>
        </TableContainer>
    )
}