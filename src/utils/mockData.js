// ─── Calendário: configuração da grade ────────────────────────────────────────

const START_HOUR = 7;
const END_HOUR = 22;

const HOURS = [];
for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
    HOURS.push(hour);
}

export const GRID_START = START_HOUR * 60;
export const HOUR_HEIGHT = 64;
export const DAY_COLS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
export { HOURS };

// ─── Calendário: dados mockados ───────────────────────────────────────────────

export const INITIAL_EVENTS = [
    { id: 1, dayOffset: 0, title: 'PE – Handball', start: '08:00', end: '09:30' },
    { id: 2, dayOffset: 0, title: 'Track Practice', start: '12:00', end: '13:00' },
    { id: 3, dayOffset: 1, title: 'Basketball Practice', start: '10:00', end: '12:00' },
    { id: 4, dayOffset: 2, title: 'Volleyball', start: '08:00', end: '09:00' },
    { id: 5, dayOffset: 2, title: 'Futsal', start: '14:00', end: '15:30' },
    { id: 6, dayOffset: 3, title: 'Athletics', start: '11:00', end: '12:00' },
    { id: 7, dayOffset: 4, title: 'PE – Volleyball', start: '08:00', end: '09:30' },
    { id: 8, dayOffset: 4, title: 'Basketball Practice', start: '11:00', end: '12:30' },
    { id: 9, dayOffset: 4, title: 'Futsal Tournament', start: '14:00', end: '16:00' },
];

// ─── Dashboard: dados mockados ────────────────────────────────────────────────

export const weekData = [
    { day: 'Mon', value: 35 },
    { day: 'Tue', value: 62 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 55 },
    { day: 'Fri', value: 88, active: true },
    { day: 'Sat', value: 18 },
    { day: 'Sun', value: 10 },
];

export const upcomingEvents = [
    { id: 1, title: 'PE Class – Volleyball', time: '08:00 – 09:30', prof: 'Prof. Lima' },
    { id: 2, title: 'Basketball Practice', time: '11:00 – 12:30', prof: 'Prof. Carlos', active: true },
    { id: 3, title: 'Futsal Tournament', time: '14:00 – 16:00', prof: 'Prof. Costa' },
    { id: 4, title: 'Athletics Warm-Up', time: '16:30 – 17:30', prof: 'Prof. Ramos' },
];

// ─── Colaboradores: dados mockados ────────────────────────────────────────────

export const collaborators = [
    { id: 1, name: 'Maria Santos', role: 'Principal', email: 'm.santos@escola.edu' },
    { id: 2, name: 'Ana Ferreira', role: 'Teacher', email: 'a.ferreira@escola.edu' },
    { id: 3, name: 'Carlos Lima', role: 'Teacher', email: 'c.lima@escola.edu' },
    { id: 4, name: 'Rafael Alves', role: 'Student Rep.', email: 'r.alves@escola.edu' },
    { id: 5, name: 'Julia Ramos', role: 'Teacher', email: 'j.ramos@escola.edu' },
    { id: 6, name: 'Pedro Costa', role: 'Teacher', email: 'p.costa@escola.edu' },
];