export const fechaAEdad = (fechaNacimiento) => {
  const timeDiff = new Date().getTime() - new Date(fechaNacimiento).getTime();
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeDiff - years * 1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30.5));
  return [years, months];
};
