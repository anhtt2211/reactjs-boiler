import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import articleReducer from 'features/article/article.slice';
import tagReducer from 'features/tag/tag.slice';
import authReducer from 'features/auth/auth.slice';
import profileReducer from 'features/profile/profile.slice';
import homeReducer from 'pages/home-page/home.slice';
import articlePageReducer from 'pages/article-page/article-page.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    article: articleReducer,
    tag: tagReducer,
    auth: authReducer,
    home: homeReducer,
    articlePage: articlePageReducer,
    profile: profileReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
