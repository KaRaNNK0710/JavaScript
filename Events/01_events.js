//Event listener

//This is used to identify/track the user's events. 
// syntax - document.getAnything().addEventListener('eventListener_type', callback_func(){},
// use_capture)
// eventListener_type can be of various types: click, mouseover, keydown etc

//type, timestamp, defaultPrevented

// target, toElement, srcElement, currentTarget
// Important for Interviews - clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keycode


//use_capture is used when you have two or more similar events on the same element, as in, 
// if you use false then the propagation will be in bubbling phase and if you use it as true,
// then the propagation will be in capturing phase


// stopPropagation is used to stop the bubbling phase of the outside part, i.e only the inner part
// will be executed. 