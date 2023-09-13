'use strict';

/**
 * data-governance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-governance.data-governance');
