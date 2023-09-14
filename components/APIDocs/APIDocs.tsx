import {RedocRawOptions} from "redoc/typings/services/RedocNormalizedOptions";
import {RedocStandalone} from "redoc";
import {useTheme} from "next-themes";
import styled from 'styled-components';
import {ThemeInterface} from "redoc/typings/theme";

const darkModeColors = {
	backgroundColor: "transparent",
	textColor: "pink",
};

const darkModeTheme: ThemeInterface = {
	sidebar: darkModeColors,
	codeBlock: darkModeColors,
	rightPanel: darkModeColors,
	colors: {
		text: {
			primary: "white"
		}
	}
}

const StyledMook = styled.div`color: pink`

const APIDocs = () => {
	const theme = useTheme();

	const options: RedocRawOptions = {
		hideLoading: true, theme: theme.resolvedTheme === "dark" ? darkModeTheme : undefined
	}

	return <>
		<StyledMook>mook mook</StyledMook>
		<RedocStandalone options={options} specUrl="/swagger.yaml"/>
	</>
}

export default APIDocs;
