/*

    1,2 – para una persona que lleva una vida totalmente sedentaria,
    1,375 – para una persona que realiza una actividad física ligera (andar un poco),
    1,55 – para una persona que realiza una actividad media y moderada (actividades cotidianas dinámicas o ejercicio moderado),
    1,725 – Para una persona muy activa (actividades y/o trabajo dinámicas y ejercicio de forma regular, mínimo 3 o 4 veces a la semana),
    1,9 – Para una persona extremadamente activa (un deportista, actividades de elevado consumo calórico, trabajos extremos, etc)

*/
const actividadFisica = 1.2;

export const ritmoMetabolicoBasal = (pesoKg, alturaCm, genero, edadAnos) => {
  switch (genero) {
    case 'HOMBRE':
      return (66.473 + 13.752 * pesoKg + 5.0033 * alturaCm - 6.755 * edadAnos) * actividadFisica;
    case 'MUJER':
      return (655.0955 + 9.463 * pesoKg + 1.8496 * alturaCm - 4.6756 * edadAnos) * actividadFisica;
    default:
      return 0;
  }
};
