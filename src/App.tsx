import React from 'react';
import './App.scss';

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function TableElement({day, dance, month}: { day: number, dance?: string, month?: string }): React.ReactElement {
    const date = new Date();
    return <td style={date.getDate() === day
    && ((date.getMonth() === 2 && !month) // current month and current day
        || (date.getMonth() > 2 && !!month)) // next month and current day
        ? {
            outline: '3px orange solid'
        } : undefined}>
        {day}&nbsp;{month || "апреля"}<br/>
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
const PASODOBLE = "Пасодобль";
const JIVE = "Джайв";

function App() {
    return (
        <>
            <div className="header-wrapper">
                <section className="hero is-large">
                    <h2 className="subtitle pt-3">Расписание на март 2021</h2>
                    <table className="table">
                        <thead>
                        {DAYS.map(it => <th>{it}</th>)}
                        </thead>
                        <tbody>
                        <tr>
                            <TableElement day={5}
                                          dance={TANGO}/>
                            <TableElement day={6}
                                          dance={RUMBA}/>
                            <TableElement day={7}/>
                            <TableElement day={8}
                                          dance={PASODOBLE}/>
                            <TableElement day={9}
                                          dance={WENSKII_WALTZ}/>
                            <TableElement day={10}/>
                            <TableElement day={11}/>
                        </tr>
                        <tr>
                            <TableElement day={12}
                                          dance={SLOWFOX}/>
                            <TableElement day={13}
                                          dance={JIVE}/>
                            <TableElement day={14}/>
                            <TableElement day={15}
                                          dance={SAMBA}/>
                            <TableElement day={16}
                                          dance={QUICKSTEP}/>
                            <TableElement day={17}/>
                            <TableElement day={18}/>
                        </tr>
                        <tr>
                            <TableElement day={19}
                                          dance={WALTZ}/>
                            <TableElement day={20}
                                          dance={CHACHA}/>
                            <TableElement day={21}/>
                            <TableElement day={22}
                                          dance={RUMBA}/>
                            <TableElement day={23}
                                          dance={TANGO}/>
                            <TableElement day={24}/>
                            <TableElement day={25}/>
                        </tr>
                        <tr>
                            <TableElement day={26}
                                          dance={WENSKII_WALTZ}/>
                            <TableElement day={27}
                                          dance={PASODOBLE}/>
                            <TableElement day={28}/>
                            <TableElement day={29}
                                          dance={JIVE}/>
                            <TableElement day={30}
                                          dance={SLOWFOX}/>
                            <TableElement day={1}
                                          month='мая'/>
                            <TableElement day={2}
                                          month='мая'/>
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
