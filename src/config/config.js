import { ASIGNATURAS_PRIMERO } from '../json/_meta/primero/index';
import { ASIGNATURAS_SEGUNDO } from '../json/_meta/segundo/index';
import { ASIGNATURAS_TERCERO } from '../json/_meta/tercero/index';
import { ASIGNATURAS_CUARTO } from '../json/_meta/cuarto/index';

import ANTRO_FEB_20 from '../json/antropologia/antropologia_feb_20.json';
import ATE_JUN_20 from '../json/atencion/atencion_jun_20.json';

import EM_JUN_20 from '../json/emocion/emocion_jun_20.json';
import EM_SEP_19 from '../json/emocion/emocion_sep_19.json';
import EM_JUN_19 from '../json/emocion/Emocion_Jun_19_1semana.json';
import EM_SEP_18 from '../json/emocion/Emocion_Sep_18_1semana.json';
import EM_JUN_18 from '../json/emocion/Emocion_Jun_18_1semana.json';
import EM_SEP_17 from '../json/emocion/Emocion_Sep_17_1semana.json';
import EM_JUN_17 from '../json/emocion/Emocion_Jun_17_1semana.json';

import FINV_SEP_19_1 from '../json/fundamentos_investigacion/fundamentos_de_investigacion_sep_19_1semana.json';

import FIS_JAN_18_1 from '../json/fisiologica/fisiologica_jan_18_1semana.json';
import FIS_FEB_18_1 from '../json/fisiologica/fisiologica_feb_18_2semana.json';
import FIS_SEP_18_1 from '../json/fisiologica/fisiologica_sep_18_1semana.json';
import FIS_JAN_19_1 from '../json/fisiologica/fisiologica_jan_19_1semana.json';
import FIS_FEB_19_2 from '../json/fisiologica/fisiologica_feb_19_2semana.json';
import FIS_SEP_19_1 from '../json/fisiologica/fisiologica_sep_19_1semana.json';
import FIS_JAN_20_1 from '../json/fisiologica/fisiologica_jan_20_1semana.json';
import FIS_FEB_20_2 from '../json/fisiologica/fisiologica_feb_20_2semana.json';

import MOTIV_JAN_18_1 from '../json/motivacion/motivacion_jan_18_1semana.json';
import MOTIV_FEB_18_1 from '../json/motivacion/motivacion_feb_18_2semana.json';
import MOTIV_SEP_18_1 from '../json/motivacion/motivacion_sep_18_1semana.json';
import MOTIV_JAN_19_1 from '../json/motivacion/motivacion_jan_19_1semana.json';
import MOTIV_FEB_19_2 from '../json/motivacion/motivacion_feb_19_2semana.json';
import MOTIV_SEP_19_1 from '../json/motivacion/motivacion_sep_19_1semana.json';
import MOTIV_FEB_20_2 from '../json/motivacion/motivacion_feb_20_2semana.json';
import MOTIV_JAN_20_1 from '../json/motivacion/motivacion_jan_20_1semana.json';

import PERC_SEP_17 from '../json/percepcion/percepcion_sep_17.json';
import PGROUP_FEB_19 from '../json/p-grupos/p-grupos_feb_19.json';
import SOC_JUN_19 from '../json/social/social_jun_19.json';
import SOC_JUN_20 from '../json/social/social_jun_20.json';

export const ASIGNATURAS = Object.freeze(ASIGNATURAS_PRIMERO.concat(
  ASIGNATURAS_SEGUNDO, ASIGNATURAS_TERCERO, ASIGNATURAS_CUARTO,
));
export const EXAMS = Object.freeze({
  antropologia: {
    20: {
      february: ANTRO_FEB_20,
    },
  },
  atencion: {
    20: {
      june: ATE_JUN_20,
    },
  },
  emocion: {
    20: {
      june: EM_JUN_20,
    },
    19: {
      september: EM_SEP_19,
      june: EM_JUN_19,
    },
    18: {
      september: EM_SEP_18,
      june: EM_JUN_18,
    },
    17: {
      september: EM_SEP_17,
      june: EM_JUN_17,
    },
  },
  fundamentos_de_investigacion: {
    19: {
      september: FINV_SEP_19_1,
    },
  },
  fisiologica: {
    18: {
      january: FIS_JAN_18_1,
      february: FIS_FEB_18_1,
      september: FIS_SEP_18_1,
    },
    19: {
      january: FIS_JAN_19_1,
      february: FIS_FEB_19_2,
      september: FIS_SEP_19_1,
    },
    20: {
      january: FIS_JAN_20_1,
      february: FIS_FEB_20_2,
    },
  },
  motivacion: {
    20: {
      january: MOTIV_JAN_20_1,
      february: MOTIV_FEB_20_2,
    },
    19: {
      january: MOTIV_JAN_19_1,
      february: MOTIV_FEB_19_2,
      september: MOTIV_SEP_19_1,
    },
    18: {
      january: MOTIV_JAN_18_1,
      february: MOTIV_FEB_18_1,
      september: MOTIV_SEP_18_1,
    },
  },
  psicologia_de_grupos: {
    19: {
      february: PGROUP_FEB_19,
    },
  },
  psicologia_social: {
    20: {
      june: SOC_JUN_20,
    },
    19: {
      june: SOC_JUN_19,
    },
  },
  percepcion: {
    17: {
      september: PERC_SEP_17,
    },
  },
});
export const ASIGNATURAS_META = Object.freeze({
  social: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '9',
    id: 'psicologia_social',
    name: 'Psicología Social',
    logo: '#logo7',
    cuatrimestre: 'Anual',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
    imagesrc: 'https://www.librosuned.com/recursos/img/imgPortadas/detalles/6201102UD06.jpg',
    guiasrc: 'http://portal.uned.es/portal/page?_pageid=93,70654783&_dad=portal&_schema=PORTAL&idAsignatura=62011020&idTitulacion=6201',
    pec: 'Si',
    pec_info: '1 punto máximo sobre la nota final',
    ponderacion: 'Examen: 9, Nota PEC: 1',
    // apuntes: {
    //   cgil: {
    //     id: 1,
    //     filename: 'psicologia_social_cristina_gil.pdf',
    //     name: 'Apuntes Cristina Gil (temas 1-14)',
    //   },
    // },
  },
  psicobiologia: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '9',
    id: 'psicobiologia',
    name: 'Psicobiología',
    logo: '#logo8',
    cuatrimestre: 'Anual',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
    guiasrc: 'http://portal.uned.es/portal/page?_pageid=93,70654783&_dad=portal&_schema=PORTAL&idAsignatura=62011014&idTitulacion=6201',
    pec: 'Si',
    pec_info: '1 punto máximo sobre la nota final',
    ponderacion: 'Con PEC: Examen: 9, Nota PEC: 1. Sin PEC -> Examen: 10',
    apuntes: {
      mendieta: {
        id: 1,
        filename: 'psicobiologia_alejandra_mendieta.pdf',
        name: 'Apuntes Alejandra Mendieta',
      },
    },
  },
  fundamentos_investigacion: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '6',
    id: 'fundamentos_investigacion',
    name: 'F. de Investigación',
    logo: '#logo5',
    cuatrimestre: '1º cuatrimestre',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
  },
  analisis_datos: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '6',
    id: 'analisis_datos',
    name: 'I. al Análisis de Datos',
    logo: '#logo1',
    cuatrimestre: '1º cuatrimestre',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
  },
  motivacion: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '6',
    id: 'motivacion',
    name: 'P. de la Motivación',
    logo: '#logo4',
    cuatrimestre: '1º cuatrimestre',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
    imagesrc: 'https://www.sanzytorres.es/static/img/portadas/9788417765101_KSlJcps.jpg',
  },
  historia: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '6',
    id: 'historia',
    name: 'Historia de la P.',
    logo: '#logo6',
    cuatrimestre: '2º cuatrimestre',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
  },
  atencion: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '6',
    id: 'atencion',
    name: 'P. de la Atención',
    logo: '#logo3',
    cuatrimestre: '2º cuatrimestre',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
  },
  emocion: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '6',
    id: 'emocion',
    name: 'P. de la Emoción',
    logo: '#logo9',
    cuatrimestre: '2º cuatrimestre',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
  },
  aprendizaje: {
    curso: 'primer_curso',
    course_dg: '1',
    credits: '6',
    id: 'aprendizaje',
    name: 'P. del Aprendizaje',
    logo: '#logo2',
    cuatrimestre: '2º cuatrimestre',
    color: '#8FCFD2',
    bg_color: '#8FCFD2',
  },
  // Segundo curso
  desarrollo: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '9',
    id: 'psicologia_desarrollo',
    name: 'P. del Desarrollo 1',
    logo: '#logo11',
    cuatrimestre: 'Anual',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  psicopatologia: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '9',
    id: 'psicopatologia',
    name: 'Psicopatología',
    logo: '#logo19',
    cuatrimestre: 'Anual',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  fisiologica: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '6',
    id: 'psicologia_fisiologica',
    name: 'P. Fisiológica',
    logo: '#logo17',
    cuatrimestre: '1º cuatrimestre',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  disenos_investigacion: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '6',
    id: 'disenos_investigacion',
    name: 'D. de Investigación',
    logo: '#logo13',
    cuatrimestre: '1º cuatrimestre',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  memoria: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '6',
    id: 'memoria',
    name: 'P. de la Memoria',
    logo: '#logo14',
    cuatrimestre: '1º cuatrimestre',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  diferencias_individuales: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '6',
    id: 'diferencias_individuales',
    name: 'Diferencias Individuales',
    logo: '#logo12',
    cuatrimestre: '2º cuatrimestre',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  psicometria: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '6',
    id: 'psicometria',
    name: 'Psicometría',
    logo: '#logo18',
    cuatrimestre: '2º cuatrimestre',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  percepcion: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '6',
    id: 'percepcion',
    name: 'P. de la Percepción',
    logo: '#logo16',
    cuatrimestre: '2º cuatrimestre',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  pensamiento: {
    curso: 'segundo_curso',
    course_dg: '2',
    credits: '6',
    id: 'pensamiento',
    name: 'P. del Pensamiento',
    logo: '#logo15',
    cuatrimestre: '2º cuatrimestre',
    color: '#DF5E89',
    bg_color: '#DF5E89',
  },
  // Tercer curso
  psicofarmacologia: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'psicofarmacologia',
    name: 'Psicofarmacología',
    logo: '#logo21',
    cuatrimestre: '1º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  desarrollo_2: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'psicologia_desarrollo_2',
    name: 'P. del Desarrollo 2',
    logo: '#logo22',
    cuatrimestre: '1º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  psicologia_grupos: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'psicologia_grupos',
    name: 'P. de los Grupos',
    logo: '#logo23',
    cuatrimestre: '1º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  psicologia_lenguaje: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'psicologia_lenguaje',
    name: 'P. del Lenguaje',
    logo: '#logo24',
    cuatrimestre: '1º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  evaluacion_psicologica: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'evaluacion_psicologica',
    name: 'Ev. Psicológica',
    logo: '#logo25',
    cuatrimestre: '1º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  neuropsicologia: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'neuropsicologia',
    name: 'Neuropsicología del Desarrollo',
    logo: '#logo26',
    cuatrimestre: '2º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  psicologia_educacion: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'psicologia_educacion',
    name: 'P. de la Educación',
    logo: '#logo27',
    cuatrimestre: '2º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  psicologia_organizaciones: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'psicologia_organizaciones',
    name: 'P. de las Organizaciones',
    logo: '#logo28',
    cuatrimestre: '2º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  psicologia_personalidad: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'psicologia_personalidad',
    name: 'P. de la Personalidad',
    logo: '#logo29',
    cuatrimestre: '2º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
  tecnicas_intervencion: {
    curso: 'tercer_curso',
    course_dg: '3',
    credits: '6',
    id: 'tecnicas_intervencion',
    name: 'T. de Intervención Cogn. Conductuales',
    logo: '#logo20',
    cuatrimestre: '2º cuatrimestre',
    color: '#F7AB6C',
    bg_color: '#F7AB6C',
  },
});
