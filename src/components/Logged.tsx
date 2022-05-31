import { useState } from "react";
type loggedProps = {
    user: string | undefined;
};
export const Logged = ({ user }: loggedProps) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLoggedIn = () => {
        setLoggedIn(!loggedIn);
    };
    return (
        <div>
            {loggedIn ? (
                <>
                    <h1>현재 {user}님이 로그인 중입니다</h1>
                    <button onClick={handleLoggedIn}>로그아웃</button>{" "}
                </>
            ) : (
                <>
                    <h1>로그인 해주세요</h1>
                    <button onClick={handleLoggedIn}>로그인</button>
                </>
            )}
        </div>
    );
};
