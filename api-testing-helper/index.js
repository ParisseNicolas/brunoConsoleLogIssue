class ApiTestingHelper {
    constructor() {
    }

    helloWorld() {
        console.log("Hello, World!");
    }
}

module.exports = (params) => new ApiTestingHelper(params);

module.exports.ApiTestingHelper = ApiTestingHelper;