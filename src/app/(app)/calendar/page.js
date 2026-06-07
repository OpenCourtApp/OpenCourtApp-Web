'use client'

import { SideBar } from "@/components/SideBar/SideBar";
import { addDays, formatWeekRange, timeToMinutes } from "@/utils/formatDate";
import { useCalendar } from "@/hooks/useCalendar";
import { Plus, ChevronLeft, ChevronRight, Pencil, Trash2 } from 'lucide-react';
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Modal } from "@/components/Modal/Modal";
import { Calendar, Clock } from 'react-feather';
import styles from './calendar.module.css';
import { INITIAL_EVENTS, DAY_COLS, HOURS, GRID_START, HOUR_HEIGHT } from "@/utils/mockData";

function calculateEventStyle(event) {
    const startMin = timeToMinutes(event.start) - GRID_START;
    const endMin = timeToMinutes(event.end) - GRID_START;
    const top = (startMin / 60) * HOUR_HEIGHT;
    const height = ((endMin - startMin) / 60) * HOUR_HEIGHT;
    return { top, height };
}

export default function CalendarPage() {
    const {
        weekStart,
        events,
        popover,
        popoverRef,
        isModalOpen,
        editingEvent,
        goToPrevWeek,
        goToNextWeek,
        goToCurrentWeek,
        openPopoverForEvent,
        deleteEventById,
        openEditModal,
        closeModal,
        closePopover,
        formatEventPopoverDate,
    } = useCalendar(INITIAL_EVENTS);

    const today = new Date();
    // serve para zerar o tempo, assim a comparação de datas só leva em conta o dia, mês e ano
    today.setHours(0, 0, 0, 0);

    return (
        <div className={styles.container}>
            <SideBar />

            <main className={styles.main} onClick={closePopover}>
                <Header
                    title="Calendar"
                    action={
                        <Button onClick={() => openEditModal(null)} className={styles.btnNewBooking}>
                            <Plus size={18} strokeWidth={3.5} />
                            New Booking
                        </Button>
                    }
                />

                {/* Barra de navegação da semana */}
                <div className={styles.weekNav}>
                    <button className={styles.navBtn} onClick={goToPrevWeek}><ChevronLeft size={16} /></button>
                    <span className={styles.weekRange}>{formatWeekRange(weekStart)}</span>
                    <button className={styles.navBtn} onClick={goToNextWeek}><ChevronRight size={16} /></button>
                    <button className={styles.todayBtn} onClick={goToCurrentWeek}>Today</button>
                </div>

                {/* Grade do calendário */}
                <div className={styles.calendarWrapper}>

                    {/* Cabeçalho das colunas de dias */}
                    <div className={styles.headerRow}>
                        <div className={styles.timeGutter} />
                        {DAY_COLS.map((label, i) => {
                            const date = addDays(weekStart, i);
                            const isToday = date.getTime() === today.getTime();
                            return (
                                <div key={label} className={styles.dayHeader}>
                                    <span className={styles.dayName}>{label}</span>
                                    <span className={`${styles.dayNumber} ${isToday ? styles.dayNumberToday : ''}`}>
                                        {date.getDate()}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Grade com scroll */}
                    <div className={styles.gridScroll}>
                        <div className={styles.grid}>

                            {/* Rótulos de horário */}
                            <div className={styles.timeCol}>
                                {HOURS.map(hour => (
                                    <div key={hour} className={styles.timeCell}>
                                        {String(hour).padStart(2, '0')}:00
                                    </div>
                                ))}
                            </div>

                            {/* Colunas dos dias */}
                            {/* Preciso do '_' pois ele significa 'não usado' 
                            (em um .map(), ele tem como primeiro parâmetro um valor a ser passado, que nao é interessante para nós ) 
                            */}
                            {DAY_COLS.map((_, colIdx) => {
                                const colEvents = events.filter(event => event.dayOffset === colIdx);
                                const columnDate = addDays(weekStart, colIdx);
                                const isToday = columnDate.getTime() === today.getTime();

                                return (
                                    <div key={colIdx} className={styles.dayCol}>
                                        {/* Linhas horizontais por hora */}
                                        {HOURS.map(hour => (
                                            <div key={hour} className={styles.hourLine} />
                                        ))}
                                        {/* Eventos */}
                                        {colEvents.map(event => {
                                            const { top, height } = calculateEventStyle(event);
                                            return (
                                                <div
                                                    key={event.id}
                                                    className={`${styles.event} ${isToday ? styles.eventToday : ''}`}
                                                    style={{ top, height }}
                                                    onClick={e => openPopoverForEvent(e, event)}
                                                >
                                                    <p className={styles.eventTitle}>{event.title}</p>
                                                    <p className={styles.eventTime}>{event.start} – {event.end}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>

            {/* Popover */}
            {/* O popover é a caixinha que aparece quando clicamos em um evento, mostrando os detalhes e opções de edição/exclusão */}
            {popover && (
                <div
                    ref={popoverRef}
                    className={styles.popover}
                    style={{ top: popover.y, left: popover.x }}
                    onClick={e => e.stopPropagation()}
                >
                    <p className={styles.popoverTitle}>{popover.event.title}</p>
                    <p className={styles.popoverDate}>{formatEventPopoverDate(popover.event)}</p>
                    <div className={styles.popoverDivider} />
                    <button className={styles.popoverAction} onClick={() => openEditModal(popover.event)}>
                        <Pencil size={14} />
                        <div>
                            <p className={styles.popoverActionLabel}>Edit booking</p>
                            <p className={styles.popoverActionDesc}>Change time, title or owner</p>
                        </div>
                    </button>
                    <button className={`${styles.popoverAction} ${styles.popoverActionDanger}`} onClick={() => deleteEventById(popover.event.id)}>
                        <Trash2 size={14} />
                        <div>
                            <p className={styles.popoverActionLabel}>Delete booking</p>
                            <p className={styles.popoverActionDesc}>This action cannot be undone</p>
                        </div>
                    </button>
                    <p className={styles.popoverHint}>Left-click on any booking to open</p>
                </div>
            )}

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={editingEvent ? "Edit Booking" : "New Booking"}
                subtitle="Reserve a court time slot"
                onConfirm={closeModal}
                confirmLabel={editingEvent ? "Save Changes" : "Save Booking"}
            >
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Event title</label>
                    <input
                        placeholder="Basketball Practice"
                        className={styles.input}
                        defaultValue={editingEvent?.title ?? ''}
                    />
                </div>

                <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Date</label>
                        <div className={styles.inputIcon}>
                            <Calendar size={15} />
                            <input
                                type="date"
                                className={styles.input}
                                defaultValue={editingEvent?.date ?? ''}
                            />
                        </div>
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Time</label>
                        <div className={styles.inputIcon}>
                            <Clock size={15} />
                            <input
                                type="time"
                                className={styles.input}
                                defaultValue={editingEvent?.start ?? ''}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                        Notes <span className={styles.optional}>(optional)</span>
                    </label>
                    <textarea
                        placeholder="Add relevant details about this booking..."
                        className={`${styles.input} ${styles.textarea}`}
                    />
                </div>
            </Modal>
        </div>
    );
}