export function generateWeekly() {
  return Array.from({ length: 7 });
}

export function generateMonthly() {
  const now = new Date();
  const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  return Array.from({ length: days });
}

export function generateUnlimited() {
  return Array.from({ length: 6 * 26 }); // 6 rows of 26
}
