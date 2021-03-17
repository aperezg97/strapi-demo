'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // GET /dummy-content
  async dummyContent(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.restaurant.findOne({ id });
    console.log({entity});
    return sanitizeEntity(entity, { model: strapi.models.restaurant });
  },

  dummyContent2: async (ctx, next) => {
    console.log('test')
  },
};
