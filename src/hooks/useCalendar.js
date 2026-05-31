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

    function closePopover() { setPopover(null); }
    function goToPrevWeek() { setWeekStart(c => addDays(c, -7)); closePopover(); }
    function goToNextWeek() { setWeekStart(c => addDays(c,  7)); closePopover(); }
    function goToCurrentWeek() { setWeekStart(getWeekStart(new Date())); closePopover(); }

    function openPopoverForEvent(clickEvent, calendarEvent) {
        clickEvent.stopPropagation();
        const rect = clickEvent.currentTarget.getBoundingClientRect();
        setPopover({ event: calendarEvent, x: rect.right + 8, y: rect.top });
    }

    function deleteEventById(id) {
        setEvents(current => current.filter(event => event.id !== id));
        closePopover();
    }

    function openEditModal(event) {
        setEditingEvent(event);
        setPopover(null);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setEditingEvent(null);
    }

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
    };
}