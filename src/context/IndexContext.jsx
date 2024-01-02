import { createContext, useState } from 'react'

const Context = createContext({})

export const IndexProvider = ({ children }) => {
	const [index, setIndex] = useState(0)
	const [modal, setModal] = useState(null)

	return (
		<Context.Provider value={{ index, setIndex, modal, setModal }}>{children}</Context.Provider>
	)
}

export default Context
