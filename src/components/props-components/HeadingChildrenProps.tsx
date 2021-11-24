type ChildrenProps = {
    children: string
}


export const HeadingChildrenProps = ({ children }: ChildrenProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

