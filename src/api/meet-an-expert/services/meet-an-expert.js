'use strict';

/**
 * meet-an-expert service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meet-an-expert.meet-an-expert');
