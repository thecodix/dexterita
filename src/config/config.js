import ASIGNATURAS_PRIMERO from '../json/_meta/asignaturas-primero.json';
import ASIGNATURAS_SEGUNDO from '../json/_meta/asignaturas-segundo.json';
import ASIGNATURAS_TERCERO from '../json/_meta/asignaturas-tercero.json';
import ASIGNATURAS_CUARTO from '../json/_meta/asignaturas-cuarto.json';
import ANTRO_FEB_20 from '../json/antropologia/antropologia_feb_20.json';
import ATE_JUN_20 from '../json/atencion/atencion_jun_20.json';
import EM_JUN_20 from '../json/emocion/emocion_jun_20.json';
import EM_SEP_19 from '../json/emocion/emocion_sep_19.json';
import FIS_FEB_20 from '../json/fisiologica/fisiologica_feb_20.json';
import PERC_SEP_17 from '../json/percepcion/percepcion_sep_17.json';
import PGROUP_FEB_19 from '../json/p-grupos/p-grupos_feb_19.json';
import SOC_JUN_19 from '../json/social/social_jun_19.json';
import SOC_JUN_20 from '../json/social/social_jun_20.json';

// const EXAMENES_ATENCION = [ATE_JUN_20];
// const EXAMENES_EMOCION = [EM_JUN_20, EM_SEP_19];
// const EXAMENES_SOCIAL = [SOC_JUN_20, SOC_SIM_20];
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
    },
  },
  fisiologica: {
    20: {
      february: FIS_FEB_20,
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
