type PersonProps = {
    name: {
        firstName: string
        lastName: string
    }
}


export const PersonObjectProps = ({ name }: PersonProps) => {
    return (
        <div>
            {name.firstName} {name.lastName}
        </div>
    )
}

