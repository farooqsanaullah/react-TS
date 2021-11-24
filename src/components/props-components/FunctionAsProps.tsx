// without parameters
// type FunctionProps = {
//     handleClick: () => void
// }


// with parameters from Mouse events
type FunctionProps = {
    // handleClick: (event: React.MouseEvent,id:number) => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void
}


export const FunctionAsProps = ({ handleClick }: FunctionProps) => {
    return (<button onClick={(event) => handleClick(event,1)}>Click me</button>)
}

