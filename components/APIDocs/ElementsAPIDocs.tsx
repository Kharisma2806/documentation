// @ts-ignore
import {API} from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

const ElementsAPIDocs = () => {
	return <API
		apiDescriptionUrl="/swagger.yaml"
		//@ts-ignore
		router="static"
	/>
}

export default ElementsAPIDocs
