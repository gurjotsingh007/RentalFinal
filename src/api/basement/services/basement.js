'use strict';

/**
 * basement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basement.basement');
