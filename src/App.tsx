import React from 'react';
import './App.scss';

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function TableElement({day, dance, month}: { day: number, dance?: string, month?: string }): React.ReactElement {
    const date = new Date();
    return <td style={date.getDate() === day ? {
        outline: '3px orange solid'
    } : undefined}>
        {day}&nbsp;{month || "февраля"}<br/>
        {dance && `20.00-22.00 ${dance}`}
    </td>
}

const WALTZ = "Медленный Вальс";
const TANGO = "Танго";
const WENSKII_WALTZ = "Веннский вальс";
const SLOWFOX = "Медленный Фокстрот";
const QUICKSTEP = "Квикстеп";
const SAMBA = "Самба";
const CHACHA = "Ча-ча-ча";
const RUMBA = "Румба";
const PASSODOBLE = "Пассодобль";
const JIVE = "Джайв";

function App() {
    return (
        <>
            <div className="header-wrapper">
                <section className="hero is-large">
                    <h2 className="subtitle pt-3">Расписание на февраль 2021</h2>
                    <table className="table">
                        <thead>
                        {DAYS.map(it => <th>{it}</th>)}
                        </thead>
                        <tbody>
                        <tr>
                            <TableElement day={1}
                                          dance={WALTZ}/>
                            <TableElement day={2}
                                          dance={JIVE}/>
                            <TableElement day={3}/>
                            <TableElement day={4}
                                          dance={SAMBA}/>
                            <TableElement day={5}
                                          dance={TANGO}/>
                            <TableElement day={6}/>
                            <TableElement day={7}/>
                        </tr>
                        <tr>
                            <TableElement day={8}
                                          dance={WENSKII_WALTZ}/>
                            <TableElement day={9}
                                          dance={CHACHA}/>
                            <TableElement day={10}/>
                            <TableElement day={11}
                                          dance={RUMBA}/>
                            <TableElement day={12}
                                          dance={SLOWFOX}/>
                            <TableElement day={13}/>
                            <TableElement day={14}/>
                        </tr>
                        <tr>
                            <TableElement day={15}
                                          dance={QUICKSTEP}/>
                            <TableElement day={16}
                                          dance={PASSODOBLE}/>
                            <TableElement day={17}/>
                            <TableElement day={18}
                                          dance={JIVE}/>
                            <TableElement day={19}
                                          dance={WALTZ}/>
                            <TableElement day={20}/>
                            <TableElement day={21}/>
                        </tr>
                        <tr>
                            <TableElement day={22}
                                          dance={TANGO}/>
                            <TableElement day={23}
                                          dance={SAMBA}/>
                            <TableElement day={24}/>
                            <TableElement day={25}
                                          dance={CHACHA}/>
                            <TableElement day={26}
                                          dance={WENSKII_WALTZ}/>
                            <TableElement day={27}/>
                            <TableElement day={28}/>
                        </tr>
                        </tbody>
                    </table>
                    <div className="hero-body"/>
                </section>
            </div>
        </>
    );
}

export default App;
