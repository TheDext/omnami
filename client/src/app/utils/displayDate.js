export default function displayDate(mss) {
    const date = new Date(mss);

    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = "0" + yy;

    let h = date.getHours();
    if (h < 10) h = "0" + h;

    let min = date.getMinutes();
    if (min < 10) min = "0" + min;

    return `${dd}.${mm}.${yy} ${h}:${min}`;
}
