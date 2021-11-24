type ChildrenProps = {
    children: React.ReactNode
}


export const ComponentAsChildrenProps = ({ children }: ChildrenProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

