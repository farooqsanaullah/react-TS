
type FunctionProps = {
    value: string
    // handleChange: (event: React.ChangeEvent) => void    // this event have not event.target.value property
     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void // it work fine
}


export const InputComponentProps = ({ handleChange, value }: FunctionProps) => {
    return (<input type="text" value={value} onChange={handleChange}/>)
}

