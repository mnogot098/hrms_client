import { Typography } from "antd";
import { FC } from "react";
import { SignIn } from "../hrms_authentication/signin";

const { Title } = Typography;

export const HomePage: FC = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div>
          <img src="/hr_home.jpg" height={400} alt="HR Image" />
        </div>
        <div style={{ width:"400px"}}>
        <Title level={3}>Login</Title>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
