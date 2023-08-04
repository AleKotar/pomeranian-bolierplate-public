import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsStringTraining } from './JsStringTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrays } from './Arrays/router-data';
import { blockRouterMetaData as blockRouterMetaDataArraysStringsEtc } from './StringArraysPracaWlasna/router-data';
import { blockRouterMetaData as blockRouterMetaDataTabliceTrening } from './TabliceTrening/router-data';
import { blockRouterMetaData as blockRouterMetaDataObjects } from './Objects/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJSFunctionExtended } from './Exercise-js-functions-extended/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseInterwalDate } from './IntervalDate/router-data';
import { blockRouterMetaData as blockRouterMetaDataExercisDates } from './Date/router-data';
import { blockRouterMetaData as blockRouterMetaDataAnimation } from './Animation/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitAMole } from './HitAMole/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataJsStringTraining,
  blockRouterMetaDataArrays,
  blockRouterMetaDataArraysStringsEtc,
  blockRouterMetaDataTabliceTrening,
  blockRouterMetaDataObjects,
  blockRouterMetaDataJsFunctionBasics,
  blockRouterMetaDataExerciseJSFunctionExtended,
  blockRouterMetaDataExerciseInterwalDate,
  blockRouterMetaDataExercisDates,
  blockRouterMetaDataAnimation,
  blockRouterMetaDataHitAMole,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
