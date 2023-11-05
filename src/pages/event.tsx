import { FC, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Modal, Row } from "antd";
import EventForm from "../components/EventForm";


const Event: FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <EventCalendar events={[]}/>
            <Row justify={"center"}>
                <Button
                  onClick={() => setModalOpen(true)}
                > 
                Добавить событие 
                </Button>
            </Row>
            <Modal
                title=""
                open={modalOpen}
                footer={null}
                onCancel={() => setModalOpen(false)}
            >
               <EventForm/>
            </Modal>
        </div>
    )
}


export default Event;
