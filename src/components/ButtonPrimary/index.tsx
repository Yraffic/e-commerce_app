import { Button, ButtonProps } from "@chakra-ui/react"


export const ButtonPrimay = ({children, ...props}: ButtonProps)=>{
    return(
        <Button
            backgroundColor='whiteAlpha.800'
            height='2rem'
            {...props}
        >
            {children}
        </Button>
    )
}