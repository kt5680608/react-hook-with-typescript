type StatusProps = {
    status: "success" | "loading" | "fail";
};

export const Status = ({ status }: StatusProps) => {
    let message;
    if (status === "success") {
        message = "데이터 불러오기 성공";
    } else if (status === "loading") {
        message = "조금만 기다려주세요";
    } else if (status === "fail") {
        message = "데이터 불러오기 실패";
    }
    return <h2>상태: {message}</h2>;
};
