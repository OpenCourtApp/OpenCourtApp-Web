// hooks/useCalendar.js
import { useState, useRef, useEffect } from "react";
import { getWeekStart, addDays } from "@/utils/formatDate";

export function useCalendar(initialEvents) {
    const [weekStart, setWeekStart] = useState(() => getWeekStart(new Date()));
    const [events, setEvents] = useState(initialEvents);
    const [popover, setPopover] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const popoverRef = useRef(null);

    useEffect(() => {
        function closeOnOutsideClick(e) {
            if (popoverRef.current && !popoverRef.current.contains(e.target)) {
                setPopover(null);
            }
        }
        document.addEventListener('mousedown', closeOnOutsideClick);
        return () => document.removeEventListener('mousedown', closeOnOutsideClick);
    }, []);

    useEffect(() => {
        setEvents(initialEvents);
    }, [initialEvents]);

    const closePopover = () => setPopover(null);

    const goToPrevWeek = () => {
        setWeekStart(prev => addDays(prev, -7));
        closePopover();
    };

    const goToNextWeek = () => {
        setWeekStart(prev => addDays(prev, 7));
        closePopover();
    };

    const goToCurrentWeek = () => {
        setWeekStart(getWeekStart(new Date()));
        closePopover();
    };

    const openPopoverForEvent = (clickEvent, calendarEvent) => {
        clickEvent.stopPropagation();
        const rect = clickEvent.currentTarget.getBoundingClientRect();
        setPopover({ event: calendarEvent, x: rect.right + 8, y: rect.top });
    }

    const deleteEventById = (id) => {
        setEvents(current => current.filter(event => event.id !== id));
        closePopover();
    }

    const openEditModal = (event) => {
        setEditingEvent(event);
        closePopover();
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingEvent(null);
    }

    // Ajuda a formatar a data para exibição no popover, mostrando o dia da semana, mês, dia e horário do evento
    const formatEventPopoverDate = (event) => {
        const date = addDays(weekStart, event.dayOffset);
        return `${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · ${event.start} – ${event.end}`;
    };

    return {
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
    };
}