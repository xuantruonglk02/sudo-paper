const { PDFReader } = require('../../src/core/readers/PDF.ts')

(async () => {
    const path = 'test/papers/FAW.pdf'
    const pdf = new PDFReader(path)

    console.log(pdf)
})()
