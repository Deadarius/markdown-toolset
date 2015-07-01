test = require 'coffeetape'
mt = require '../index'
test 'bold', (suit) ->
  suit.test 'clean string should be bolded', (t) ->
    text = 'text'
    bolded = mt.bold(text)
    t.equal(bolded, '**text**')
    t.end()

  suit.test 'bolded string should be unbolded', (t) ->
    text = '**text**'
    bolded = mt.bold(text)
    t.equal(bolded, 'text')
    t.end()
