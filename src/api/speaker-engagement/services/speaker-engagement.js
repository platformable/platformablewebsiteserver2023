'use strict';

/**
 * speaker-engagement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::speaker-engagement.speaker-engagement');
