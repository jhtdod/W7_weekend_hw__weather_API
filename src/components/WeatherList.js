import React from "react";
import Day from "./Day";
import "bootstrap/dist/css/bootstrap.min.css"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";

const WeatherList = ({ days }) => {

    const dayNodes = days.map(day => {
        return (
            <div>
                <Nav variant="tabs">
                    <NavItem>
                        <NavLink eventKey={day.date}>{day.date}</NavLink>
                    </NavItem>
                </Nav>
                <TabContent>
                    <TabPane eventKey={day.date}>
                        <Day
                            date={day.date}
                            tempMax={day.tempMax}
                            tempMin={day.tempMin}
                            precip={day.precip}
                            sunrise={day.sunrise}
                            sunset={day.sunset}
                            windspeed={day.windspeed}
                            key={day.id}
                        />
                    </TabPane>
                </TabContent>
            </div>
        )


    })

    return (
        <div>
            <div className="display-flex">
                <TabContainer>
                    {dayNodes}
                </TabContainer>

            </div>
        </div>
    )
}

export default WeatherList;