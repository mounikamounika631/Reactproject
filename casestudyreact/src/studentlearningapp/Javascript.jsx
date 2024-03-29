import { Box } from '@mui/system'
import React from 'react'

function Javascript() {
  let url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  return (
    <div>
      <Box sx={{}}>
        <h4>Javascript</h4>
        <p>JavaScript is an object-based scripting language which is lightweight and cross-platform.</p>
      <p>JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser.</p>
      <br/>
      <h4>History of JavaScript</h4>
      <p>In 1993, Mosaic, the first popular web browser, came into existence. In the year 1994, Netscape was founded by Marc Andreessen. He realized that the web needed to become more dynamic. Thus, a 'glue language' was believed to be provided to HTML to make web designing easy for designers and part-time programmers. Consequently, in 1995, the company recruited Brendan Eich intending to implement and embed Scheme programming language to the browser. But, before Brendan could start, the company merged with Sun Microsystems for adding Java into its Navigator so that it could compete with Microsoft over the web technologies and platforms. Now, two languages were there: Java and the scripting language. Further, Netscape decided to give a similar name to the scripting language as Java's. It led to 'Javascript'. Finally, in May 1995, Marc Andreessen coined the first code of Javascript named 'Mocha'. Later, the marketing team replaced the name with 'LiveScript'. But, due to trademark reasons and certain other reasons, in December 1995, the language was finally renamed to 'JavaScript'. From then, JavaScript came into existence.</p>
      <a href={url}>click this  link for refering more data in google</a>
      </Box>
    </div>
  )
}

export default Javascript
