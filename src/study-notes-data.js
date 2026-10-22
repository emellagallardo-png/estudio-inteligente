/**
 * ESTUDIO INTELIGENTE 2.0 · DIVISIÓN DE SOFTWARE & CONTECH
 * DATA STORE CANÓNICO: NOTAS DE ESTUDIO · DIPLOMADO UC (CLASE 3)
 * Módulo: Metodologías para la gestión estratégica de contratos en proyectos de inversión
 * Autoridad: J. Esteban Mella Gallardo · CEO & Jefe de ITO
 * Supervisión Académica: OMEN AG-41 & Mentor EMG
 */

window.STUDY_NOTES_DATA = {
  curriculum: {
    program: "Diplomado UC - Gestión y Administración de la Construcción",
    course: "Metodologías para la gestión estratégica de contratos en proyectos de inversión",
    courseCode: "20264_C_ADC268N",
    professor: "Profesor Germán Millán Valdés",
    lesson: "Clase 3: El contrato y modalidades de contratación",
    hours: "18 Horas Académicas",
    version: "2026-PROD"
  },

  // BLOQUE A: MIS NOTAS DE ESTUDIO (Lectura estructurada y colapsable)
  notes: [
    {
      id: "note-1-1",
      section: "1.1 Principios Básicos y Clasificación del Contrato",
      tags: ["#Clasificacion", "#Principios", "#DoctrinaUC", "#Etica"],
      summary: "El contrato legalmente celebrado es una verdadera 'ley para las partes' (Art. 1545 CC). Se desglosa en 6 clasificaciones doctrinarias y 5 valores éticos precontractuales.",
      content: `
        <div class="note-section-body">
          <p class="lead-text">Todo contrato legalmente celebrado es una <strong>ley para las partes contratantes</strong> y no puede ser invalidado sino por su consentimiento mutuo o por causas legales.</p>
          
          <h4 class="subheading">Clasificación Jurídico-Técnica del Contrato:</h4>
          <ul class="doctrine-list">
            <li><strong>Consensual:</strong> Se perfecciona por el solo consentimiento o acuerdo de voluntades. En obras privadas, lo pactado va más allá de lo escrito (en entidades públicas rigen formalismos y bases adicionales).</li>
            <li><strong>Principal:</strong> Subsiste por sí mismo sin necesidad de otra convención (a diferencia de contratos accesorios como fianzas o hipotecas).</li>
            <li><strong>Bilateral:</strong> Las partes contratantes se obligan recíprocamente (el mandante a pagar el precio convenido y el contratista a ejecutar la obra o prestar el servicio).</li>
            <li><strong>Oneroso:</strong> Tiene por objeto la utilidad de ambos contratantes, gravándose cada uno a beneficio del otro.</li>
            <li><strong>Conmutativo:</strong> Cada una de las partes se obliga a dar o hacer una cosa que se mira como equivalente a lo que la otra parte debe dar o hacer a su vez.</li>
            <li><strong>De ejecución diferida o de tracto sucesivo:</strong> Las obligaciones se cumplen periódicamente a lo largo del tiempo, reflejándose en estados de avance mensual y estados de pago (EDP).</li>
          </ul>

          <div class="callout-box ethical-box">
            <div class="callout-icon">⚖️</div>
            <div class="callout-content">
              <strong>Valores Éticos Precontractuales Clave:</strong>
              <div class="badge-row mt-2">
                <span class="concept-badge">Equidad (Igualdad de partes)</span>
                <span class="concept-badge">Confianza y Transparencia</span>
                <span class="concept-badge">Buena Fe Contractual</span>
                <span class="concept-badge">Empatía</span>
                <span class="concept-badge">Voluntad de Objetivo Común</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "note-1-2",
      section: "1.2 Materias Reguladas y Orden de Prelación Documental",
      tags: ["#Prelacion", "#Bases", "#Claims", "#Contratos"],
      summary: "Estructura típica de documentos contractuales y la jerarquía estricta de 13 niveles para resolver discrepancias técnicas y legales.",
      content: `
        <div class="note-section-body">
          <h4 class="subheading">Materias Típicas Reguladas en el Contrato:</h4>
          <p>Objeto y alcances del contrato, orden de prelación, precio y fórmula de reajuste, anticipos y estados de pago (EDP), obras extraordinarias, aumentos y disminuciones, subcontratación y Ley 20.123 (responsabilidad solidaria/subsidiaria), Libro de Obras Digital (LOD), calidad y vicios de construcción, recepción provisoria y definitiva, multas y limitación de responsabilidad (exclusión de lucro cesante y daño moral), seguros y resolución de controversias (Dispute Boards).</p>
          
          <h4 class="subheading mt-3">Orden de Prelación Canónico (13 Niveles de Jerarquía):</h4>
          <ol class="precedence-list">
            <li><span class="num">1</span> <strong>Contrato y sus modificaciones formales</strong> (Addendas)</li>
            <li><span class="num">2</span> <strong>Carta de Adjudicación</strong> emitida por el Mandante</li>
            <li><span class="num">3</span> <strong>Acuerdos escritos previos a la suscripción</strong> (exclusiones expresamente aceptadas)</li>
            <li><span class="num">4</span> <strong>Respuestas escritas a consultas y aclaraciones</strong> enviadas en licitación</li>
            <li><span class="num">5</span> <strong>Exclusiones formales a la Oferta</strong> del Contratista</li>
            <li><span class="num">6</span> <strong>Bases Administrativas Especiales (BAE)</strong></li>
            <li><span class="num">7</span> <strong>Bases de medición y pago</strong></li>
            <li><span class="num">8</span> <strong>Estándares de Seguridad (HSEC) y Calidad</strong></li>
            <li><span class="num">9</span> <strong>Bases Técnicas (BT), Planos y Especificaciones Técnicas (EETT)</strong></li>
            <li><span class="num">10</span> <strong>Bases Administrativas Generales (BAG)</strong></li>
            <li><span class="num">11</span> <strong>Aclaraciones a la Oferta Técnica o Económica</strong></li>
            <li><span class="num">12</span> <strong>Oferta Técnica del Contratista</strong></li>
            <li><span class="num">13</span> <strong>Oferta Económica del Contratista</strong></li>
          </ol>
        </div>
      `
    },
    {
      id: "note-1-3",
      section: "1.3 Modalidades de Contratación: Alcance y Pago",
      tags: ["#Modalidades", "#EPC", "#EPCM", "#SumaAlzada", "#PreciosUnitarios"],
      summary: "Matriz completa según alcance de servicios (profesionales vs. ejecución de obras) y según forma de remuneración económica.",
      content: `
        <div class="note-section-body">
          <div class="grid-two-col">
            <div class="col-card">
              <h4 class="subheading-accent">A. Según Alcance de Servicios:</h4>
              <p><strong>1. Limitadas a provisión de servicios profesionales:</strong></p>
              <ul>
                <li><strong>Ingeniería (E):</strong> Conceptual, básica o de detalle.</li>
                <li><strong>Ingeniería y Adquisiciones (EP):</strong> Diseño y compras estratégicas.</li>
                <li><strong>EPCM:</strong> Ingeniería, adquisiciones y gestión de la construcción (servicios profesionales de administración; los contratos de obra los firma el dueño).</li>
                <li><strong>Project Management Contract (PMC / CM):</strong> Gerenciamiento de proyecto.</li>
                <li><strong>Inspección Técnica de Obras (ITO):</strong> Fiscalización independiente.</li>
              </ul>
              <p class="mt-2"><strong>2. Que incluyen ejecución de obras:</strong></p>
              <ul>
                <li><strong>Construcción (C):</strong> Solo ejecución según ingeniería ajena.</li>
                <li><strong>Diseño y Construcción (D&B):</strong> Responsabilidad unificada.</li>
                <li><strong>EPC:</strong> Ingeniería, Adquisiciones y Construcción.</li>
                <li><strong>Llave en Mano (Turnkey - TK):</strong> Incluye tecnología y comisionamiento.</li>
                <li><strong>Concesiones BOT / DBFO:</strong> Incluye financiamiento y operación.</li>
              </ul>
            </div>

            <div class="col-card">
              <h4 class="subheading-accent">B. Según Modalidad de Pago:</h4>
              <ul>
                <li><strong>Suma Alzada (Lump Sum):</strong> Precio fijo global cerrado por la totalidad del alcance.</li>
                <li><strong>Serie de Precios Unitarios (PU):</strong> Remuneración por cubicación efectiva multiplicada por el precio fijado.</li>
                <li><strong>Precios Unitarios Mixtos:</strong> Precios unitarios con gastos generales y utilidades a suma alzada.</li>
                <li><strong>Gasto Reembolsable (Cost Plus):</strong> Reembolso de costos directos comprobables más honorario fijo o porcentual.</li>
                <li><strong>Esquemas Híbridos / Open Book:</strong> Estimación a libro abierto en etapa temprana con conversión posterior a EPC suma alzada.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "note-1-4",
      section: "1.4 Asociatividad en la Construcción y Partnering",
      tags: ["#Asociatividad", "#Partnering", "#Consorcios", "#CChC"],
      summary: "Estrategias de consorcio, esquemas temporales vs. permanentes y la realidad del Partnering en el mercado chileno.",
      content: `
        <div class="note-section-body">
          <h4 class="subheading">Tipologías de Asociatividad Estratégica:</h4>
          <ul class="doctrine-list">
            <li><strong>Entre Empresas Constructoras:</strong> Por cobertura geográfica, volumen de obra o sinergia de maquinarias y especialidades.</li>
            <li><strong>Entre Proveedores Tecnológicos y Constructoras:</strong> El tecnólogo lidera (plantas fotovoltaicas, desalinización marina, celulosa).</li>
            <li><strong>Entre Empresas de Ingeniería y Construcción:</strong> Creación de consorcios EPC.</li>
            <li><strong>Integración Vertical:</strong> Incorporando entidades financieras y empresas de operación para concesiones viales y hospitalarias.</li>
          </ul>

          <div class="callout-box mt-3">
            <div class="callout-icon">🤝</div>
            <div class="callout-content">
              <strong>Partnering (Alianza de Beneficio Mutuo):</strong>
              <p>Relación basada en 3 pilares: <em>Confianza, Compromiso a largo plazo y Visión compartida</em>. La doctrina advierte: <strong>no busca primordialmente abaratar costos o acortar plazos</strong>, sino alinear objetivos y mitigar litigios. Sin control estricto del dueño, puede aumentar el costo en un +30% y el plazo en un +20% (IPA).</p>
              <p class="text-sm text-muted">Impulsado en Chile por el Grupo de Trabajo Mandante-Contratista (CChC), la SChDC y el Programa Construye 2025 de CORFO.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "note-1-5",
      section: "1.5 Selección de Modalidad, Figura 1, Incentivos, EPCM y Concesiones BOT",
      tags: ["#Figura1", "#Incentivos", "#EPCM", "#ProjectFinance", "#ConcesionesBOT"],
      summary: "Los 7 factores gravitantes, la curva de transferencia de riesgos (Figura 1 IICh), riesgos del EPCM y el modelo BOT en concesiones chilenas.",
      content: `
        <div class="note-section-body">
          <h4 class="subheading">Los 7 Factores de Selección Contractual:</h4>
          <ol class="action-steps">
            <li><strong>Calidad y certeza de la información disponible:</strong> El factor de mayor gravitación técnica.</li>
            <li><strong>Alcance de los servicios o naturaleza de los trabajos:</strong> Complejidad y definición.</li>
            <li><strong>Riesgos del proyecto y su asignación:</strong> Capacidad de absorción de cada parte.</li>
            <li><strong>Plazos disponibles o requeridos:</strong> Presión de mercado o esquemas Fast Track.</li>
            <li><strong>Monto de la inversión total.</strong></li>
            <li><strong>Mercado laboral y de suministros estratégicos.</strong></li>
            <li><strong>Grado de participación del dueño:</strong> Proyectos Brownfield vs. Greenfield.</li>
          </ol>

          <div class="callout-box warning-box mt-3">
            <div class="callout-icon">📊</div>
            <div class="callout-content">
              <strong>Figura 1: Asignación de Riesgos (Instituto de Ingenieros de Chile, 2014)</strong>
              <p>Eje X: <em>Costo Reembolsable</em> (Riesgo máximo retenido por el Dueño).</p>
              <p>Eje Y: <em>Suma Alzada Llave en Mano</em> (Riesgo máximo transferido al Contratista mediante Prima de Riesgo).</p>
              <p>Eje Z: <em>Cobertura del Riesgo</em> (A mayor definición de ingeniería, menor es la incertidumbre).</p>
              <p class="text-sm"><em>Alerta Pericial:</em> Una Suma Alzada licitada con ingeniería precaria transfiere un falso blindaje; ante sucesivos cambios de alcance, el riesgo y el sobrecosto retornan inexorablemente al Dueño.</p>
            </div>
          </div>

          <h4 class="subheading mt-3">Concesiones de OOPP en Chile (DFL MOP 164 / DS 900 de 1996):</h4>
          <p>Es un caso especial de <strong>BOT (Build, Operate and Transfer)</strong>. En la legislación chilena, los terrenos y obras son <strong>propiedad del Estado de Chile desde el primer día</strong>. El concesionario obtiene el derecho de explotación, por lo que al término del contrato únicamente opera la transferencia de la gestión operativa (a diferencia del esquema BOOT donde se transfiere el dominio legal).</p>
        </div>
      `
    }
  ],

  // BLOQUE B: ÉNFASIS DEL PROFESOR & REFLEXIONES DE TERRENO (8 Audios + Diferenciación de autoría)
  audios: [
    {
      id: "audio-1",
      title: "Audio 1: Subcontratos y Efecto Cascada (Sección 3.2)",
      sourceType: "professor", // "professor" | "esteban"
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "🔥 FOCO DE EXAMEN UC",
      duration: "02:15",
      summary: "El contratista principal se convierte en un administrador de subcontratos. Los desequilibrios del contrato principal se trasladan con mayor gravedad a los subcontratistas aguas abajo.",
      literalText: "A través del tiempo, los contratistas de construcción se han convertido en organizaciones empresariales que tienen la habilidad de subcontratar (con subcontratistas eficientes y especializados) una gran parte de la obra que se les encarga, en su rol de contratista principal. Desde este rol, ellos realizan una labor de administración de las actividades de sus subcontratistas, sin que ello los libere de la responsabilidad por el total de la obra frente al mandante último o dueño del proyecto. Los desequilibrios que pueda adolecer el contrato principal tenderán a manifestarse con mayor grado en los subcontratos que celebre el contratista con sus subcontratistas, ya que serán estos los que permitirán al contratista alcanzar o reponer de alguna forma tal desequilibrio, con franco riesgo para el proyecto.",
      itoFieldInsight: "Comprobado en terreno: Si el contrato principal castiga el flujo de caja del contratista, éste asfixia a los subcontratistas menores reteniendo pagos, provocando paralizaciones y deserciones en partidas críticas."
    },
    {
      id: "audio-2",
      title: "Audio 2: Flexibilidad, Equidad y Contratos de Adhesión (Sección 4.2)",
      sourceType: "professor",
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "🔥 FOCO DE EXAMEN UC",
      duration: "03:10",
      summary: "Los contratos de adhesión rigidizan la gestión. En el sector público aseguran legalidad vía Contraloría, pero impiden resolver cambios técnicos en licitación y obra.",
      literalText: "El hecho de que el contrato no sea perfeccionado con el objetivo de mantener un equilibrio entre los derechos y obligaciones de las partes, transparentando los intereses y reales capacidades de las mismas, es un grave error. Por eso, la resistencia al contrato de adhesión complicará la gestión futura del contrato, siendo todos perjudicados: el proyecto, el mandante y el contratista. En la medida en que se avance con equidad en el proceso de elaboración del contrato, se habrá mejorado en gestión de proyectos y sus contratos. Los contratos de adhesión podrán ser justificables en algunas organizaciones (por ejemplo, instituciones públicas del país por la actuación de la Contraloría General de la República, quien previamente toma razón de las Bases de llamado a licitación). Algunos de estos casos pueden generar un efecto positivo, ya que garantizan el estricto apego a la legalidad. Sin embargo, es importante recordar que a la vez generan una contrapartida negativa, ya que rigidizan el proceso al dificultar un cambio posterior a nivel de contrato. Incluso, rigidiza el proceso de licitación, puesto que durante el período de consultas y aclaraciones impide realizar ajustes a las bases de licitación sin la correspondiente visación por la entidad contralora.",
      itoFieldInsight: "La rigidez de las bases públicas impide corregir errores evidentes en el período de consultas, obligando a resolverlos mediante modificaciones costosas durante la ejecución."
    },
    {
      id: "audio-3",
      title: "Audio 3: Factores que impulsan la Asociatividad (Sección 6.1)",
      sourceType: "professor",
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "Foco Doctrinal UC",
      duration: "02:40",
      summary: "4 fuerzas motrices: globalización, magnitud de megaproyectos, exigencia de paquetes integrales (EPC/BOT) y entorno propicio con respaldo financiero.",
      literalText: "La asociatividad es una estrategia de relación entre una o más empresas mediante la cual comparten un proyecto o uno de sus contratos y que les permite obtener a los integrantes ventajas que individualmente no les sería posible alcanzar. Corresponde a nuevas formas de gestión generadas para operar en los escenarios de negocios actuales, después de dos o tres décadas de cambios. Los factores que impulsan la asociatividad incluyen: 1) La globalización, mayor competencia, especialización productiva y tecnología en comunicaciones; 2) La magnitud de los proyectos (integrar especialidades, capacidad financiera, economías de escala y proyectos fast track); 3) Exigencia de los clientes (mercado) por servicios más integrales en un solo paquete (ingeniería, adquisiciones, construcción, puesta en marcha, financiamiento y operación, como concesiones o BOT); y 4) Entorno propicio a las asociaciones o consorcios, con marco legal adecuado y buena recepción de agentes financieros.",
      itoFieldInsight: "En megaproyectos industriales, los consorcios son obligatorios para cumplir con las exigencias de boletas de garantía y experiencia previa en licitaciones internacionales."
    },
    {
      id: "audio-4",
      title: "Audio 4: El Contrato EPC y Liderazgo de Consorcio (Sección 6.3)",
      sourceType: "professor",
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "🔥 FOCO DE EXAMEN UC",
      duration: "02:50",
      summary: "El contratista EPC avala la ingeniería básica. Las utilidades deben generarse a nivel del consorcio consolidado y no mediante canibalismo en subcontratos entre socios.",
      literalText: "Los contratos EPC se materializan a partir de la finalización de la ingeniería básica o con cierto avance de la ingeniería de detalle. El contratista EPC se caracteriza porque: está más cerca del cliente porque entiende el negocio y puede avalar la ingeniería básica; tiene una visión más global del proyecto; define la mayor parte de la inversión; y desempeña un rol clave en la puesta en marcha. Al interior del consorcio, en la propuesta se puede definir un incentivo por éxito, mientras que en la ejecución las utilidades deberán generarse a nivel del consorcio y no en subcontratos o aportes de socios individuales, nombrando un gerente con liderazgo fuerte. Con el mandante, los acuerdos van desde suma alzada o llave en mano hasta compartir resultados económicos, precios unitarios o costos reembolsables más honorario fijo o incentivos.",
      itoFieldInsight: "Si los socios de un consorcio intentan lucrar cobrándose sobrecostos en subcontratos internos, el consorcio colapsa antes del comisionamiento de la obra."
    },
    {
      id: "audio-5",
      title: "Audio 5: Acuerdo de Partnering y sus Peligros (Secciones 6.4 y 6.4.2)",
      sourceType: "professor",
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "🔥 FOCO DE EXAMEN UC",
      duration: "03:00",
      summary: "Basado en confianza, largo plazo y visión compartida. NO reduce costo ni plazo directamente. Si el dueño relaja el control: +30% costo y +20% plazo (IPA).",
      literalText: "El acuerdo de partnering (o de beneficio mutuo) consiste en establecer claros objetivos que beneficien a las partes, logrando una relación que promueva dichos objetivos, basado en la confianza, cooperación y espíritu de equipo. Estos contratos ofrecen beneficios comerciales a ambas partes y mejoran eficiencia. Sus tres elementos claves son: confianza entre las partes, compromiso de largo plazo y visión compartida. Partnering es más difícil de implementar y mantener que lo que las expectativas sugieren. El papel del propietario sigue siendo crítico (si no controla, puede tener 30% más de costo y 20% más de plazo según IPA). Los mejores partnering mantienen contacto con el mercado. Los beneficios del partnering no se ubican en la disminución del costo del proyecto o en acortar los plazos, sino en establecer objetivos claros que beneficien a ambas partes.",
      itoFieldInsight: "Alerta máxima para la ITO: La 'buena fe' o el partnering jamás sustituyen la fiscalización de ensayos de hormigón, recepción de armaduras ni trazabilidad documental."
    },
    {
      id: "audio-6",
      title: "Audio 6: EPC Suma Alzada y Prima de Riesgo (Sección 7.2.1)",
      sourceType: "professor",
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "Foco Doctrinal UC",
      duration: "02:10",
      summary: "Los contratos a suma alzada son en el papel más caros porque incluyen una prima considerable por absorber incertidumbres y riesgos imprevistos.",
      literalText: "Por ejemplo, los contratos EPC a suma alzada serán, en el papel, más caros, pues los contratistas no pueden cargar con un largo listado de riesgos sin una prima ad-hoc importante. El sector privado licita regularmente con este tipo de formatos, con conocimiento de la prima que se paga. Hay prácticas que mejoran el uso de estos contratos, pero involucran al dueño en parte del riesgo. Sin embargo, en cualquier caso, el mandante debe analizar si el precio adicional de la prima es justificable frente al escenario de riesgos específico de cada proyecto o contrato.",
      itoFieldInsight: "El mandante paga una prima alta creyendo estar blindado, pero si la ingeniería es deficiente, terminará pagando la prima Y además los claims por obras extraordinarias."
    },
    {
      id: "audio-7",
      title: "Audio 7: Early Contractor Involvement - ECI (Sección 7.2.2)",
      sourceType: "professor",
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "Innovación Contractual",
      duration: "02:30",
      summary: "Involucramiento temprano en factibilidad bajo esquema reembolsable o PU, transformándose en EPC Suma Alzada al completar 70-80% de ingeniería de detalle.",
      literalText: "Una de dichas opciones, solo a modo de ilustración, podría ser el uso del involucramiento temprano de contratistas (Early Contractor Involvement), esquema bajo el cual un contratista de construcción participa anticipadamente en el proyecto (típicamente durante la fase de factibilidad). Durante una primera etapa, su alcance de trabajo es definido como contrato de ingeniería (E) o de ingeniería y adquisiciones (EP), y su modalidad de pago puede ser definida a costos reembolsables o precios unitarios, pero solo hasta completar la ingeniería hasta un porcentaje preacordado (típicamente 70 u 80%), momento en el cual el contrato muta a un esquema EPC a suma alzada. En estos esquemas híbridos es normal que se definan incentivos para compartir riesgos de programa y presupuesto.",
      itoFieldInsight: "El ECI permite capturar la constructibilidad real desde el diseño, evitando interferencias de piping y armaduras que en terreno costarían millones."
    },
    {
      id: "audio-8",
      title: "Audio 8: Conclusiones de la Clase 3 y Futuro en Chile (Sección 8)",
      sourceType: "professor",
      authorName: "Prof. Germán Millán Valdés",
      authorRole: "Cátedra UC · Clase Ejecutiva",
      badge: "Cierre de Cátedra",
      duration: "02:20",
      summary: "La selección del contrato es responsabilidad del mandante. Tendencia internacional hacia colaboración, pero en Chile aún predomina la litigación y la adhesión rígida.",
      literalText: "Existen numerosas modalidades de contratación que se usan en la industria, definidas según el alcance de los servicios y según la forma de pago del contrato. El proceso de selección de la modalidad contractual es responsabilidad del dueño o mandante del proyecto y debe responder a una estrategia de contratación apropiada y oportuna a cada caso. Idealmente, no debería estar limitado por estándares corporativos que no siempre satisfacen las necesidades específicas de cada proyecto. La práctica internacional indica que además de tendencias de estandarización de contratos, hay también un deseo de avanzar hacia modalidades de contratación más colaborativas. Sin embargo, en Chile tenemos un largo camino por delante.",
      itoFieldInsight: "El gran desafío de MEGA INSPECCIÓN es promover la gobernanza contractual transparente: contratos equilibrados, Libro de Obras Digital riguroso y paneles tempranos (Dispute Boards)."
    }
  ],

  // BLOQUE C: GLOSARIO DE INGLÉS TÉCNICO CONTRACTUAL & CONTECH (16 Términos en modo dual)
  glossary: [
    {
      id: "eng-1",
      term: "Partnering",
      etymology: "De partner (socio) + sufijo verbal -ing (asociarse en beneficio mutuo).",
      meaning: "Acuerdo colaborativo formal de beneficio mutuo basado en confianza, visión compartida y compromiso de largo plazo para mitigar litigios y maximizar valor.",
      examAlert: "ALERTA EXAMEN: El objetivo no es reducir costo ni acortar plazos. Sin control estricto del dueño genera +30% costo y +20% plazo según Independent Project Analysis (IPA)."
    },
    {
      id: "eng-2",
      term: "Integrated Project Delivery (IPD)",
      etymology: "Entrega Integrada de Proyectos (concepto norteamericano de gobernanza compartida).",
      meaning: "Modelo contractual colaborativo que une formalmente a Dueño, Arquitecto/Diseñador y Constructor Principal bajo un único contrato con riesgo y beneficio económico compartido.",
      examAlert: "ALERTA EXAMEN: Se apoya de forma obligatoria en metodologías BIM y Lean Construction (Target Value Design) para eliminar el desperdicio desde el diseño."
    },
    {
      id: "eng-3",
      term: "Fast Track",
      etymology: "Vía Rápida (del atletismo: carril de aceleración).",
      meaning: "Estrategia de ejecución acelerada donde la construcción de fases tempranas se inicia antes de que la ingeniería de detalle de fases posteriores esté concluida.",
      examAlert: "ALERTA FAENA: Genera altísima volatilidad de costos, retrabajos por interferencias imprevistas y abundancia de órdenes de cambio (Claims)."
    },
    {
      id: "eng-4",
      term: "Schedule Driven",
      etymology: "Impulsado o gobernado por el cronograma/plazo.",
      meaning: "Proyecto donde la fecha de término o puesta en marcha es inamovible (ej. puesta en marcha de planta minera o estadio deportivo) y prima por sobre el costo directo.",
      examAlert: "ALERTA EXAMEN: La doctrina UC advierte que ante proyectos schedule driven, lo eficiente es una rigurosa planificación y secuenciación, no el pago desmedido de incentivos."
    },
    {
      id: "eng-5",
      term: "Early Contractor Involvement (ECI)",
      etymology: "Involucramiento Temprano del Contratista.",
      meaning: "Incorporación formal del constructor durante la ingeniería básica o factibilidad bajo modalidad de servicios reembolsables, para luego cotizar a suma alzada al 70-80% de avance de ingeniería.",
      examAlert: "ALERTA DOCTRINAL: Aporta la visión de constructibilidad y rendimientos reales de faena antes de congelar el presupuesto del proyecto."
    },
    {
      id: "eng-6",
      term: "EPC vs. EPCM",
      etymology: "Engineering, Procurement and Construction vs. ...Construction Management.",
      meaning: "EPC es un contrato de ejecución integral llave en mano con precio y plazo cerrado. EPCM es un contrato de provisión de servicios profesionales donde el agente diseña y administra, pero los contratos de obra los firma el dueño.",
      examAlert: "ALERTA EXAMEN: Riesgo crítico en EPCM: Conflicto de interés del agente (ocultar errores de diseño o compras tardías) y duplicidad de mandantes ante los contratistas."
    },
    {
      id: "eng-7",
      term: "Turnkey (TK)",
      etymology: "Girar la llave en la cerradura (Llave en Mano).",
      meaning: "Modalidad en que el contratista asume la ingeniería, compras, construcción, pruebas de montaje y puesta en marcha completa de la planta hasta su operación comercial óptima.",
      examAlert: "ALERTA CONTRACTUAL: Máxima transferencia de riesgo al contratista. Exige especificaciones funcionales impecables por parte del mandante."
    },
    {
      id: "eng-8",
      term: "BOT vs. BOOT",
      etymology: "Build, (Own), Operate and Transfer.",
      meaning: "En BOT el agente construye, opera y transfiere el activo. En BOOT además mantiene la titularidad dominical durante la concesión.",
      examAlert: "ALERTA EXAMEN: En Chile, las concesiones de Obras Públicas (DFL MOP 164) son BOT: los bienes son propiedad del Estado desde el inicio; al término de la concesión solo se transfiere la operación."
    },
    {
      id: "eng-9",
      term: "Greenfield vs. Brownfield",
      etymology: "Campo Verde (terreno virgen) vs. Campo Pardo (sitio industrial existente).",
      meaning: "Greenfield representa proyectos en sitios nuevos sin infraestructura previa (ideal para Suma Alzada). Brownfield implica ampliaciones dentro de plantas activas con altas interferencias operacionales.",
      examAlert: "ALERTA TERRENO: En proyectos Brownfield licitar a suma alzada es un error severo; es preferible modalidades reembolsables con fuerte fiscalización del dueño."
    },
    {
      id: "eng-10",
      term: "Open Book Estimate",
      etymology: "Estimación a Libro Abierto.",
      meaning: "Metodología donde el contratista transparenta 100% sus costos directos reales, cotizaciones de subcontratos y márgenes brutos ante el mandante durante la preinversión.",
      examAlert: "ALERTA EXAMEN: Es la base ética para transformar contratos de etapas tempranas a precios cerrados justos y con menor prima de contingencia."
    },
    {
      id: "eng-11",
      term: "Project Finance",
      etymology: "Financiamiento de Proyecto sin Recurso.",
      meaning: "Mecanismo de estructuración financiera donde el crédito es garantizado exclusivamente por los flujos de caja futuros del proyecto, exigiendo un aporte inicial del dueño de solo 10% a 30%.",
      examAlert: "ALERTA FINANCIERA: Los bancos acreedores imponen la creación de una SPV (Special Purpose Vehicle) y exigen contratos EPC a Suma Alzada aguas abajo con un 95% de nivel de confianza."
    },
    {
      id: "eng-12",
      term: "Completion Guarantees & Covenants",
      etymology: "Garantías de Terminación Física y Compromisos/Pactos Financieros.",
      meaning: "Cláusulas estrictas impuestas por entidades financieras que exigen certificación técnica de funcionamiento y ratios mínimos de cobertura de deuda (DSCR) antes de liberar garantías.",
      examAlert: "ALERTA ITO: La recepción provisoria otorgada por la ITO o el Auditor Técnico Independiente gatilla la conversión del crédito de construcción al crédito de largo plazo."
    },
    {
      id: "eng-13",
      term: "Body Shop Contract",
      etymology: "Taller de provisión de personal (literal).",
      meaning: "Contrato de provisión de horas-hombre profesionales especializadas que se incorporan directamente a la estructura orgánica del mandante para fiscalizar o gestionar el proyecto.",
      examAlert: "ALERTA GESTIÓN: Alternativa económica al EPCM cuando el mandante cuenta con liderazgo interno robusto y desea evitar las altas tarifas de indirectos de grandes corporaciones."
    },
    {
      id: "eng-14",
      term: "Dispute Boards (DB)",
      etymology: "Paneles Técnicos de Prevención y Solución Temprana de Controversias.",
      meaning: "Panel de expertos independientes (DRB, DAB o CDB) constituido desde el día uno de la obra para acompañar la faena y dirimir diferencias en tiempo real antes de llegar a tribunales.",
      examAlert: "ALERTA EXAMEN: Estadísticamente resuelven de forma pacífica más del 95% de las desavenencias técnicas, evitando costosos juicios arbitrales posteriores."
    },
    {
      id: "eng-15",
      term: "BIM & Revit",
      etymology: "Building Information Modeling / Revise-Instantly.",
      meaning: "Metodología de modelado de información de la construcción en 3D/4D/5D con parámetros físicos y contractuales integrados para detección geométrica de interferencias.",
      examAlert: "ALERTA NORMATIVA: En Chile es exigido por el Estándar PlanBIM en licitaciones del sector público para blindar la constructibilidad previa."
    },
    {
      id: "eng-16",
      term: "Last Planner System (LPS) & Lean Construction",
      etymology: "Sistema del Último Planificador y Filosofía de Construcción sin Pérdidas.",
      meaning: "Sistema de control de producción que asegura la confiabilidad del flujo de trabajo mediante compromisos semanales (Plan Diario/Semanal), análisis de restricciones (Lookahead) y medición del PPC.",
      examAlert: "ALERTA FAENA: Nunca debe permitirse el paso de una partida al programa semanal si sus restricciones técnicas, de suministros o de permisos no han sido 100% liberadas."
    }
  ],

  // BLOQUE D: BANCO AUDITADO DE 14 PREGUNTAS (SIMULADOR DE EXAMEN UC)
  questions: [
    {
      id: "q-1",
      number: 1,
      type: "multiple", // selección múltiple
      text: "¿Cuál o cuáles de las siguientes alternativas corresponden a formas de clasificación del contrato?",
      options: [
        "Consensual",
        "De extremo retorno",
        "Conmutativo",
        "Diferido"
      ],
      correctIndexes: [0, 2],
      doctrineExplanation: "Los contratos se clasifican formalmente en Consensuales, Principales, Bilaterales, Onerosos, Conmutativos y de Ejecución Diferida o Tracto Sucesivo.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: 'Diferido' a secas es una trampa de distractor; la categoría formal de la doctrina es 'De ejecución diferida o tracto sucesivo'. 'De extremo retorno' es un distractor inventado."
    },
    {
      id: "q-2",
      number: 2,
      type: "multiple",
      text: "¿Qué modalidades de contrato son las más comunes en función del alcance de los servicios?",
      options: [
        "Modalidades limitadas a la provisión de servicios profesionales",
        "Modalidades de costo controlado",
        "Modalidades que excluyen ejecución de obras por temporada",
        "Modalidades que incluyen ejecución de obras"
      ],
      correctIndexes: [0, 3],
      doctrineExplanation: "Según la doctrina del Prof. Germán Millán (Sección 5), la división troncal según alcance es: 1) Limitadas a provisión de servicios profesionales (E, EP, EPCM, PMC, ITO) y 2) Que incluyen ejecución de obras (C, D&B, EPC, Turnkey, BOT).",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Las alternativas 2 y 3 son inventadas con terminología verosímil para distraer al alumno."
    },
    {
      id: "q-3",
      number: 3,
      type: "single",
      text: "¿Qué factor es uno de los que impulsa la asociatividad en la industria de la construcción?",
      options: [
        "Simultaneidad de proyectos",
        "Superávit fiscal",
        "Crisis económicas",
        "Entorno propicio a las asociaciones o consorcios"
      ],
      correctIndex: 3,
      doctrineExplanation: "La sección 6.1 establece taxativamente 4 factores: globalización, magnitud de los proyectos, exigencia de clientes por servicios integrales y entorno propicio a las asociaciones o consorcios (con marco legal y financiero adecuado).",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Las crisis económicas o la simultaneidad no son factores de impulso de asociatividad en la literatura de la UC."
    },
    {
      id: "q-4",
      number: 4,
      type: "multiple",
      text: "¿Qué tipos de contrato existen de acuerdo con su modalidad de pago?",
      options: [
        "Suma alzada",
        "Precios unitarios",
        "Precios variables",
        "Reembolsables"
      ],
      correctIndexes: [0, 1, 3],
      doctrineExplanation: "Las modalidades puras de pago son: Suma Alzada (Lump sum), Precios Unitarios (Unit Price) y Costos Reembolsables (Cost Plus).",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: 'Precios variables' es una formulación falsa. No existe en la clasificación canónica."
    },
    {
      id: "q-5",
      number: 5,
      type: "single",
      text: "La asociación permanente corresponde a:",
      options: [
        "Alianzas coyunturales por una sola licitación de corto plazo sin compartir riesgos societarios.",
        "Convenios con esquemas societarios que contribuyan a la estabilidad en el tiempo. Estas exigen gran apertura entre socios, con una alta cuota de confianza.",
        "Contratos de subcontratación de mano de obra regidos por la Ley 20.123.",
        "Acuerdos verbales de caballeros entre directores de empresas sin registro legal."
      ],
      correctIndex: 1,
      doctrineExplanation: "A diferencia de las asociaciones coyunturales (para un solo contrato específico), las permanentes configuran esquemas societarios duraderos con alta cuota de confianza y apertura estratégica.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Confundir permanente con coyuntural es la causa más frecuente de error en este control."
    },
    {
      id: "q-6",
      number: 6,
      type: "single",
      text: "Respecto a los contratos de proyectos de ingeniería y construcción: I. Son íntegros y no requieren documentos adicionales; II. Son negociados de buena fe; III. Son precedidos por bases administrativas generales y especiales; IV. Muchos mandantes usan contratos por adhesión con asignación desbalanceada de riesgos. ¿Cuáles son verdaderas?",
      options: [
        "Solo I y II",
        "II, III y IV",
        "I, II y IV",
        "Todas son verdaderas"
      ],
      correctIndex: 1,
      doctrineExplanation: "La afirmación I es categóricamente falsa: los contratos de construcción se integran por una multiplicidad de documentos (planos, EETT, BAE, BAG, addendas, etc.). II, III y IV son verdaderas.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Nunca un contrato de obra es 'íntegro por sí mismo' sin anexos técnicos y bases."
    },
    {
      id: "q-7",
      number: 7,
      type: "single",
      text: "Las Asociaciones Público-Privadas (APPs / Concesiones) permiten al Estado transferir ciertos riesgos. Analice: I. El concesionario recibe los diseños listos y no asume riesgo de ingeniería; II. El concesionario asume la construcción cumpliendo plazos y costos; III. El Estado asegura y garantiza el 100% del financiamiento bancario; IV. Se transfiere el riesgo de demanda con mecanismos de piso y cielo; V. El concesionario puede percibir ingresos comerciales más allá de la demanda. ¿Cuáles son correctas?",
      options: [
        "I, II y III",
        "Solo II y IV",
        "II, IV y V",
        "I, III y V"
      ],
      correctIndex: 2,
      doctrineExplanation: "I es falsa (el concesionario desarrolla la ingeniería de detalle) y III es falsa (el concesionario asegura y arriesga su propio financiamiento vía Project Finance). II, IV y V son plenamente correctas.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: El Estado jamás financia el 100% en concesiones BOT; el modelo se basa en capital privado y deuda asumida por la sociedad concesionaria."
    },
    {
      id: "q-8",
      number: 8,
      type: "single",
      text: "¿Cómo se completan los campos X, Y y Z en la Figura 1 (Asignación de Riesgos en Modalidades Contractuales, IICh 2014)?",
      options: [
        "X: Suma alzada, Y: Costo reembolsable, Z: Margen de utilidad",
        "X: Precios unitarios, Y: EPCM, Z: Prima de riesgo",
        "X: Costo reembolsable, Y: Suma alzada Llave en mano, Z: Cobertura del riesgo",
        "X: Llave en mano, Y: Costo reembolsable, Z: Holgura del cronograma"
      ],
      correctIndex: 2,
      doctrineExplanation: "En el gráfico del Instituto de Ingenieros de Chile (2014), el eje X inicia con el Costo Reembolsable (mayor riesgo para el dueño), el extremo Y culmina con la Suma Alzada Llave en Mano (mayor riesgo asumido por el contratista), y la franja Z define la Cobertura del Riesgo.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Los distractores invierten los ejes de asignación de riesgos entre Mandante y Contratista."
    },
    {
      id: "q-9",
      number: 9,
      type: "single",
      text: "Los factores que impulsan la Asociatividad en la industria según la Cátedra UC incluyen: I. Globalización y mayor competencia; II. Magnitud de los proyectos y proyectos fast track; III. Exigencia de los clientes por servicios integrales en un solo paquete; IV. Entorno propicio a las asociaciones con marco legal y financiero.",
      options: [
        "Solo I y III",
        "Solo II y IV",
        "I, II, III y IV",
        "Solo I, II y III"
      ],
      correctIndex: 2,
      doctrineExplanation: "Las cuatro premisas corresponden textualmente a los cuatro factores explicados en la Sección 6.1 y en el Audio 3 del profesor.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Todas son plenamente verdaderas; no caiga en descartar el factor financiero."
    },
    {
      id: "q-10",
      number: 10,
      type: "single",
      text: "Al enfrentarse a la decisión de qué modalidad contractual utilizar, el mandante deberá tomar en cuenta: I. Calidad y certeza de la información disponible; II. Alcance de los servicios o naturaleza de los trabajos; III. No es necesario considerar los riesgos del proyecto pues siempre los asume la constructora; IV. Monto de la inversión. ¿Cuáles son correctas?",
      options: [
        "I, II, III y IV",
        "Solo I y II",
        "I, II y IV",
        "Solo III y IV"
      ],
      correctIndex: 2,
      doctrineExplanation: "La afirmación III es un error conceptual grave: los riesgos son uno de los 7 factores determinantes y jamás deben cargarse ciegamente al contratista sin generar sobrecostos o litigios. Correctas: I, II y IV.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Todo enunciado que afirme que 'los riesgos no importan o los absorbe 100% la constructora' es falso."
    },
    {
      id: "q-11",
      number: 11,
      type: "single",
      text: "¿A qué concepto corresponde: 'Estrategia de relación entre una o más empresas, mediante la cual comparten un proyecto o uno de sus contratos, y que les permite obtener a los integrantes, ventajas que individualmente no les sería posible alcanzar'?",
      options: [
        "Contratación por Adhesión",
        "Inspección Técnica de Obras (ITO)",
        "Early Contractor Involvement",
        "Asociatividad"
      ],
      correctIndex: 3,
      doctrineExplanation: "Definición textual y literal de Asociatividad en la doctrina de la Clase 3 de Contratos UC.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Distractores conceptuales que apuntan a etapas de diseño o fiscalización."
    },
    {
      id: "q-12",
      number: 12,
      type: "single",
      text: "Entre las características del contrato, este puede ser clasificado como: I. Consensual; II. Principal: no subsiste por sí mismo; III. Conmutativo; IV. De ejecución diferida o tracto sucesivo. ¿Cuáles son correctas?",
      options: [
        "I, II, III y IV",
        "Solo I y III",
        "I, III y IV",
        "Solo II y IV"
      ],
      correctIndex: 2,
      doctrineExplanation: "La premisa II contiene una falsedad deliberada: el contrato Principal SÍ subsiste por sí mismo (los accesorios son los que no subsisten por sí mismos). Por ende, son correctas I, III y IV.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Lea con máxima atención la definición de 'Principal'; el distractor invirtió la definición legal."
    },
    {
      id: "q-13",
      number: 13,
      type: "single",
      text: "¿A qué concepto corresponde: 'Consiste en establecer claros objetivos que beneficien a las partes, logrando una relación que promueva dichos objetivos, basado en la confianza, cooperación y espíritu de equipo. Estos contratos ofrecen beneficios comerciales a ambas partes y mejoran eficiencia'?",
      options: [
        "Project Management Contract (PMC)",
        "Contrato Turnkey",
        "Acuerdo de Partnering",
        "Contrato EPC a Suma Alzada"
      ],
      correctIndex: 2,
      doctrineExplanation: "Definición canónica de Acuerdo de Partnering (beneficio mutuo y relación de confianza) de las secciones 6.4 y 6.4.2.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: El Partnering no es un tipo de pago ni un alcance de ingeniería; es una filosofía de alianza colaborativa."
    },
    {
      id: "q-14",
      number: 14,
      type: "single",
      text: "Respecto a las materias que un contrato regula en su estructura jurídica y operativa, se incluyen: I. Obligaciones laborales en subcontratación y Ley 20.123; II. Precio, forma de pago, anticipo y estados de pago (EDP); III. Objeto del contrato y delimitación de alcances; IV. Calidad de materiales y responsabilidad por vicios de construcción.",
      options: [
        "Solo II y III",
        "Solo I, II y III",
        "Todas las afirmaciones son verdaderas",
        "Solo I y IV"
      ],
      correctIndex: 2,
      doctrineExplanation: "Todas las afirmaciones forman parte de las materias troncales reguladas en los contratos de construcción bajo estándar nacional e internacional.",
      examTrapWarning: "⚠️ ALERTA DE TRAMPA UC: Ninguna de las 4 opciones es prescindible en un contrato de construcción profesional."
    }
  ],

  // BLOQUE E: LABORATORIO DE FORO (Caso Práctico Resuelto: ERNC & 100 PYMES)
  forum: {
    caseTitle: "Caso Práctico de Discusión: Crisis de Contratación en el Sector de Energías Renovables (ERNC) y Quiebra de 100 PYMES Subcontratistas",
    subject: "Análisis sobre regulación, gestión contractual y responsabilidad del mandante en proyectos de inversión",
    context: "Durante el auge de las plantas solares y eólicas en el norte y sur de Chile, diversos consorcios extranjeros celebraron contratos EPC internacionales imponiendo contratos de adhesión a subcontratistas locales chilenos. Ante desequilibrios de costos y atrasos, el contratista principal retuvo estados de pago y abandonó la obra, dejando una deuda multimillonaria a más de 100 PYMES subcontratistas.",
    academicResponse: `
      <div class="forum-resolution-content">
        <div class="forum-quote-card">
          <p><strong>Estimado profesor y compañeros:</strong> Comparto mi reflexión técnica respecto al caso y las interrogantes planteadas, integrando los conceptos de la Clase 3 con la realidad empírica de fiscalización en terreno:</p>
        </div>

        <h4 class="subheading mt-3">1. Regulación Estatal y el Rol de las PYMES en la Formación de Contratos:</h4>
        <p>La regulación estatal no es la panacea por sí sola, pero el sector de las ERNC requiere filtros más rigurosos. Una medida efectiva sería homologar los estándares de compras públicas al ámbito privado estratégico, creando <strong>registros obligatorios de contratistas</strong> que exijan solvencia financiera, capacidad técnica comprobable y programas de compliance antes de adjudicar.</p>
        <p>Sin embargo, la solución estructural radica en la gestión privada del contrato. Como establece la doctrina, <em>el contrato es ley para las partes</em>. Las PYMES subcontratistas no deben someterse pasivamente a <strong>contratos de adhesión leoninos</strong>. Deben adoptar 3 medidas periciales:</p>
        <ul>
          <li><strong>Due Diligence Básica:</strong> Auditar la solvencia financiera y garantías de la casa matriz de la empresa extranjera antes de firmar.</li>
          <li><strong>Garantías Recíprocas:</strong> Así como el contratista exige boletas de garantía y retenciones, la PYME debe pactar anticipos garantizados o cartas de crédito bancarias que blinden su flujo de caja.</li>
          <li><strong>Matriz de Responsabilidades Claras:</strong> No aceptar transferencias unilaterales de riesgos que la PYME no puede controlar (ej. obtención de permisos sectoriales o demoras en la entrega física del terreno por parte del mandante).</li>
        </ul>

        <h4 class="subheading mt-3">2. Responsabilidad del Mandante y Supervisión de la Inspección Técnica (ITO):</h4>
        <p>El Mandante o Dueño último del proyecto no puede desentenderse alegando que su relación contractual es 'únicamente con el contratista EPC'. Los desequilibrios del contrato principal se trasladan en efecto cascada con mayor violencia a los subcontratistas.</p>
        <p>Para mitigar este riesgo, el Mandante debe implementar contractualmente:</p>
        <ol>
          <li><strong>Auditoría Estricta de la Ley 20.123:</strong> Exigir mes a mes los certificados F30 y F30-1, acreditando el pago íntegro de cotizaciones y remuneraciones de la totalidad de la cadena de subcontratación antes de cursar cualquier Estado de Pago.</li>
          <li><strong>Cláusulas de Pago Directo:</strong> Establecer la facultad expresa del mandante de pagar directamente a los subcontratistas con cargo a los fondos retenidos del contratista principal en caso de incumplimiento grave comprobado.</li>
          <li><strong>Control Implacable de la Curva S (Físico vs. Financiero):</strong> Auditar que los primeros EDPs no se encuentren abultados con partidas de instalación de faena o compras anticipadas que desfinancien la fase de montaje y terminaciones.</li>
        </ol>

        <div class="callout-box success-box mt-3">
          <div class="callout-icon">👷</div>
          <div class="callout-content">
            <strong>Reflexión del CEO J. Esteban Mella Gallardo (24 años como ITO):</strong>
            <p><em>«En terreno hemos presenciado casos donde consorcios intentan adelantar artificialmente la Curva S financiera cobrando partidas tempranas sin respaldo físico real. Cuando el flujo se invierte en las etapas complejas, el contratista opta por el abandono estratégico. La única barrera de contención es una Inspección Técnica de Obras rigurosa que entienda la administración contractual, audite la trazabilidad documental y resguarde la integridad de la faena.»</em></p>
          </div>
        </div>
      </div>
    `
  }
};
