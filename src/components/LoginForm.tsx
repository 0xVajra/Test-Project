import { Button, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import { FC } from "react";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";




const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const {error,isLoading} = useTypedSelector(state => state.auth);
    const submit = () => {
        dispatch<any>(AuthActionCreators.login('user','123'))
        
    }
    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <FormItem
                label="Имя пользователя"
                name="username"
                rules={[rules.required("Введите имя пользователя")]}
            >
                <Input
                />
            </FormItem>
            <FormItem
                label="Пароль"
                name="password"
                rules={[rules.required("Введите пароль")]}
            >
                <Input/>
            </FormItem>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}




export default LoginForm;