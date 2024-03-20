"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTypes = void 0;
const authProvider_schema_1 = require("../schema/authProvider.schema");
exports.AuthTypes = {
    ...authProvider_schema_1.SocialProviderTypes,
    JWT: 'jwt',
};
//# sourceMappingURL=auth.types.js.map