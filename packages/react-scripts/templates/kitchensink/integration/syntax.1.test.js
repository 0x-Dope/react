import initDOM from './initDOM'

// eslint-disable-next-line no-undef
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

describe('Integration', () => {
  describe('Language syntax', () => {
    it('array-destructuring', async () => {
      const doc = await initDOM('array-destructuring')

      expect(doc.getElementById('feature-array-destructuring').childElementCount).toBe(4)
    })

    it('array-spread', async () => {
      const doc = await initDOM('array-spread')

      expect(doc.getElementById('feature-array-spread').childElementCount).toBe(4)
    })

    it('async/await', async () => {
      const doc = await initDOM('async-await')

      expect(doc.getElementById('feature-async-await').childElementCount).toBe(4)
    })

    it('class properties', async () => {
      const doc = await initDOM('class-properties')

      expect(doc.getElementById('feature-class-properties').childElementCount).toBe(4)
    })

    it('computed properties', async () => {
      const doc = await initDOM('computed-properties')

      expect(doc.getElementById('feature-computed-properties').childElementCount).toBe(4)
    })

    it('custom interpolation', async () => {
      const doc = await initDOM('custom-interpolation')

      expect(doc.getElementById('feature-custom-interpolation').childElementCount).toBe(4)
    })

    it('default parameters', async () => {
      const doc = await initDOM('default-parameters')

      expect(doc.getElementById('feature-default-parameters').childElementCount).toBe(4)
    })

    it('destructuring and await', async () => {
      const doc = await initDOM('destructuring-and-await')

      expect(doc.getElementById('feature-destructuring-and-await').childElementCount).toBe(4)
    })

    it('generators', async () => {
      const doc = await initDOM('generators')

      expect(doc.getElementById('feature-generators').childElementCount).toBe(4)
    })

    it('object-destructuring', async () => {
      const doc = await initDOM('object-destructuring')

      expect(doc.getElementById('feature-object-destructuring').childElementCount).toBe(4)
    })
  })
})
