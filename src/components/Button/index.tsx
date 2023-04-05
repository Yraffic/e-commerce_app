import { Button, ButtonProps } from "@chakra-ui/react"


export const ButtonPrimay = ({children, ...props}: ButtonProps)=>{
    return(
        <Button
            backgroundColor='whiteAlpha.700'
            {...props}
        >
            {children}
        </Button>
    )
}