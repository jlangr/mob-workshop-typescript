import {expect} from 'chai'
import NameNormalizer from '../../src/util/NameNormalizer'

describe('#NameNormalizer', () => {
  let normalizer
  beforeEach(() => {
    normalizer = new NameNormalizer()
  })

  it('returns empty when passed empty string', () => {
    expect(normalizer.normalize('')).to.equal('')
  })

  it('returns single word name', () => {
    expect(normalizer.normalize('Plato')).to.equal('Plato')
  })

  it('swaps first and last names', () => {
    expect(normalizer.normalize('Haruki Murakami')).to.equal('Murakami, Haruki')
  })

  xit('trims leading and trailing whitespace', () => {
    expect(normalizer.normalize('  Big Boi   ')).to.equal('Boi, Big')
  })

  xit('initializes middle name', () => {
    expect(normalizer.normalize('Henry David Thoreau')).to.equal('Thoreau, Henry D.')
  })

  xit('does not initialize one letter middle name', () => {
    expect(normalizer.normalize('Harry S Truman')).to.equal('Truman, Harry S')
  })

  xit('initializes each of multiple middle names', () => {
    expect(normalizer.normalize('Julia Scarlett Elizabeth Louis-Dreyfus')).to.equal('Louis-Dreyfus, Julia S. E.')
  })

  xit('appends suffixes to end', () => {
    expect(normalizer.normalize('Martin Luther King, Jr.')).to.equal('King, Martin L., Jr.')
  })

  xit('throws when name contains two commas', () => {
    expect(() => normalizer.normalize('Thurston, Howell, III')).to.throw()
  })
})
