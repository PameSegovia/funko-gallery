import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

export const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);


	useEffect(() => {
		axios('data.json').then((res) => setData(res.data))
	}, []);
	





	return <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
};

