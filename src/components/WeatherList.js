import React from "react";
import Day from "./Day";
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from "react-bootstrap";
import '../static/WeatherListComponent.css'
import moment from "moment";
import Icon from "./Icon";
import BarChart from "./BarChart";

const WeatherList = ({ days }) => {

    const dayTabs = days.map(day => {
        return (
            < NavItem key={day.id}>
                <NavLink eventKey={day.date}>
                    <h6>{moment().format('ddd Do') === moment(day.date).format('ddd Do') ?
                        'Today':
                        moment(day.date).format('ddd Do')
                    }
                    </h6>
                    <div className="display-flex">
                        <Icon key={day.id} weatherCode={day.weatherCode} keyInput={"icon"} />
                        <div className="temps">
                            <p className="temp-max">{day.tempMax}&#176;C</p>
                            <p>{day.tempMin}&#176;C</p>
                        </div>
                    </div>
                </NavLink>
            </NavItem >
        )
    })

    const dayNodes = days.map(day => {
        return (
            <TabPane key={day.id} eventKey={day.date}>
                <div className="tab-content-flex">
                    <Day day={day} />
                    <BarChart day={day} />
                </div>
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
                </TabContainer>
                :
                null}
        </div>
    )
}

export default WeatherList;