export const formatTimestamp = (timestamp) => {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' ' + d.toLocaleDateString();
};
