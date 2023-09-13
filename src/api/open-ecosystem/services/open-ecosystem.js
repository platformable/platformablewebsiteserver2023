'use strict';

/**
 * open-ecosystem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-ecosystem.open-ecosystem');
