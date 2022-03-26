// var a = document.getElementById('abc')
// var b = a.hasAttribute('class')
// console.log(b)

// var a = document.getElementById('abc')
// var b = a.getAttribute('class')
// console.log(b)


// var a = document.getElementById('abc')
// var b = a.setAttribute('class','rrr')
// console.log(b)

// var a = document.createElement('p')
// console.log(a)
// var b = document.createTextNode('hello saad')
// console.log(b) 
// a.appendChild(b)
// console.log(a)

// var a = document.createElement('input')
// var b = document.createTextNode('Hello Saad')
// a.appendChild(b)
// console.log(a)

function foo(){
    var a = document.getElementById('abc')
    a.innerHTML=''
    var k = document.getElementById('ss')
    var c = document.createElement('li')
    k.appendChild(c)
    var d =  document.createTextNode(a.value)
    c.appendChild(d)
    var t = document.createElement('button')
    var y = document.createTextNode("Delete")
    t.appendChild(y)
    c.appendChild(t)
    t.setAttribute('onclick','deltodo(this)')
}
function deltodo(e){
 e.parentNode.remove()
}
function deleteall(){
    var a = document.getElementById('ss')
    a.innerHTML=''
}