import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';

import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { ifStatementsMetaData } from './ifStatements/router-data';
import { ifStatementsMoreOrLessMetaData } from './ifStatementsMoreOrLess/router-data';
import { JakaLiczbaMetaData } from './JakaLiczba/router-data';
import { reactUseRef } from './UseRef/router-data';

import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { FormularzeMetaData } from './Formularze/router-data';
import { FireBaseLoginFormMetaData } from './FirebaseLoginForm/router-data';

import { FormPrivateExerciseMetaData } from './FormularzePrivateExercise/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  ifStatementsMetaData,
  ifStatementsMoreOrLessMetaData,
  JakaLiczbaMetaData,
  ToDoWithServerMetaData,
  reactUseRef,
  FormularzeMetaData,
  FormPrivateExerciseMetaData,
  FireBaseLoginFormMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
