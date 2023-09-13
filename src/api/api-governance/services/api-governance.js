'use strict';

/**
 * api-governance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::api-governance.api-governance');
