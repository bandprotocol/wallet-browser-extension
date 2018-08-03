import { BigNumber } from 'bignumber.js'

export const generateTokenBalanceClass = (tokenName, precision) => {
  const TokenBigNumber = BigNumber.clone({
    DECIMAL_PLACES: precision,
    EXPONENTIAL_AT: precision * 2,
  })

  return class TokenBalance {
    static precision = precision
    static tokenName = precision

    static fromSmallUnitString(smallUnit) {
      const smallUnitPadded =
        [...Array(precision + 1).fill('0')].join('') + smallUnit

      const smallUnitWithDot =
        smallUnitPadded.slice(0, -precision) +
        '.' +
        smallUnitPadded.slice(-precision)

      return new TokenBalance(new TokenBigNumber(smallUnitWithDot))
    }

    static fromSmallUnitBigNumber(smallUnit) {
      return new TokenBalance(
        smallUnit.dividedBy(new TokenBigNumber(10).pow(precision))
      )
    }

    constructor(balance) {
      this.balance =
        typeof balance === 'string' ? new TokenBigNumber(balance) : balance
    }

    plus(val) {
      return new TokenBalance(this.balance.plus(val))
    }

    minus(val) {
      return new TokenBalance(this.balance.minus(val))
    }

    toSmallUnit() {
      return this.balance.times(new TokenBigNumber(10).pow(precision))
    }

    toUnitString() {
      return this.balance.toPrecision()
    }

    toSmallUnitString() {
      return this.toSmallUnit().toString()
    }
  }
}

export const BandBalance = generateTokenBalanceClass('Band', 36)
export const TokenBalance = generateTokenBalanceClass('Token', 18)
