import React from "react";
import Day from "./Day";
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from "react-bootstrap";
import '../static/WeatherListComponent.css'
import da from "date-fns/locale/da/index";
import moment from "moment";

const WeatherList = ({ days }) => {

    const dayTabs = days.map(day => {
        return (
            < NavItem >
                <NavLink eventKey={day.date}>
                    <h6>{moment(day.date).format('ddd Do')} </h6>
                    <p>{day.tempMin}&#176;C {day.tempMax}&#176;C</p>
                </NavLink>
            </NavItem >
        )
    })

    const dayNodes = days.map(day => {
        return (
            <TabPane eventKey={day.date}>
                <Day
                    day={day}
                    key={day.id}
                />
            </TabPane>
        )
    })

    return (
        <div className="tabs">
            {days.length > 0 ?
                <TabContainer defaultActiveKey={days[0].date}>
                    <Nav>
                        {dayTabs}
                    </Nav>
                    <TabContent>
                        {dayNodes}
                    </TabContent>
                </TabContainer> :
                null}
        </div>
    )
}

export default WeatherList;