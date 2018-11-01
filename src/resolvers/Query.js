async function jobs(parent, args, ctx, info) {

  const where = args.filter
      ? {
          OR: [
            { id: args.id },
            { jobTitle: args.filter },
            { location: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.jobs({  where }, info)
}

async function users(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.id },
            { firstName: args.filter },
            { lastName: args.filter },
            { address: args.address },
            { city: args.city },
            { state: args.state },
            { zip: args.zip },
            { phone: args.phone },
            { online: args.online },
            { type: args.state },
            { email: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.users({ where }, info)
}


async function clients(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.id },
            { clientName: args.filter },
          ],
        }
      : {}

    return await ctx.db.query.clients({ where }, info)
}


async function applications(parent, args, ctx, info) {

    const where = args.filter
        ? {
            OR: [
              { id: args.id }
            ],
          }
        : {}

    return await ctx.db.query.applications({ where }, info)
}

async function ad_sources(parent, args, ctx, info) {

  const where = args.filter
      ? {
          OR: [
            { id: args.id },
            { pubName: args.filter },
          ],
        }
      : {}

    return await ctx.db.query.adSources({ where }, info)
}

async function ads_placed(parent, args, ctx, info) {

  const where = args.filter
      ? {
          OR: [
            { id: args.id }
          ],
        }
      : {}

    return await ctx.db.query.adPlaceds({ where }, info)
}

async function outreach_targets(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.id },
            { firstName: args.filter },
            { lastName: args.filter },
            { organization: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.outreachTargets({ where }, info)
}

module.exports = {
  jobs,
  users,
  clients,
  applications,
  outreach_targets,
  ads_placed,
  ad_sources
}
