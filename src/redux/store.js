import { createStore } from "redux";

import reducer from "./screens/screensReducer";

const store = createStore(reducer)

export default store