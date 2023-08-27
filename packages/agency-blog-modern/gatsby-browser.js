// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
require('prismjs/themes/prism.css')
require('katex/dist/katex.min.css')

import React from "react"
import { navigate } from "gatsby"

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === "/konser") {
    window.location.href = "https://donate.stripe.com/5kAaFV9GtglW71m7st?locale=tr"
  }
}
