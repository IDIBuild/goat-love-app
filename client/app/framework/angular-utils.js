var injector;

var angularUtils = {
	getService: function (serviceName, defaultException) {
		try {
			return injector.get(serviceName);
		} catch (e) {
			if (defaultException) {
				return defaultException;
			}
			throw e;
		}
	},
	setInjector: function (appInjector) {
		injector = appInjector;
	}
};

export default angularUtils;
