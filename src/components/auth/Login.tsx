import { ProfileProps } from "./Profile";
type LoginProps = {
    isLoggedIn: boolean;
    Component: React.ComponentType<ProfileProps>;
};

export const Login = ({ isLoggedIn, Component }: LoginProps) => {
    if (isLoggedIn) {
        return <Component name="hoon" />;
    } else {
        return <div>로그인을 해주세요</div>;
    }
};
