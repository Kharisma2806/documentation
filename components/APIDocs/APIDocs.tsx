import {RedocRawOptions} from "redoc/typings/services/RedocNormalizedOptions";
import {RedocStandalone} from "redoc";

const darkModeColors = {
	backgroundColor: "black",
	textColor: "white",
};

const APIDocs = () => {
	const options: RedocRawOptions = {
		hideLoading: true, theme: {
			sidebar: darkModeColors,
			codeBlock: darkModeColors,
		}
	}

	return <RedocStandalone options={options} specUrl="/swagger.yaml"/>
}

export default APIDocs;
