<!-- ANSTER TO THE QUESTIN NO 01 -->

### getElementById()-------- getElementById() is used to select a single element. getElementById() return a single element, If no element matches it returns null.


### getElementByClassName()----getElementByClassName() is used to select multiple element and getElementByClassName() return a live html collection, If no element matches it returns empty htmlCollection.

### querySelectorAll()---querySelectorAll() is used to select first matching element. It Returns the first matching Element object that matches the CSS selector. If no element matches it returns null.

### querySelectorAll()---querySelectorAll() is used to select all matching element. It return all matching element. it's return nodeList. if no element matched it return a empty nodeList

<!-- ANSTER TO THE QUESTION NO 02 -->

## Create an element and insert the dom--- 
step1- call parent container
step2- create a new element
step3 - set the value of new element
step4 - append the new element in the parent container

<!-- ANSTER TO THE QUESTION NO 03 -->

### Event bubbling is a process that bubbles from a child element to the parent element or root. When we add an event listener to an element, after the element is triggered, it goes to its parent or root element in turn.


<!-- ANSTER TO THE QUESTION NO -4 -->

### Event delegation is a mechanism that we add to the parent element. Through the delegation technique, we can trigger its child elements by adding an event listener to the parent element only once.

<!-- ANSWER TO THE QUESTION NO 05 -->

*** preventDefault()---
### When we click on any button in the form, the form thinks that the submit button has been clicked, so the form reloads the page. This is the default behavior of the form. To change this default behavior of the form, preventDefault() is used.

*** stopPropagation() 
### When we add an evenlistener to an element, it goes to the root of the element after it is triggered. If we ever want to stop bubbling, we use the stopPropagation() method.