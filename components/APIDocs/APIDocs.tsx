import {RedocRawOptions} from "redoc/typings/services/RedocNormalizedOptions";
import {RedocStandalone} from "redoc";
import {useTheme} from "next-themes";

const darkModeColors = {
	backgroundColor: "black",
	textColor: "white",
};

const darkModeTheme = {
	sidebar: darkModeColors,
	codeBlock: darkModeColors,
	colors: {
		text: {
			primary: "white"
		}
	}
}


const APIDocs = () => {
	const theme = useTheme();

	const options: RedocRawOptions = {
		hideLoading: true, theme: theme.resolvedTheme === "dark" ? darkModeTheme : undefined
	}

	return <RedocStandalone options={options} specUrl="/swagger.yaml"/>
}

export default APIDocs;
