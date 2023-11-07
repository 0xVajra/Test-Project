import { Calendar } from "antd"
import { FC } from "react";
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";
import type { Dayjs } from 'dayjs'
import type { CalendarProps } from "antd";

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (value) => {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    }
    return (
        <Calendar
            cellRender={cellRender}
        />
    );
};


export default EventCalendar;