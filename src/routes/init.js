import { init } from '../controllers/v1/auth';
import { setAdmin } from '../controllers/v1/auth';
import { wrapAsync } from '../utils/controllers';

module.exports = api => {
	api.route('/v1/auth/init').post(wrapAsync(init));
	api.route('/v1/auth/setAdmin').post(wrapAsync(setAdmin));
};
