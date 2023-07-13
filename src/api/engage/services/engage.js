'use strict';

/**
 * engage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::engage.engage');
