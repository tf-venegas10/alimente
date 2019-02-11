// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePaciente = `subscription OnCreatePaciente {
  onCreatePaciente {
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
export const onUpdatePaciente = `subscription OnUpdatePaciente {
  onUpdatePaciente {
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
export const onDeletePaciente = `subscription OnDeletePaciente {
  onDeletePaciente {
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
export const onCreateTipoDeMenu = `subscription OnCreateTipoDeMenu {
  onCreateTipoDeMenu {
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
export const onUpdateTipoDeMenu = `subscription OnUpdateTipoDeMenu {
  onUpdateTipoDeMenu {
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
export const onDeleteTipoDeMenu = `subscription OnDeleteTipoDeMenu {
  onDeleteTipoDeMenu {
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
export const onCreateComida = `subscription OnCreateComida {
  onCreateComida {
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
export const onUpdateComida = `subscription OnUpdateComida {
  onUpdateComida {
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
export const onDeleteComida = `subscription OnDeleteComida {
  onDeleteComida {
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
export const onCreateMenu = `subscription OnCreateMenu {
  onCreateMenu {
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
export const onUpdateMenu = `subscription OnUpdateMenu {
  onUpdateMenu {
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
export const onDeleteMenu = `subscription OnDeleteMenu {
  onDeleteMenu {
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
export const onCreateServicio = `subscription OnCreateServicio {
  onCreateServicio {
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
export const onUpdateServicio = `subscription OnUpdateServicio {
  onUpdateServicio {
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
export const onDeleteServicio = `subscription OnDeleteServicio {
  onDeleteServicio {
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
export const onCreateAlimentoComidaRel = `subscription OnCreateAlimentoComidaRel {
  onCreateAlimentoComidaRel {
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
export const onUpdateAlimentoComidaRel = `subscription OnUpdateAlimentoComidaRel {
  onUpdateAlimentoComidaRel {
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
export const onDeleteAlimentoComidaRel = `subscription OnDeleteAlimentoComidaRel {
  onDeleteAlimentoComidaRel {
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
export const onCreateMenuAlimentoRel = `subscription OnCreateMenuAlimentoRel {
  onCreateMenuAlimentoRel {
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
export const onUpdateMenuAlimentoRel = `subscription OnUpdateMenuAlimentoRel {
  onUpdateMenuAlimentoRel {
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
export const onDeleteMenuAlimentoRel = `subscription OnDeleteMenuAlimentoRel {
  onDeleteMenuAlimentoRel {
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
export const onCreateMenuPreparacionRel = `subscription OnCreateMenuPreparacionRel {
  onCreateMenuPreparacionRel {
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
export const onUpdateMenuPreparacionRel = `subscription OnUpdateMenuPreparacionRel {
  onUpdateMenuPreparacionRel {
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
export const onDeleteMenuPreparacionRel = `subscription OnDeleteMenuPreparacionRel {
  onDeleteMenuPreparacionRel {
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
export const onCreateAlimentosPreparacionesRel = `subscription OnCreateAlimentosPreparacionesRel {
  onCreateAlimentosPreparacionesRel {
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
export const onUpdateAlimentosPreparacionesRel = `subscription OnUpdateAlimentosPreparacionesRel {
  onUpdateAlimentosPreparacionesRel {
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
export const onDeleteAlimentosPreparacionesRel = `subscription OnDeleteAlimentosPreparacionesRel {
  onDeleteAlimentosPreparacionesRel {
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
export const onCreateAlimento = `subscription OnCreateAlimento {
  onCreateAlimento {
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
export const onUpdateAlimento = `subscription OnUpdateAlimento {
  onUpdateAlimento {
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
export const onDeleteAlimento = `subscription OnDeleteAlimento {
  onDeleteAlimento {
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
export const onCreatePreparacion = `subscription OnCreatePreparacion {
  onCreatePreparacion {
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
export const onUpdatePreparacion = `subscription OnUpdatePreparacion {
  onUpdatePreparacion {
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
export const onDeletePreparacion = `subscription OnDeletePreparacion {
  onDeletePreparacion {
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
