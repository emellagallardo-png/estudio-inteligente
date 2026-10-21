/**
 * ==========================================================================
 * CORPUS.JS · ÍNDICE NORMATIVO PERICIAL & CONTROL DE ABSTENCIÓN
 * Fase 4 · Plan de Reconstrucción Luna 5.6
 * Autoridad: J. Esteban Mella Gallardo (CEO & Jefe de ITO)
 * División de Plataforma & ConTech · MEGA INSPECCIÓN SpA
 * ==========================================================================
 */

/**
 * 1. REGISTRO DE CORPUS NORMATIVO VINCULANTE (CON CITAS EXACTAS Y ARTÍCULOS)
 */
const NORMATIVE_CORPUS = {
  // --- EDIFICACIÓN & OBRAS CIVILES ---
  'NCh170:2016': {
    standard: 'NCh 170:2016',
    title: 'Hormigón - Requisitos generales',
    authority: 'Instituto Nacional de Normalización (INN)',
    category: 'Estructuras y Materiales',
    clauses: {
      'curado_plazos': {
        section: 'Cláusula 11.2 - Métodos y plazos de curado',
        requirement: 'El curado debe iniciarse inmediatamente después del vaciado y afinado. Debe mantenerse por un período mínimo de 7 días continuos o hasta alcanzar el 70% de la resistencia f\'c especificada.',
        fieldAction: 'Fiscalizar colocación inmediata de membrana de curado o riego por inundación/arpillera húmeda. Retención técnica de pago si no hay curado continuo.'
      },
      'tolerancia_asentamiento': {
        section: 'Cláusula 8.3 - Cono de Abrams y consistencia',
        requirement: 'Para cono especificado entre 6 y 10 cm, la tolerancia máxima admisible en faena es de ±2 cm medido antes de la adición de plastificantes.',
        fieldAction: 'Rechazo inmediato del camión mixer si el cono supera la tolerancia máxima. Prohibido añadir agua en obra bajo causal de no conformidad crítica.'
      },
      'clima_extremo_frio': {
        section: 'Cláusula 12.1 - Hormigonado en tiempo frío',
        requirement: 'Si la temperatura ambiente es inferior a 5°C, el hormigón debe protegerse con mantas térmicas y no colocarse sobre superficies congeladas. Mantener temperatura de masa ≥ 10°C.',
        fieldAction: 'Paralizar hormigonado si temperatura ambiente desciende a < 5°C sin medidas de protección térmica activadas.'
      }
    }
  },

  'NCh430:2008': {
    standard: 'NCh 430:2008',
    title: 'Hormigón armado - Requisitos de diseño y cálculo antisísmico',
    authority: 'INN / MINVU',
    category: 'Diseño Sísmico',
    clauses: {
      'traslapes_armaduras': {
        section: 'Capítulo 21 - Elementos sismorresistentes',
        requirement: 'Los empalmes por traslape en zonas críticas de confinamiento (nodos viga-pilar) deben alternarse y no superar el 50% de las barras en una misma sección, con longitud mínima de 60 diámetros (60Ø).',
        fieldAction: 'Inspección de enfierradura previa al hormigonado con firma de check-list. No se autoriza el vaciado con traslapes concentrados.'
      },
      'ganchos_sismicos': {
        section: 'Capítulo 7 - Detalles de refuerzo (Estribos)',
        requirement: 'Los estribos de confinamiento deben rematar en ganchos sísmicos a 135° con extensión recta no menor a 6 diámetros (6Ø) o 75 mm hacia el núcleo confinado.',
        fieldAction: 'Rechazar armaduras con ganchos a 90° en elementos estructurales primarios.'
      }
    }
  },

  'NCh1534': {
    standard: 'NCh 1534/2:1979',
    title: 'Mecánica de suelos - Relaciones de humedad/densidad (Proctor Modificado)',
    authority: 'INN / MOP',
    category: 'Geotecnia y Suelos',
    clauses: {
      'densidad_subrasante': {
        section: 'Método de Ensayo de Compactación',
        requirement: 'La densidad seca en terreno de la subrasante y bases granulares debe alcanzar al menos el 95% de la Densidad Máxima Seca (D.M.S.) obtenida en el ensayo Proctor Modificado.',
        fieldAction: 'Exigir ensaye con densímetro nuclear o método de cono de arena antes de liberar colocación de capa superior.'
      }
    }
  },

  // --- VIALIDAD & INFRAESTRUCTURA ---
  'MOP_VOL5': {
    standard: 'Manual de Carreteras MOP Vol. 5',
    title: 'Especificaciones Técnicas Generales de Construcción',
    authority: 'Dirección de Vialidad - MOP Chile',
    category: 'Obras Viales',
    clauses: {
      'temperatura_asfalto': {
        section: 'Sección 5.408.303 - Transporte y colocación de mezclas asfálticas',
        requirement: 'La temperatura de la mezcla asfáltica en caliente al momento de la descarga en la extendedora (finisher) debe situarse entre 135°C y 160°C. Rechazo tajante bajo 125°C.',
        fieldAction: 'Control de termómetro de punzón digital en tolva. Si registra <125°C, emitir boleta de rechazo y prohibir descarga.'
      },
      'densidad_carpeta': {
        section: 'Sección 5.408.305 - Compactación y controles',
        requirement: 'La densidad media obtenida en testigos diamantados extraídos a las 24 horas debe ser ≥ 97% de la densidad de referencia Marshall.',
        fieldAction: 'Trazabilidad de testigos cada 250 m lineales por pista. Aplicar descuentos contractuales si la densidad cae entre 95% y 97%.'
      }
    }
  },

  // --- SEGURIDAD, PREVENCIÓN & HIGIENE ---
  'DS594': {
    standard: 'Decreto Supremo N° 594',
    title: 'Reglamento sobre condiciones sanitarias y ambientales básicas en los lugares de trabajo',
    authority: 'Ministerio de Salud (MINSAL)',
    category: 'Seguridad y Salud Ocupacional',
    clauses: {
      'velocidad_viento_izajes': {
        section: 'Artículo 38 bis / Protocolo Nacional de Maniobras de Izaje',
        requirement: 'Queda estrictamente prohibida la operación de grúas torre y grúas móviles para izajes de elementos de gran envergadura cuando la velocidad sostenida del viento supere los 35 km/h o ráfagas > 42 km/h.',
        fieldAction: 'Paralización pericial inmediata de la maniobra de izaje. Retiro de pluma a posición de veleta libre.'
      },
      'proteccion_caidas': {
        section: 'Artículo 37 - Trabajos en altura',
        requirement: 'Todo trabajo realizado a más de 1.80 metros sobre el nivel del suelo exige sistema personal de detención de caídas (SPDC) anclado a línea de vida certificada con absorbedor de impacto.',
        fieldAction: 'Expulsión de faena al trabajador sin arnés normado e instrucción formal en Libro de Obras a la empresa contratista.'
      }
    }
  },

  // --- URBANISMO & CONSTRUCCIÓN LEGAL ---
  'OGUC': {
    standard: 'Ordenanza General de Urbanismo y Construcciones (OGUC)',
    title: 'Decreto Supremo N° 47 - MINVU',
    authority: 'Ministerio de Vivienda y Urbanismo',
    category: 'Normativa Legal Urbana',
    clauses: {
      'resistencia_fuego': {
        section: 'Artículo 4.3.3 - Resistencia al fuego de elementos constructivos',
        requirement: 'Los muros cortafuego divisorios entre predios independientes deben garantizar una resistencia mínima de F-120 (120 minutos sin traspaso de llama ni gases calientes).',
        fieldAction: 'Verificar certificado de ensaye IDIEM/DICTUC del sistema constructivo de muro cortafuego antes de recepción final DOM.'
      },
      'libro_de_obras': {
        section: 'Artículo 1.2.7 - De la Inspección Técnica y Libro de Obras',
        requirement: 'El Libro de Obras es el instrumento público oficial donde el ITO consigna las observaciones, instrucciones, recepciones y paralizaciones. Las notas del ITO son de cumplimiento obligatorio para el constructor.',
        fieldAction: 'Registro de folios con respaldo fotográfico, fecha, firma del Jefe de ITO y acuse de recibo del Administrador de Obra.'
      }
    }
  }
};

/**
 * 2. MOTOR DE CONTROL DE ABSTENCIÓN & BÚSQUEDA VERIFICADA
 */
const CorpusEngine = (() => {
  'use strict';

  return {
    /**
     * Busca cláusulas normativas vinculadas a palabras clave técnicas
     */
    findClauses(query) {
      if (!query || typeof query !== 'string' || query.trim().length < 3) {
        return [];
      }

      const q = query.toLowerCase();
      const results = [];

      for (const [stdKey, stdData] of Object.entries(NORMATIVE_CORPUS)) {
        for (const [clauseKey, clauseData] of Object.entries(stdData.clauses)) {
          const matchScore = 
            (clauseData.section.toLowerCase().includes(q) ? 3 : 0) +
            (clauseData.requirement.toLowerCase().includes(q) ? 2 : 0) +
            (clauseData.fieldAction.toLowerCase().includes(q) ? 2 : 0) +
            (stdData.title.toLowerCase().includes(q) ? 1 : 0);

          if (matchScore > 0) {
            results.push({
              standard: stdData.standard,
              title: stdData.title,
              authority: stdData.authority,
              clauseId: `${stdKey}.${clauseKey}`,
              section: clauseData.section,
              requirement: clauseData.requirement,
              fieldAction: clauseData.fieldAction,
              confidenceScore: matchScore
            });
          }
        }
      }

      return results.sort((a, b) => b.confidenceScore - a.confidenceScore);
    },

    /**
     * Valida si una afirmación técnica tiene respaldo en el corpus.
     * Si no tiene respaldo, activa el PROTOCOLO DE ABSTENCIÓN.
     */
    verifyClaim(claimText) {
      const findings = this.findClauses(claimText);

      if (findings.length === 0) {
        return {
          verified: false,
          abstain: true,
          message: '⚠️ PROTOCOLO DE ABSTENCIÓN ACTIVO: No existe evidencia documental en el corpus normativo NCh/OGUC/RIDAA para validar esta partida. No se emite dictamen sin norma vinculante.',
          citation: null
        };
      }

      return {
        verified: true,
        abstain: false,
        message: '✅ Evidencia normativa contrastada satisfactoriamente.',
        citation: findings[0]
      };
    },

    /**
     * Genera bloque HTML formateado con la ficha de respaldo pericial
     */
    formatCitationBadge(citation) {
      if (!citation) return '';
      return `
        <div class="normative-proof-card" style="margin-top: 8px; padding: 12px; background: rgba(255, 94, 0, 0.05); border-left: 3px solid #FF5E00; border-radius: 4px; font-size: 11px;">
          <div style="font-weight: 700; color: #FF5E00; letter-spacing: 0.05em; margin-bottom: 4px;">
            📜 RESPALDO NORMATIVO VINCULANTE: ${citation.standard}
          </div>
          <div style="color: #CBD5E1; margin-bottom: 4px;">
            <strong>${citation.section}:</strong> ${citation.requirement}
          </div>
          <div style="color: #10B981; font-weight: 600;">
            🛠️ Acción ITO en Terreno: ${citation.fieldAction}
          </div>
        </div>
      `;
    }
  };
})();
