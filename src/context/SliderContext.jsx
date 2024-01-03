import { createContext, useReducer } from 'react'

const Context = createContext({})

const reducer = (state, action) => {
	if (action.type === 'update_index') {
		return {
			...state,
			index: action.payload,
		}
	}
	if (action.type === 'update_modal') {
		return {
			...state,
			modal: action.payload,
		}
	}
}

export const SliderProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		index: 0,
		modal: null,
	})

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Context
