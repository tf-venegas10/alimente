const caloriasPorGramoDe = {
  proteina: 4,
  carbohidratos: 4,
  grasas: 9
};
const porcionDeCarbohidratosDespuesDeProteina = 2 / 3;
const porcionDeGrasasDespuesDeProteina = 1 - porcionDeCarbohidratosDespuesDeProteina;
const gramosDeProteinaPorKgDePeso = 0.8;
const gramosFibraPorKcal = 0.015;

export const requerimientosMacros = (rmb, pesoKg) => {
  const proteinasGramos = pesoKg * gramosDeProteinaPorKgDePeso;
  const carbohidratosGramos =
    ((rmb - proteinasGramos * caloriasPorGramoDe.proteina) * porcionDeCarbohidratosDespuesDeProteina) /
    caloriasPorGramoDe.carbohidratos;
  const grasasGramos =
    ((rmb - proteinasGramos * caloriasPorGramoDe.proteina) * porcionDeGrasasDespuesDeProteina) /
    caloriasPorGramoDe.grasas;
  const fibrasGramos = rmb * gramosFibraPorKcal;

  return [proteinasGramos, carbohidratosGramos, grasasGramos, fibrasGramos];
};
