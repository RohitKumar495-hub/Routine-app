// utils/date.js

export const getDateInfo = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const dayName = today.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  return { formattedDate, dayName };
};