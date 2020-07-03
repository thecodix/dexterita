import FISIOLOGICA from './psicologia-fisiologica.json';
import PERCEPCION from './percepcion.json';

// eslint-disable-next-line import/prefer-default-export
export const ASIGNATURAS_SEGUNDO = Object.freeze(FISIOLOGICA.concat(
  PERCEPCION,
));
