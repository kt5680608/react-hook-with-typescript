// CSS의 inline styling은 React.CSSProperties로 받아올 수 있음

type ContainerProps = {
    styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
    return <div style={props.styles}>여기는 텍스트 공간입니다</div>;
};
