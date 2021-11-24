type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}


export const Greet = ({name,messageCount,isLoggedIn}: GreetProps)=> {
    return (
        <div>
           {isLoggedIn ?`welcome ${name}!. You have ${messageCount} messages.` :"Welcome as guest" }
        </div>
    )
}  

