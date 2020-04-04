function getDayName(dateString) {
    let dayName;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var date = new Date(dateString);
    dayName = days[date.getDay()];

    return dayName;
}
