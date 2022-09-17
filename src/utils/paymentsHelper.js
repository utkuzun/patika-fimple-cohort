import _ from 'lodash'

export const createBilesikPayments = (options) => {
  const { balance, numberOfPeriods, interestRate, bsmv, kkdf, period } = options

  const n = numberOfPeriods

  let i = Number(interestRate * (1 + bsmv + kkdf))
  let interest = Number(interestRate)

  if (period === 'haftalık') {
    i = i * (7 / 30)
    interest = interestRate * (7 / 30)
  }
  if (period === 'yıllık') {
    i = i * (365 / 30)
    interest = interestRate * (365 / 30)
  }

  i = Number(i)
  interest = Number(interest)

  let amountBilesik =
    (balance * (i * Number(1 + i) ** n)) / (Number(1 + i) ** n - 1)

  if (interest === 0) {
    amountBilesik = balance / n
  }

  let bilesikInit = _.times(numberOfPeriods, _.constant({}))

  let balanceBilesik = balance

  const bilesikFinal = bilesikInit.map((payment, index) => {
    const paymentNew = {}

    paymentNew.paymentAmount = amountBilesik
    paymentNew.id = index + 1
    paymentNew.gain = balanceBilesik * interest
    paymentNew.bsmv = paymentNew.gain * bsmv
    paymentNew.kkdf = paymentNew.gain * kkdf
    paymentNew.mainMoney =
      amountBilesik - paymentNew.gain - paymentNew.bsmv - paymentNew.kkdf
    balanceBilesik = balanceBilesik - paymentNew.mainMoney
    paymentNew.remains = balanceBilesik

    return paymentNew
  })

  const totalBilesik = amountBilesik * n

  return { totalBilesik, bilesikFinal }
}

export const createBasitPayments = (options) => {
  const { balance, numberOfPeriods, interestRate, bsmv, kkdf, period } = options

  const n = numberOfPeriods

  let i = Number(interestRate * (1 + bsmv + kkdf))
  let interest = Number(interestRate)

  if (period === 'haftalık') {
    i = i * (7 / 30)
    interest = interestRate * (7 / 30)
  }
  if (period === 'yıllık') {
    i = i * (365 / 30)
    interest = interestRate * (365 / 30)
  }

  const amountBasit = (Number(balance) + balance * n * i) / n

  let basitInit = _.times(numberOfPeriods, _.constant({}))
  let balanceBasit = balance
  const basitFinal = basitInit.map((payment, index) => {
    const paymentNew = {}

    paymentNew.paymentAmount = amountBasit
    paymentNew.id = index + 1
    paymentNew.gain = balance * interest
    paymentNew.bsmv = paymentNew.gain * bsmv
    paymentNew.kkdf = paymentNew.gain * kkdf
    paymentNew.mainMoney =
      amountBasit - paymentNew.gain - paymentNew.bsmv - paymentNew.kkdf
    balanceBasit = balanceBasit - paymentNew.mainMoney
    paymentNew.remains = balanceBasit

    return paymentNew
  })

  const totalBasit = amountBasit * n

  return { basitFinal, totalBasit }
}
