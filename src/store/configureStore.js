import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import reducers from "../reducers/";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(
    persistedReducer,
    { user: null, loggedIn: false },
    applyMiddleware(thunk)
  );
  let persistor = persistStore(store);

  return { store, persistor };
};
