import {API} from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

const ElementsAPIDocs = () => {
	return <API
		apiDescriptionUrl="/swagger.yaml"
		router="hash"
	/>
}

export default ElementsAPIDocs
