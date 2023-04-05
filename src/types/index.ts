import { ReactNode } from "react"

export interface Product {
    id: number
    name: string
    description: string
    value: number
    image: string
    item: Product
}

export interface Props {
    children: ReactNode 
}

export interface IAppcontext {
    isLogged: boolean
    setIsLogged: ( isLoggedIn: boolean)=> void
    listItem: Product[]
    itemClicked: Product[]
    setItemClicked: (itemCliked: Product[])=> void
}
