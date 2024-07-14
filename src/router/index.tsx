import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import DetailCard from "@/components/cards/DetailCard/DetailCard";
import ErrorPage from "@/pages/error/ErrorPage";
import HomePage from "@/pages/home/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				children: [
					{
						path: "details",
						element: <DetailCard />,
					},
				],
			},
		],
	},
]);

export default router;
