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
  const proteinasGramos = Math.round(pesoKg * gramosDeProteinaPorKgDePeso);
  const carbohidratosGramos = Math.round(
    ((rmb - proteinasGramos * caloriasPorGramoDe.proteina) * porcionDeCarbohidratosDespuesDeProteina) /
      caloriasPorGramoDe.carbohidratos
  );
  const grasasGramos = Math.round(
    ((rmb - proteinasGramos * caloriasPorGramoDe.proteina) * porcionDeGrasasDespuesDeProteina) /
      caloriasPorGramoDe.grasas
  );
  const fibrasGramos = Math.round(rmb * gramosFibraPorKcal);

  return [proteinasGramos, carbohidratosGramos, grasasGramos, fibrasGramos];
};
