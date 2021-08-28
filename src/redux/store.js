import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["Auth"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const storeConfig = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default storeConfig;
