import React, { useState } from "react";
import ScannerForm from "../components/scannerform";
import UserStatistics from "../components/userStats";
import { Reminder } from "../components/reminder";
import {Heading} from '@chakra-ui/react';
import avatar from './avatar.png';
import goldBadge from './goldBadge.png';
import '../App.css';

export function Dashboard() {
    const [status, setStatus] = useState('Upload a picture of your latest grocery receipt');

    const getIsResults = (status) => {
        setStatus(status)
    }
    return (
        <section className="dashboard-wrapper">
            <section className="dashboard-container">

                <section className="dashboard-scanner">
                    <h1> Dashboard </h1>
                    <Heading as='h3' size='md' style={{ textAlign: 'left' }}>
                        {status}
                    </Heading>
                    <ScannerForm getIsResults={getIsResults} />
                </section>

                <section className="dashboard-user">

                    <div className="user-info-container">
                        <img src={avatar} alt="avatar" className="avatar" />
                        <div>
                            <h1>Jasmine</h1>
                            <h2>London, UK</h2>
                        </div>

                        <img src={goldBadge} alt="goldBadge" className="goldBadge" />
                    </div>

                    <div>
                        <UserStatistics />
                    </div>



                    <div className="reminders-section">
                        <Heading as='h3' size='md' style={{ alignSelf: 'flex-start' }} ml={5}>
                            Reminders
                        </Heading>

                        <Reminder />
                        <Reminder />

                    </div>

                </section>
            </section>
        </section>
    )
}