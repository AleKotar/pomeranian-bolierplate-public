import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsStringTraining } from './JsStringTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrays } from './Arrays/router-data';
import { blockRouterMetaData as blockRouterMetaDataArraysStringsEtc } from './StringArraysPracaWlasna/router-data';
import { blockRouterMetaData as blockRouterMetaDataJSONXML } from './JsonXML/router-data';
import { blockRouterMetaData as blockRouterMetaPromises } from './Promises/router-data';
import { blockRouterMetaData as blockRouterMetaAsync } from './asyncAwaitExercise/router-data';
import { blockRouterMetaData as blockRouterMetaMethodsPromiseTraining } from './PromiseMethodsTraining/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataJsStringTraining,
  blockRouterMetaDataArrays,
  blockRouterMetaDataArraysStringsEtc,
  blockRouterMetaDataJSONXML,
  blockRouterMetaPromises,
  blockRouterMetaAsync,
  blockRouterMetaMethodsPromiseTraining,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
