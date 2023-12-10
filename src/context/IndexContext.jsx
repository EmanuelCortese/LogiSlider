import { createContext, useState } from 'react'

const Context = createContext({})

export const IndexProvider = ({ children }) => {
	const [index, setIndex] = useState(0)

	return <Context.Provider value={{ index, setIndex }}>{children}</Context.Provider>
}

export default Context
