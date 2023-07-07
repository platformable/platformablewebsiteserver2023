'use strict';

/**
 * understand service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::understand.understand');
