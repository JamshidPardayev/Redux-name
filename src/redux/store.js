import { createStore } from "redux"
import { createName } from "./reducer"

export const store = createStore(createName)