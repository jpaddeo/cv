const getCurrentTime = () => {
  return new Intl.DateTimeFormat('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());
};

export { getCurrentTime };
