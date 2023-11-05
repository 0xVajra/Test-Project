import { Button, DatePicker, Form, Input, Row } from "antd";
import { FC } from "react";
import { rules } from "../utils/rules";


const EventForm: FC = () => {
    return (
        <Form>
            <Form.Item
                label="Название события"
                name="description"
                rules={[rules.required("Обязательное поле")]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required("Обязательное поле")]}
            >
                <DatePicker />
            </Form.Item>
            <Row justify='end'>
            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    Создать
                </Button>
            </Form.Item>
            </Row>
             
        </Form>
    );
};

export default EventForm;