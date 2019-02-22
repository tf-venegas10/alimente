// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPaciente = `query GetPaciente($id: ID!) {
  getPaciente(id: $id) {
    id
    nombre
    tipoDocumento
    documento
    fechaNacimiento
    genero
    pesoKg
    alturaCm
    fibrasGramos
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
        fibrasGramos
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
export const listPacientes = `query ListPacientes(
  $filter: ModelPacienteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPacientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGramos
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
    nextToken
  }
}
`;
export const getTipoDeMenu = `query GetTipoDeMenu($id: ID!) {
  getTipoDeMenu(id: $id) {
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
      fibrasGramos
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
export const listTipoDeMenus = `query ListTipoDeMenus(
  $filter: ModelTipoDeMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listTipoDeMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        fibrasGramos
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
    nextToken
  }
}
`;
export const getComida = `query GetComida($id: ID!) {
  getComida(id: $id) {
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
      fibrasGramos
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
export const listComidas = `query ListComidas(
  $filter: ModelComidaFilterInput
  $limit: Int
  $nextToken: String
) {
  listComidas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        fibrasGramos
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
    nextToken
  }
}
`;
export const getMenu = `query GetMenu($id: ID!) {
  getMenu(id: $id) {
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
        fibrasGramos
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
export const listMenus = `query ListMenus(
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getServicio = `query GetServicio($id: ID!) {
  getServicio(id: $id) {
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
        fibrasGramos
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
export const listServicios = `query ListServicios(
  $filter: ModelServicioFilterInput
  $limit: Int
  $nextToken: String
) {
  listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getAlimentoComidaRel = `query GetAlimentoComidaRel($id: ID!) {
  getAlimentoComidaRel(id: $id) {
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
        fibrasGramos
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
export const listAlimentoComidaRels = `query ListAlimentoComidaRels(
  $filter: ModelAlimentoComidaRelFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlimentoComidaRels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      alimento {
        id
        nombre
        calorias
        proteinas
        carbohidratos
        grasas
        fibras
        unidad
      }
      comida {
        id
        proporcionesDeCadaAlimento
      }
    }
    nextToken
  }
}
`;
export const getMenuAlimentoRel = `query GetMenuAlimentoRel($id: ID!) {
  getMenuAlimentoRel(id: $id) {
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
export const listMenuAlimentoRels = `query ListMenuAlimentoRels(
  $filter: ModelMenuAlimentoRelFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenuAlimentoRels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      alimento {
        id
        nombre
        calorias
        proteinas
        carbohidratos
        grasas
        fibras
        unidad
      }
      menu {
        id
        nombre
      }
    }
    nextToken
  }
}
`;
export const getMenuPreparacionRel = `query GetMenuPreparacionRel($id: ID!) {
  getMenuPreparacionRel(id: $id) {
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
export const listMenuPreparacionRels = `query ListMenuPreparacionRels(
  $filter: ModelMenuPreparacionRelFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenuPreparacionRels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      preparacion {
        id
        nombre
        calorias
        proteinas
        carbohidratos
        grasas
        fibras
        unidad
      }
      menu {
        id
        nombre
      }
    }
    nextToken
  }
}
`;
export const getAlimentosPreparacionesRel = `query GetAlimentosPreparacionesRel($id: ID!) {
  getAlimentosPreparacionesRel(id: $id) {
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
export const listAlimentosPreparacionesRels = `query ListAlimentosPreparacionesRels(
  $filter: ModelAlimentosPreparacionesRelFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlimentosPreparacionesRels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      preparacion {
        id
        nombre
        calorias
        proteinas
        carbohidratos
        grasas
        fibras
        unidad
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
      }
    }
    nextToken
  }
}
`;
export const getAlimento = `query GetAlimento($id: ID!) {
  getAlimento(id: $id) {
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
export const listAlimentos = `query ListAlimentos(
  $filter: ModelAlimentoFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlimentos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPreparacion = `query GetPreparacion($id: ID!) {
  getPreparacion(id: $id) {
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
export const listPreparacions = `query ListPreparacions(
  $filter: ModelPreparacionFilterInput
  $limit: Int
  $nextToken: String
) {
  listPreparacions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const searchPacientes = `query SearchPacientes(
  $filter: SearchablePacienteFilterInput
  $sort: SearchablePacienteSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPacientes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      nombre
      tipoDocumento
      documento
      fechaNacimiento
      genero
      pesoKg
      alturaCm
      fibrasGramos
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
    nextToken
  }
}
`;
export const searchMenus = `query SearchMenus(
  $filter: SearchableMenuFilterInput
  $sort: SearchableMenuSortInput
  $limit: Int
  $nextToken: Int
) {
  searchMenus(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchServicios = `query SearchServicios(
  $filter: SearchableServicioFilterInput
  $sort: SearchableServicioSortInput
  $limit: Int
  $nextToken: Int
) {
  searchServicios(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchAlimentos = `query SearchAlimentos(
  $filter: SearchableAlimentoFilterInput
  $sort: SearchableAlimentoSortInput
  $limit: Int
  $nextToken: Int
) {
  searchAlimentos(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchPreparacions = `query SearchPreparacions(
  $filter: SearchablePreparacionFilterInput
  $sort: SearchablePreparacionSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPreparacions(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
