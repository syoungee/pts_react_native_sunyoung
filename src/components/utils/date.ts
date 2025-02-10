export const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}시 ${now.getMinutes().toString().padStart(2, '0')}분`;
};
