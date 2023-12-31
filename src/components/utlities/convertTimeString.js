export const add30Minutes = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);

    if (minutes === 0) {
        return `${hours.toString().padStart(2, '0')}:${(minutes + 30).toString().padStart(2, '0')}`;
    }
    let totalMinutes = hours * 60 + minutes;
    totalMinutes += 30;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;
    const newTimeString = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;

    return newTimeString;
};
