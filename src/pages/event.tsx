import { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";


const Event: FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { fetchGuets, createEvent, fetchEvents } = useAction()
    const { guests, events } = useTypedSelector(state => state.event)
    const { user } = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuets()
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalOpen(false);
        createEvent(event)
    }
    return (
        <Layout>
            <EventCalendar events={events} />
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
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    )
}


export default Event;
