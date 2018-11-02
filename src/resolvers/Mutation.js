const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
var moment = require('moment');

function post_job(parent, { jobTitle, location, description, address, city, state, zip, clientId }, ctx, info) {
  const userId = getUserId(ctx)
  const addedDate = new Date()
  const brochure_sent = new Date()
  const app_deadline = new Date()
  const screening_deadline = new Date()
  const presentation = new Date()
  const background_deadline = new Date()
  const final_interview = new Date()

  brochure_sent.setDate(addedDate.getDate() + 14);
  app_deadline.setDate(addedDate.getDate() + 44);
  screening_deadline.setDate(addedDate.getDate() + 58);
  presentation.setDate(addedDate.getDate() + 65);
  background_deadline.setDate(addedDate.getDate() + 79);
  final_interview.setDate(addedDate.getDate() + 86);

  return ctx.db.mutation.createJob(
    {
      data: {
        jobTitle,
        addedDate,
        location,
        description,
        address,
        city,
        state,
        zip,
        brochure_sent,
        app_deadline,
        screening_deadline,
        presentation,
        background_deadline,
        final_interview,
        client: {
          connect: { id: clientId },
        },
        addedBy: {
          connect: { id: userId },
        },
        consultants:
          {
            connect: [{ id: userId }],
          }
      },
    },
    info
  )
}

function create_client(parent, { clientName, address, city, state, zip, phone, email }, ctx, info) {
  const userId = getUserId(ctx)
  const addedDate = new Date()
  return ctx.db.mutation.createClient(
    {
      data: {
        clientName,
        addedDate,
        address,
        city,
        state,
        zip,
        phone,
        email,
        addedBy: {
          connect: { id: userId },
        }
      },
    },
    info
  )
}

function add_background(parent, { link, type, userId }, ctx, info) {

  const addedDate = new Date()
  return ctx.db.mutation.createBackground(
    {
      data: {
        link,
        type,
        backgroundDate: addedDate,
        applicant: {
          connect: { id: userId },
        }
      },
    },
    info
  )
}

function place_ad(parent, { jobTitle, copy, adLink, ran, cost, jobId, publicationId }, ctx, info) {
  const userId = getUserId(ctx)
  const addedDate = new Date()
  return ctx.db.mutation.createAdPlaced(
    {
      data: {
        addedDate,
        copy,
        adLink,
        ran,
        cost,
        placedBy: {
          connect: { id: userId },
        },
        job: {
          connect: { id: jobId },
        },
        adSource: {
          connect: { id: publicationId },
        }
      },
    },
    info
  )
}

function add_ad_source(parent, { pubName, firstName, lastName, address, city, state, zip, phone, email, instructions }, ctx, info) {
  const userId = getUserId(ctx)
  const addedDate = new Date()
  return ctx.db.mutation.createAdSource(
    {
      data: {
        addedDate,
        pubName,
        firstName,
        lastName,
        address,
        city,
        state,
        zip,
        phone,
        email,
        instructions,
        addedBy: {
          connect: { id: userId }
        }
      },
    },
    info
  )
}

function add_outreach_target(parent, { firstName, lastName, organization, title, address, city, state, zip, phone, email }, ctx, info) {
  const userId = getUserId(ctx)
  const addedDate = new Date()
  return ctx.db.mutation.createOutreachTarget(
    {
      data: {
        added: addedDate,
        firstName,
        lastName,
        organization,
        title,
        address,
        city,
        state,
        zip,
        phone,
        email,
        addedBy: {
          connect: { id: userId }
        }
      },
    },
    info
  )
}

function apply(parent, { jobId }, ctx, info) {
  const userId = getUserId(ctx)
  const appDate = new Date()
  return ctx.db.mutation.createApplication(
    {
      data: {
        appDate,
        application: {
          connect: { id: userId }
        },
        job: {
          connect: { id: jobId }
        }
      },
    },
    info
  )
}

function add_outreach_call(parent, { jobId, targetId, lm, callDate, notes, referral }, ctx, info) {
  const userId = getUserId(ctx)
  const appDate = new Date()
  return ctx.db.mutation.createOutreachCall(
    {
      data: {
        lm
        callDate,
        notes,
        referral,
        target: {
          connect: { id: targetId }
        },
        job: {
          connect: { id: jobId }
        },
        caller: {
          connect: { id: userId }
        }
      },
    },
    info
  )
}

function add_screen_call(parent, { jobId, applicantId, applicationId, lm, callDate, notes, referral }, ctx, info) {
  const userId = getUserId(ctx)
  const appDate = new Date()
  return ctx.db.mutation.createScreenCall(
    {
      data: {
        lm,
        callDate,
        notes,
        referral,
        application: {
          connect: { id: applicationId }
        },
        applicant: {
          connect: { id: applicantId }
        },
        job: {
          connect: { id: jobId }
        },
        caller: {
          connect: { id: userId }
        }
      },
    },
    info
  )
}

function add_reference(parent, { jobId, applicantId, applicationId, lm, callDate, notes, firstName, lastName, organization, title, relation, phone, email }, ctx, info) {
  const userId = getUserId(ctx)
  const appDate = new Date()
  return ctx.db.mutation.createReference(
    {
      data: {
        lm,
        callDate,
        notes,
        firstName,
        lastName,
        organization,
        title,
        relation,
        phone,
        email,
        application: {
          connect: { id: applicationId }
        },
        applicant: {
          connect: { id: applicantId }
        },
        job: {
          connect: { id: jobId }
        },
        caller: {
          connect: { id: userId }
        }
      },
    },
    info
  )
}

function add_article(parent, { jobId, applicantId, title, summary, link }, ctx, info) {
  const userId = getUserId(ctx)
  const articleDate = new Date()
  return ctx.db.mutation.createArticle(
    {
      data: {
        title,
        summary,
        link,
        articleDate,
        applicant: {
          connect: { id: applicantId }
        },
        addedBy: {
          connect: { id: userId }
        }
      },
    },
    info
  )
}

function add_expense(parent, { type, link, amount, expensePaidDate, expenseDate, consultant, expensePaidById, jobId }, ctx, info) {
  const userId = getUserId(ctx)
  const articleDate = new Date()
  return ctx.db.mutation.createExpense(
    {
      data: {
        amount,
        link,
        type,
        expenseDate,
        expensePaidDate,
        consultant: {
          connect: { id: userId }
        },
        expensePaidBy: {
          connect: { id: expensePaidById }
        },
        job: {
          connect: { id: jobId }
        }
      },
    },
    info
  )
}

function add_payment(parent, { phase, amount, paidDate, paidById, jobId }, ctx, info) {
  const userId = getUserId(ctx)
  const billDate = new Date()
  return ctx.db.mutation.createPayment(
    {
      data: {
        phase,
        amount,
        paidDate,
        billDate,
        addedBy: {
          connect: { id: userId  }
        },
        paidBy: {
          connect: { id: paidById }
        },
        job: {
          connect: { id: jobId }
        }
      },
    },
    info
  )
}


async function signup(parent, args, ctx, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await ctx.db.mutation.createUser({
    data: { ...args, password },
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, ctx, info) {
  const user = await ctx.db.query.user({ where: { email: args.email } })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

module.exports = {
  post_job,
  create_client,
  apply,
  add_background,
  add_outreach_target,
  add_ad_source,
  place_ad,
  add_outreach_call,
  add_screen_call,
  add_reference,
  add_article,
  add_expense,
  add_payment,
  signup,
  login,
}
