export const activoComida = (activo, activoHasta) => {
  return activo & (new Date(activoHasta).getTime() - new Date().getTime() > 0);
};
