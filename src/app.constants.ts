import {
    DAYS_IN_CURRENT_MONTH,
    FIRST_DAY_IN_CURRENT_MONTH_IN_FIRST_MONDAY, FIRST_LATIN_INDEX,
    FIRST_STANDARD_INDEX,
    NEXT_MONTH_NAME_RP
} from './app.config';
import {ITdDayProps} from './components/TdDay/TdDay.models';
import {NextIndex} from './infrastructure/nextIndex';

export const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const LATIN_DAYS = [WEEK_DAYS[1], WEEK_DAYS[3]];
export const STANDARD_DAYS = [WEEK_DAYS[0], WEEK_DAYS[4]];

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
export const STANDARD_SEQUENCE = [WALTZ, TANGO, WENSKII_WALTZ, SLOWFOX, QUICKSTEP];
export const LATIN_SEQUENCE = [SAMBA, CHACHA, RUMBA, PASODOBLE, JIVE];

const LATIN_NEXT_INDEX = new NextIndex(FIRST_LATIN_INDEX, LATIN_SEQUENCE.length);
const STANDARD_NEXT_INDEX = new NextIndex(FIRST_STANDARD_INDEX, STANDARD_SEQUENCE.length);
const DAY_IN_MONTH_PROVIDER = new NextIndex(FIRST_DAY_IN_CURRENT_MONTH_IN_FIRST_MONDAY, DAYS_IN_CURRENT_MONTH);

const daysProps: ITdDayProps[][] = [];
let lastDayPrinted = false;
let nextStarted = false;

while (!lastDayPrinted) {
    const nextPropsArray: ITdDayProps[] = [];
    for (let dayOfWeek = 0; dayOfWeek < WEEK_DAYS.length; dayOfWeek++) {
        const currDay = DAY_IN_MONTH_PROVIDER.next() + 1; // as next changes from 0 to max day - 1
        if (currDay === DAYS_IN_CURRENT_MONTH) {
            lastDayPrinted = true;
            nextStarted = true;
        }

        let latin = '';
        if (LATIN_DAYS.includes(WEEK_DAYS[dayOfWeek])) {
            latin = LATIN_SEQUENCE[LATIN_NEXT_INDEX.next()];
        }

        let standard = '';
        if (STANDARD_DAYS.includes(WEEK_DAYS[dayOfWeek])) {
            standard = STANDARD_SEQUENCE[STANDARD_NEXT_INDEX.next()]
        }

        nextPropsArray.push({
            dance: latin || standard,
            month: nextStarted ? NEXT_MONTH_NAME_RP : '',
            day: currDay
        });
    }
    daysProps.push(nextPropsArray);
}

export const DAYS_PROPS = daysProps;
