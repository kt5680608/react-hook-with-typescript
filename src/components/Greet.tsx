type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {!props.isLoggedIn ? (
                    <h1>Login Please</h1>
                ) : (
                    <h1>
                        {props.name}! You have {props.messageCount} unread
                        messages
                    </h1>
                )}
            </h2>
        </div>
    );
};
