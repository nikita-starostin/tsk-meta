import React from 'react';
import './App.scss';
import {CURRENT_MONTH_NAME} from './app.config';
import {WEEK_DAYS, DAYS_PROPS} from './app.constants';
import TdDay from './components/TdDay/TdDay';

export default function App() {
    // some more comments for Lidia
    // new code added
    return (
        <>
            <div className="header-wrapper">
                <section className="hero is-large">
                    <h2 className="subtitle pt-3">Расписание на {CURRENT_MONTH_NAME} 2021</h2>
                    <table className="table">
                        <thead>
                        {WEEK_DAYS.map(it => <th>{it}</th>)}
                        </thead>
                        <tbody>
                        {DAYS_PROPS.map((days, daysIndex) =>
                            <tr key={daysIndex}>
                                {
                                    days.map((dayProps, dayPropsIndex) =>
                                        <TdDay key={dayPropsIndex} {...dayProps} />)
                                }
                            </tr>)}
                        </tbody>
                    </table>
                    <div className="hero-body"/>
                </section>
            </div>
        </>
    );
}

