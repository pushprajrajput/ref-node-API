"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const user_1 = __importDefault(require("./repositories/user"));
const user_2 = __importDefault(require("./services/user"));
const routes_1 = __importDefault(require("./handlers/user/routes"));
const swaggerOptions_1 = require("./swaggerOptions");
const server = (0, express_1.default)();
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.swaggerOptions);
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
function main() {
    const userRepository = new user_1.default();
    const userService = new user_2.default({ userRepository });
    const userRoutes = (0, routes_1.default)(userService);
    server.use("/users", userRoutes);
    server.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    server.listen(8000, () => {
        console.log("Listening at 8000");
    });
}
main();
