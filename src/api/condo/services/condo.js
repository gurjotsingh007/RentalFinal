'use strict';

/**
 * condo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::condo.condo');
