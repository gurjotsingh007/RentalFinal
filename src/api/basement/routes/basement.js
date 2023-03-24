'use strict';

/**
 * basement router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::basement.basement');
