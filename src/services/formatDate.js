//  function formatDate(date) {
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
  
//     if (day < 10) {
//       day = "0" + day;
//     }
  
//     if (month < 10) {
//       month = "0" + month;
//     }
  
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
  
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
  
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
  
//     return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
//   }
  
//   const currentDate = new Date();
//   export const formattedDate = formatDate(currentDate);

  const now = new Date();
const formattedDate = now.toLocaleDateString("ru-RU", { day: '2-digit', month: '2-digit', year: 'numeric' });
const formattedTime = now.toLocaleTimeString("ru-RU", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
export const formatDate = `${formattedDate} ${formattedTime}`;