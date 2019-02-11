// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPaciente = `mutation CreatePaciente($input: CreatePacienteInput!) {
  createPaciente(input: $input) {
    id
    nombre
    tipoDocumento
    documento
    fechaNacimiento
    genero
    pesoKg
    alturaCm
    fibrasGranos
    grasasGramos
    carbohidratosGramos
    proteinasGramos
    calorias
    activoDesayuno
    activoAlmuerzo
    activoComida
    activoDesayunoHasta
    activoAlmuerzoHasta
    activoComidaHasta
    tipoDeMenu {
      id
      tipo
      pacientes {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      menu {
        id
        nombre
      }
    }
    comidas {
      items {
        id
        proporcionesDeCadaAlimento
      }
      nextToken
    }
  }
}
`;
export const updatePaciente = `mutation UpdatePaciente($input: UpdatePacienteInput!) {
  updatePaciente(input: $input) {
    id
    nombre
    tipoDocumento
    documento
    fechaNacimiento
    genero
    pesoKg
    alturaCm
    fibrasGranos
    grasasGramos
    carbohidratosGramos
    proteinasGramos
    calorias
    activoDesayuno
    activoAlmuerzo
    activoComida
    activoDesayunoHasta
    activoAlmuerzoHasta
    activoComidaHasta
    tipoDeMenu {
      id
      tipo
      pacientes {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      menu {
        id
        nombre
      }
    }
    comidas {
      items {
        id
        proporcionesDeCadaAlimento
      }
      nextToken
    }
  }
}
`;
export const deletePaciente = `mutation DeletePaciente($input: DeletePacienteInput!) {
  deletePaciente(input: $input) {
    id
    nombre
    tipoDocumento
    documento
    fechaNacimiento
    genero
    pesoKg
    alturaCm
    fibrasGranos
    grasasGramos
    carbohidratosGramos
    proteinasGramos
    calorias
    activoDesayuno
    activoAlmuerzo
    activoComida
    activoDesayunoHasta
    activoAlmuerzoHasta
    activoComidaHasta
    tipoDeMenu {
      id
      tipo
      pacientes {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      menu {
        id
        nombre
      }
    }
    comidas {
      items {
        id
        proporcionesDeCadaAlimento
      }
      nextToken
    }
  }
}
`;
export const createTipoDeMenu = `mutation CreateTipoDeMenu($input: CreateTipoDeMenuInput!) {
  createTipoDeMenu(input: $input) {
    id
    tipo
    pacientes {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGranos
      grasasGramos
      carbohidratosGramos
      proteinasGramos
      calorias
      activoDesayuno
      activoAlmuerzo
      activoComida
      activoDesayunoHasta
      activoAlmuerzoHasta
      activoComidaHasta
      tipoDeMenu {
        id
        tipo
      }
      comidas {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const updateTipoDeMenu = `mutation UpdateTipoDeMenu($input: UpdateTipoDeMenuInput!) {
  updateTipoDeMenu(input: $input) {
    id
    tipo
    pacientes {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGranos
      grasasGramos
      carbohidratosGramos
      proteinasGramos
      calorias
      activoDesayuno
      activoAlmuerzo
      activoComida
      activoDesayunoHasta
      activoAlmuerzoHasta
      activoComidaHasta
      tipoDeMenu {
        id
        tipo
      }
      comidas {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const deleteTipoDeMenu = `mutation DeleteTipoDeMenu($input: DeleteTipoDeMenuInput!) {
  deleteTipoDeMenu(input: $input) {
    id
    tipo
    pacientes {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGranos
      grasasGramos
      carbohidratosGramos
      proteinasGramos
      calorias
      activoDesayuno
      activoAlmuerzo
      activoComida
      activoDesayunoHasta
      activoAlmuerzoHasta
      activoComidaHasta
      tipoDeMenu {
        id
        tipo
      }
      comidas {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const createComida = `mutation CreateComida($input: CreateComidaInput!) {
  createComida(input: $input) {
    id
    paciente {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGranos
      grasasGramos
      carbohidratosGramos
      proteinasGramos
      calorias
      activoDesayuno
      activoAlmuerzo
      activoComida
      activoDesayunoHasta
      activoAlmuerzoHasta
      activoComidaHasta
      tipoDeMenu {
        id
        tipo
      }
      comidas {
        nextToken
      }
    }
    servicio {
      id
      fecha
      hora
      menus {
        nextToken
      }
      comida {
        id
        proporcionesDeCadaAlimento
      }
    }
    alimentosRel {
      items
      nextToken
    }
    proporcionesDeCadaAlimento
  }
}
`;
export const updateComida = `mutation UpdateComida($input: UpdateComidaInput!) {
  updateComida(input: $input) {
    id
    paciente {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGranos
      grasasGramos
      carbohidratosGramos
      proteinasGramos
      calorias
      activoDesayuno
      activoAlmuerzo
      activoComida
      activoDesayunoHasta
      activoAlmuerzoHasta
      activoComidaHasta
      tipoDeMenu {
        id
        tipo
      }
      comidas {
        nextToken
      }
    }
    servicio {
      id
      fecha
      hora
      menus {
        nextToken
      }
      comida {
        id
        proporcionesDeCadaAlimento
      }
    }
    alimentosRel {
      items
      nextToken
    }
    proporcionesDeCadaAlimento
  }
}
`;
export const deleteComida = `mutation DeleteComida($input: DeleteComidaInput!) {
  deleteComida(input: $input) {
    id
    paciente {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGranos
      grasasGramos
      carbohidratosGramos
      proteinasGramos
      calorias
      activoDesayuno
      activoAlmuerzo
      activoComida
      activoDesayunoHasta
      activoAlmuerzoHasta
      activoComidaHasta
      tipoDeMenu {
        id
        tipo
      }
      comidas {
        nextToken
      }
    }
    servicio {
      id
      fecha
      hora
      menus {
        nextToken
      }
      comida {
        id
        proporcionesDeCadaAlimento
      }
    }
    alimentosRel {
      items
      nextToken
    }
    proporcionesDeCadaAlimento
  }
}
`;
export const createMenu = `mutation CreateMenu($input: CreateMenuInput!) {
  createMenu(input: $input) {
    id
    nombre
    alimentosRel {
      items
      nextToken
    }
    preparacionesRel {
      items
      nextToken
    }
    tipoDeMenu {
      id
      tipo
      pacientes {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      menu {
        id
        nombre
      }
    }
    servicio {
      id
      fecha
      hora
      menus {
        nextToken
      }
      comida {
        id
        proporcionesDeCadaAlimento
      }
    }
  }
}
`;
export const updateMenu = `mutation UpdateMenu($input: UpdateMenuInput!) {
  updateMenu(input: $input) {
    id
    nombre
    alimentosRel {
      items
      nextToken
    }
    preparacionesRel {
      items
      nextToken
    }
    tipoDeMenu {
      id
      tipo
      pacientes {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      menu {
        id
        nombre
      }
    }
    servicio {
      id
      fecha
      hora
      menus {
        nextToken
      }
      comida {
        id
        proporcionesDeCadaAlimento
      }
    }
  }
}
`;
export const deleteMenu = `mutation DeleteMenu($input: DeleteMenuInput!) {
  deleteMenu(input: $input) {
    id
    nombre
    alimentosRel {
      items
      nextToken
    }
    preparacionesRel {
      items
      nextToken
    }
    tipoDeMenu {
      id
      tipo
      pacientes {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      menu {
        id
        nombre
      }
    }
    servicio {
      id
      fecha
      hora
      menus {
        nextToken
      }
      comida {
        id
        proporcionesDeCadaAlimento
      }
    }
  }
}
`;
export const createServicio = `mutation CreateServicio($input: CreateServicioInput!) {
  createServicio(input: $input) {
    id
    fecha
    hora
    menus {
      items {
        id
        nombre
      }
      nextToken
    }
    comida {
      id
      paciente {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      servicio {
        id
        fecha
        hora
      }
      alimentosRel {
        nextToken
      }
      proporcionesDeCadaAlimento
    }
  }
}
`;
export const updateServicio = `mutation UpdateServicio($input: UpdateServicioInput!) {
  updateServicio(input: $input) {
    id
    fecha
    hora
    menus {
      items {
        id
        nombre
      }
      nextToken
    }
    comida {
      id
      paciente {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      servicio {
        id
        fecha
        hora
      }
      alimentosRel {
        nextToken
      }
      proporcionesDeCadaAlimento
    }
  }
}
`;
export const deleteServicio = `mutation DeleteServicio($input: DeleteServicioInput!) {
  deleteServicio(input: $input) {
    id
    fecha
    hora
    menus {
      items {
        id
        nombre
      }
      nextToken
    }
    comida {
      id
      paciente {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      servicio {
        id
        fecha
        hora
      }
      alimentosRel {
        nextToken
      }
      proporcionesDeCadaAlimento
    }
  }
}
`;
export const createAlimentoComidaRel = `mutation CreateAlimentoComidaRel($input: CreateAlimentoComidaRelInput!) {
  createAlimentoComidaRel(input: $input) {
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    comida {
      id
      paciente {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      servicio {
        id
        fecha
        hora
      }
      alimentosRel {
        nextToken
      }
      proporcionesDeCadaAlimento
    }
  }
}
`;
export const updateAlimentoComidaRel = `mutation UpdateAlimentoComidaRel($input: UpdateAlimentoComidaRelInput!) {
  updateAlimentoComidaRel(input: $input) {
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    comida {
      id
      paciente {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      servicio {
        id
        fecha
        hora
      }
      alimentosRel {
        nextToken
      }
      proporcionesDeCadaAlimento
    }
  }
}
`;
export const deleteAlimentoComidaRel = `mutation DeleteAlimentoComidaRel($input: DeleteAlimentoComidaRelInput!) {
  deleteAlimentoComidaRel(input: $input) {
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    comida {
      id
      paciente {
        id
        nombre
        tipoDocumento
        documento
        fechaNacimiento
        genero
        pesoKg
        alturaCm
        fibrasGranos
        grasasGramos
        carbohidratosGramos
        proteinasGramos
        calorias
        activoDesayuno
        activoAlmuerzo
        activoComida
        activoDesayunoHasta
        activoAlmuerzoHasta
        activoComidaHasta
      }
      servicio {
        id
        fecha
        hora
      }
      alimentosRel {
        nextToken
      }
      proporcionesDeCadaAlimento
    }
  }
}
`;
export const createMenuAlimentoRel = `mutation CreateMenuAlimentoRel($input: CreateMenuAlimentoRelInput!) {
  createMenuAlimentoRel(input: $input) {
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const updateMenuAlimentoRel = `mutation UpdateMenuAlimentoRel($input: UpdateMenuAlimentoRelInput!) {
  updateMenuAlimentoRel(input: $input) {
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const deleteMenuAlimentoRel = `mutation DeleteMenuAlimentoRel($input: DeleteMenuAlimentoRelInput!) {
  deleteMenuAlimentoRel(input: $input) {
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const createMenuPreparacionRel = `mutation CreateMenuPreparacionRel($input: CreateMenuPreparacionRelInput!) {
  createMenuPreparacionRel(input: $input) {
    preparacion {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      alimentosRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const updateMenuPreparacionRel = `mutation UpdateMenuPreparacionRel($input: UpdateMenuPreparacionRelInput!) {
  updateMenuPreparacionRel(input: $input) {
    preparacion {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      alimentosRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const deleteMenuPreparacionRel = `mutation DeleteMenuPreparacionRel($input: DeleteMenuPreparacionRelInput!) {
  deleteMenuPreparacionRel(input: $input) {
    preparacion {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      alimentosRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    menu {
      id
      nombre
      alimentosRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      tipoDeMenu {
        id
        tipo
      }
      servicio {
        id
        fecha
        hora
      }
    }
  }
}
`;
export const createAlimentosPreparacionesRel = `mutation CreateAlimentosPreparacionesRel(
  $input: CreateAlimentosPreparacionesRelInput!
) {
  createAlimentosPreparacionesRel(input: $input) {
    preparacion {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      alimentosRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
  }
}
`;
export const updateAlimentosPreparacionesRel = `mutation UpdateAlimentosPreparacionesRel(
  $input: UpdateAlimentosPreparacionesRelInput!
) {
  updateAlimentosPreparacionesRel(input: $input) {
    preparacion {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      alimentosRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
  }
}
`;
export const deleteAlimentosPreparacionesRel = `mutation DeleteAlimentosPreparacionesRel(
  $input: DeleteAlimentosPreparacionesRelInput!
) {
  deleteAlimentosPreparacionesRel(input: $input) {
    preparacion {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      alimentosRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
    alimento {
      id
      nombre
      calorias
      proteinas
      carbohidratos
      grasas
      fibras
      unidad
      comidasRel {
        nextToken
      }
      preparacionesRel {
        nextToken
      }
      menusRel {
        nextToken
      }
    }
  }
}
`;
export const createAlimento = `mutation CreateAlimento($input: CreateAlimentoInput!) {
  createAlimento(input: $input) {
    id
    nombre
    calorias
    proteinas
    carbohidratos
    grasas
    fibras
    unidad
    comidasRel {
      items
      nextToken
    }
    preparacionesRel {
      items
      nextToken
    }
    menusRel {
      items
      nextToken
    }
  }
}
`;
export const updateAlimento = `mutation UpdateAlimento($input: UpdateAlimentoInput!) {
  updateAlimento(input: $input) {
    id
    nombre
    calorias
    proteinas
    carbohidratos
    grasas
    fibras
    unidad
    comidasRel {
      items
      nextToken
    }
    preparacionesRel {
      items
      nextToken
    }
    menusRel {
      items
      nextToken
    }
  }
}
`;
export const deleteAlimento = `mutation DeleteAlimento($input: DeleteAlimentoInput!) {
  deleteAlimento(input: $input) {
    id
    nombre
    calorias
    proteinas
    carbohidratos
    grasas
    fibras
    unidad
    comidasRel {
      items
      nextToken
    }
    preparacionesRel {
      items
      nextToken
    }
    menusRel {
      items
      nextToken
    }
  }
}
`;
export const createPreparacion = `mutation CreatePreparacion($input: CreatePreparacionInput!) {
  createPreparacion(input: $input) {
    id
    nombre
    calorias
    proteinas
    carbohidratos
    grasas
    fibras
    unidad
    alimentosRel {
      items
      nextToken
    }
    menusRel {
      items
      nextToken
    }
  }
}
`;
export const updatePreparacion = `mutation UpdatePreparacion($input: UpdatePreparacionInput!) {
  updatePreparacion(input: $input) {
    id
    nombre
    calorias
    proteinas
    carbohidratos
    grasas
    fibras
    unidad
    alimentosRel {
      items
      nextToken
    }
    menusRel {
      items
      nextToken
    }
  }
}
`;
export const deletePreparacion = `mutation DeletePreparacion($input: DeletePreparacionInput!) {
  deletePreparacion(input: $input) {
    id
    nombre
    calorias
    proteinas
    carbohidratos
    grasas
    fibras
    unidad
    alimentosRel {
      items
      nextToken
    }
    menusRel {
      items
      nextToken
    }
  }
}
`;
