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

import FIS_FEB_20 from '../json/fisiologica/fisiologica_feb_20.json';

import MOTIV_FEB_19_1 from '../json/motivacion/motivacion_feb_19_1semana.json';
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
  fisiologica: {
    20: {
      february: FIS_FEB_20,
    },
  },
  motivacion: {
    20: {
      january: MOTIV_JAN_20_1,
      february: MOTIV_FEB_20_2,
    },
    19: {
      september: MOTIV_SEP_19_1,
      february: MOTIV_FEB_19_1,
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
