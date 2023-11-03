import { Button, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import { FC } from "react";
import { rules } from "../utils/rules";



const LoginForm: FC = () => {

    const submit = () => {
        
    }
    return (
        <Form
            onFinish={submit}
        >
            <FormItem
                label="Имя пользователя"
                name="username"
                rules={[rules.required("Введите имя пользователя")]}
            >
                <Input/>

            </FormItem>
            <FormItem
                label="Пароль"
                name="password"
                rules={[rules.required("Введите пароль")]}
            >
                <Input/>

            </FormItem>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}




export default LoginForm;