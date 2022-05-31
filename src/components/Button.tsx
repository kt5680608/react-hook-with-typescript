import { Button } from "react-bootstrap";

type ButtonProps = {
    handleClick: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => void;
};

export const ButtonComponent = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleClick(event, 1)}>클릭!</button>
    );
};
