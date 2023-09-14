import {RedocStandalone} from 'redoc';

export default () =>
	<RedocStandalone options={{
		hideLoading: true,
	}} specUrl="/swagger.yaml"/>
