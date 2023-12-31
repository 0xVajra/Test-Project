import { Card, Row } from "antd";
import Layout from "antd/es/layout/layout";
import { FC } from "react";
import LoginForm from "../components/LoginForm";


const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    )
}


export default Login;
