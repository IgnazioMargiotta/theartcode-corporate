export const getDaysDate = (timestamp: string): string => {
  const now = new Date();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const then = new Date(timestamp);
  const dateThen = new Date(Date.UTC(then.getFullYear(), then.getMonth(), then.getDate()));

  const diff = today.getTime() - dateThen.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diff >= 0 && diff < 1000 * 60) {
    return "pochi secondi fa";
  } else if (days > 30) {
    return dateThen.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } else if (days === 1) {
    return days + " giorno fa";
  } else if (days > 1) {
    return days + " giorni fa";
  } else if (days < 0) {
    return "Data futura";
  } else {
    // Se nessuna delle condizioni sopra si verifica, significa che è passato meno di un giorno
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours === 1) {
      return hours + " ora fa";
    } else if (hours > 1) {
      return hours + " ore fa";
    } else {
      // Se non sono passate intere ore, calcola i minuti
      const minutes = Math.floor(diff / (1000 * 60));
      if (minutes === 1) {
        return minutes + " minuto fa";
      } else {
        return minutes + " minuti fa";
      }
    }
  }
};
