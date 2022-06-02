// Change language en/th
// var document = document;

// function changeLanguage(elClassName) {
//     const showClassName = elClassName
//     const hideClassName = elClassName == 'en' ? 'th' : 'en'

//     $('[lang=' + showClassName + ']').show()
//     $('[lang=' + hideClassName + ']').hide()

// }
// changeLanguage('en')

// $('.language-btn').on('click', function() {
//     $('.language-btn').removeClass('active');
//     $(this).addClass('active');
// });


// localStorage
String.i18n = (function () {
  var handlers = {
    'i18n-content': function (element, key, dictionary) {
      element.innerHTML = dictionary[key] || ''
    },

    'i18n-options': function (select, key, dictionary) {
      var options = dictionary[key] || []
      options.forEach(function (optionData) {
        var option =
          typeof optionData === 'string'
            ? new Option(optionData)
            : new Option(optionData[1], optionData[0])
        select.appendChild(option)
      })
    },

    'i18n-values': function (element, attributeAndKeys, dictionary) {
      var parts = attributeAndKeys.replace(/\s/g, '').split(/;/)
      for (var i = 0, len = parts.length; i < len; i++) {
        var part = parts[i++]
        if (!part) return

        var attributeAndKeyPair = part.match(/^([^:]+):(.+)$/)
        if (!attributeAndKeyPair)
          throw new Error('malformed i18n-values: ' + attributeAndKeys)

        var propName = attributeAndKeyPair[1]
        var propExpr = attributeAndKeyPair[2]

        var value = dictionary[propExpr] || ''

        if (propName.indexOf('.') === 0) {
          var path = propName.slice(1).split('.')
          var targetObject = element
          while (targetObject && path.length > 1) {
            targetObject = targetObject[path.shift()]
          }
          if (targetObject) {
            targetObject[path] = value
            if (path === 'innerHTML') process(element, dictionary)
          }
        } else {
          element.setAttribute(propName, value)
        }
      }
    },
  }

  var attributeNames = ['i18n-content', 'i18n-options', 'i18n-values']
  var selector = '[' + attributeNames.join('],[') + ']'

  function process(node, dictionary) {
    var elements = node.querySelectorAll(selector)
    for (var element, i = 0; (element = elements[i]); i++) {
      for (var j = 0; j < attributeNames.length; j++) {
        var name = attributeNames[j]
        var attribute = element.getAttribute(name)
        if (attribute != null)
          handlers[name](element, attribute, dictionary)
      }
    }
  }

  return process
})()

// 
