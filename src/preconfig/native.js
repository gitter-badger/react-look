import alternativeValue from '../plugins/alternativeValue'
import statefulValue from '../plugins/statefulValue'
import mixin from '../plugins/mixin'
import stringSyntax from '../plugins/stringSyntax'

import { equal, unEqual, bigger, smaller, biggerThan, smallerThan } from '../mixins/condition'
import { firstChild, lastChild, onlyChild, nthChild, nthLastChild } from '../mixins/pseudoClasses/childIndex'
import { firstOfType, lastOfType, onlyOfType, nthOfType, nthLastOfType } from '../mixins/pseudoClasses/childIndex'
import empty from '../mixins/pseudoClasses/empty'
import firstLetter from '../mixins/pseudoClasses/firstLetter'
import contains from '../mixins/pseudoClasses/contains'
import substr from '../mixins/pseudoClasses/substr'
import blank from '../mixins/pseudoClasses/blank'
import extend from '../mixins/extend'

export default {
  plugins: [
    stringSyntax,
    mixin,
    alternativeValue,
    statefulValue
  ],
  mixins: {
    // NOTE: Ordner matters!
    '>=': biggerThan,
    '<=': smallerThan,
    '!=': unEqual,
    '>': bigger,
    '<': smaller,
    '=': equal,
    extend: extend,
    ':empy': empty,
    ':first-child': firstChild,
    ':last-child': lastChild,
    ':only-child': onlyChild,
    ':nth-child': nthChild,
    ':nth-last-child': nthLastChild,
    ':first-of-type': firstOfType,
    ':last-of-type': lastOfType,
    ':only-of-type': onlyOfType,
    ':nth-of-type': nthOfType,
    ':nth-last-of-type': nthLastOfType,
    ':first-letter': firstLetter,
    ':blank': blank,
    ':contains': contains,
    ':substr': substr
  }
}
