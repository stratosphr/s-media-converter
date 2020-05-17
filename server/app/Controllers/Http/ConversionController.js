'use strict'

class ConversionController {

  convert({request}) {
    const {p1, p2} = request.all()
    return {
      hello: p1,
      world: p2
    }
  }

}

module.exports = ConversionController
