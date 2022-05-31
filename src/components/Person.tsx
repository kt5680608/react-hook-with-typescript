type PersonProps = {
    name: {
        first: string;
        second: string;
    };
};

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first}
            {props.name.second}
        </div>
    );
};
