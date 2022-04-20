'use strict';

/**
 *  project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) =>  ({

  async find(ctx) {
    ctx.query = { ...ctx.query}
    const { data, meta } = await super.find(ctx);
    // data.forEach((project)=>{
    //   let amount_raised =  project?.attributes?.tiers.data.reduce(function (acc, obj) { return acc + obj.attributes.amount_raised; }, 0);
    //    project.attributes.tiers = amount_raised
    // });
    return {data,meta};
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service('api::project.project').findOne(id, query);
    const data = await this.sanitizeOutput(entity, ctx);
    let amount_raised =  data?.tiers.reduce(function (acc, obj) { return acc + obj.amount_raised; }, 0);
    data.tiers = amount_raised
    return data;
  }


}));


