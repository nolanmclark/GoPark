"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var profile_component_1 = require('./profile/profile.component');
var appRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map