// first away defind of props

type UnionProps = {
    status:"loading" | "success" | "error"
}






export const StatusUnionProps = ({ status }: UnionProps) => {
    let message:string = '';
    if(status === 'loading'){
        message = 'Loading...';
    }
    else if(status === 'success')
    {
        message = 'Data fetch successfully';
    }
    else if(status === 'error')
    {
        message = 'Error in fetching data';
    }

    return (<div>
        {message}
    </div>)
}

