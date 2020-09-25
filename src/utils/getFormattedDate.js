const getFormattedDate = (timestamp) => {
  let date = new Date(timestamp);
  const dayMounthYear = date.toLocaleDateString("pt-BR");
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${dayMounthYear} -> ${hours}:${minutes}`;
}

export default getFormattedDate;