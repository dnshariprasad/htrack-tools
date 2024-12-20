export function toLocaleDateString(time: number) {
    const date = new Date(time);
    const hours = String(date.getHours()).padStart(2, "0"); // 0-23
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 0-59
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 0-59
    const formatedTime = `${hours}:${minutes}:${seconds}`;
    const formatedDate = new Date(time).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formatedDate + " " + formatedTime;
  }
  
  export function calculateTimeDifference(startTime: number, endTime: number): string {
    if (isNaN(startTime) || isNaN(endTime)) {
      return "Error: Invalid timestamp provided.";
    }
  
    if (endTime < startTime) {
      return "Error: Both timestamps are the same.";
    }
  
    const differenceInMs = Math.abs(startTime - endTime);
  
    const scns = Math.floor(differenceInMs / 1000) % 60;
    const mins = Math.floor(differenceInMs / (1000 * 60)) % 60;
    const hrs = Math.floor(differenceInMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24)) % 365;
    const years = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365));
    const timeDifference = { years, days, hrs, mins, scns };
    return Object.entries(timeDifference)
      .filter(([_, value]) => value > 0) // Keep only entries with value > 0
      .map(([key, value]) => `${value} ${key}`) // Format as "value key"
      .join(", "); // Join all;
  }