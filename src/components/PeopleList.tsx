type PeopleListProps = {
    names: {
        first: string;
        second: string;
    }[];
};

export const PeopleList = (props: PeopleListProps) => {
    return (
        <div>
            {props.names.map((name) => {
                return (
                    <>
                        {name.first}
                        {name.second}
                    </>
                );
            })}
        </div>
    );
};
