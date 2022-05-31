import React, { FC, ChangeEvent, useState, useEffect } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PeopleList } from "./components/PeopleList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { ButtonComponent } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { Logged } from "./components/Logged";
import { Login } from "./components/auth/Login";
import { Profile } from "./components/auth/Profile";
const App: FC = () => {
    const [input, setInput] = useState("");
    const [user, setUser] = useState<string | undefined>();
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        setUser("김정훈");
    });
    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log(input);
    };
    const personName = {
        first: "김",
        second: "정훈",
    };
    const nameList = [
        {
            first: "민",
            second: "경남",
        },
        {
            first: "이",
            second: "은재",
        },
        {
            first: "민",
            second: "경남",
        },
    ];
    return (
        <div className="App">
            <Greet name="Hoon" messageCount={3} isLoggedIn={false} />
            <Person name={personName} />
            <PeopleList names={nameList} />
            <Status status="success" />
            <Oscar>
                <Heading>오스카는 나의 것</Heading>
            </Oscar>
            <ButtonComponent
                handleClick={(event, id) => {
                    console.log("hihi", event, id);
                }}
            />
            <Input value={input} onChange={onChangeInputValue} />
            <Container
                styles={{ border: "1px solid black", padding: "1rem" }}
            />
            <Logged user={user} />
            <div>
                여기는 auth component입니다.
                <button
                    onClick={() => {
                        setIsLogin(!isLogin);
                    }}
                >
                    로그인 눌러주세요
                </button>
                <Login isLoggedIn={isLogin} Component={Profile} />
            </div>
        </div>
    );
};

export default App;
