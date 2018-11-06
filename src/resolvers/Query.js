async function jobs(parent, args, ctx, info) {

  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
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
            { id: args.filter },
            { firstName: args.filter },
            { lastName: args.filter },
            { address: args.filter },
            { city: args.filter },
            { state: args.filter },
            { zip: args.filter },
            { phone: args.filter },
            { online: args.filter },
            { type: args.filter },
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
            { id: args.filter },
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
              { id: args.filter }
            ],
          }
        : {}

    return await ctx.db.query.applications({ where }, info)
}

async function ad_sources(parent, args, ctx, info) {

  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
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
            { id: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.adPlaceds({ where }, info)
}

async function outreach_targets(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
            { firstName: args.filter },
            { lastName: args.filter },
            { organization: args.filter },
            { title: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.outreachTargets({ where }, info)
}

async function backgrounds(parent, args, ctx, info) {

  const where = args.filter
      ? {
          OR: [
            { id: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.backgrounds({ where }, info)
}

async function outreach_calls(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
            { notes: args.filter },
            { referral: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.outreachCalls({ where }, info)
}

async function screen_calls(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
            { notes: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.screenCalls({ where }, info)
}

async function references(parent, args, ctx, info) {

  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
            { firstName: args.filter },
            { lastName: args.filter },
            { title: args.filter },
            { organization: args.filter },
            { relation: args.filter },
            { phone: args.filter },
            { email: args.filter },
            { notes: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.references({ where }, info)
}

async function articles(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
            { title: args.filter },
            { link: args.filter },
            { summary: args.filter }
          ],
        }
      : {}

    return await ctx.db.query.articles({ where }, info)
}

async function expenses(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
            { type: args.filter },
            { amount: args.filter },
          ],
        }
      : {}

    return await ctx.db.query.expenses({ where }, info)
}

async function payments(parent, args, ctx, info) {
  const where = args.filter
      ? {
          OR: [
            { id: args.filter },
            { phase: args.filter },
            { amount: args.filter },
          ],
        }
      : {}

    return await ctx.db.query.payments({ where }, info)
}


module.exports = {
  jobs,
  users,
  clients,
  applications,
  outreach_targets,
  ads_placed,
  ad_sources,
  backgrounds,
  outreach_calls,
  screen_calls,
  references,
  articles,
  expenses,
  payments
}
