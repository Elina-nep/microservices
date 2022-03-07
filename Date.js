const getDayInfo = (date, output) => {
  console.log(date)
  const re = /(\d{2})([.])(\d{2})([.])(\d{4})/;
  const OK = re.exec(date);
  if (!OK) {
    console.log("not correct date format, use ##.##.####");
    alert("not correct date format, use ##.##.####");
    return;
  }
  const dateArr = date.split('.');
  const myDate = new Date(+dateArr[2], +dateArr[1] - 1, +dateArr[0]);
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

  const newDayNum = (myDate.getDay() != 0 ? myDate.getDay() : 7)
  const weekNum = (myDate.getDate() - newDayNum) < 0 ? 1 : (Math.ceil((myDate.getDate() - newDayNum) / 7) + 1)
  output.innerHTML = `${days[myDate.getDay()]}, ${weekNum} неделя ${months[myDate.getMonth()]} ${myDate.getFullYear()} года`
  console.log(days[myDate.getDay()] + ',', weekNum, 'неделя', months[myDate.getMonth()], myDate.getFullYear(), 'года')
}


export default getDayInfo;

// getDayInfo('24.02.2022');