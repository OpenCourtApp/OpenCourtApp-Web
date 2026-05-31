// Retorna quantos dias precisamos subtrair para chegar na segunda-feira
// getDaysUntilMonday(): 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sáb
function getDaysUntilMonday(dayOfWeek) {
    const SUNDAY = 0;
    return dayOfWeek === SUNDAY ? 6 : dayOfWeek - 1;
}

export function getWeekStart(date) {
    // Normaliza a data para o início do dia
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);
    
    // Subtrai os dias necessários para chegar na segunda-feira
    const daysToSubtract = getDaysUntilMonday(result.getDay());
    result.setDate(result.getDate() - daysToSubtract);

    return result;
}

// Retorna uma nova data sem mudar a original
export function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Ex: "Mar 10 – Mar 16, 2026"
export function formatWeekRange(weekStart) {
    const weekEnd = addDays(weekStart, 6);

    const formatShort = (date) =>
        date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const formatFull = (date) =>
        date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return `${formatShort(weekStart)} – ${formatFull(weekEnd)}`;
}

// Converte "14:30" → 870 (minutos desde meia-noite)
export function timeToMinutes(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
}