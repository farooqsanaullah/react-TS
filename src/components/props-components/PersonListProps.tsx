// first away defind of props

type PersonProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}



// second away defind of props

// type PersonObject = {
//     firstName: string
//     lastName: string
// }

// type PersonProps = {
// names:PersonObject []
// }






export const PersonListProps = ({ names }: PersonProps) => {
    return (
        <div>
            {names.map((name, index) => (<h2 key={index}>{name.firstName} {name.lastName}</h2>))}
        </div>)
}

