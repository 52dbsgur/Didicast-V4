const links = document.querySelectorAll('link[rel="import"]')
console.log("ys links >> ", links);
// Import and add each page to the DOM
Array.prototype.forEach.call(links, (link) => {
  let template = link.import.querySelector('.task-template')
  let clone = document.importNode(template.content, true)
  console.log("clone >> ", clone);
  if (link.href.match('about.html')) {
    document.querySelector('body').appendChild(clone)
  } else {
    document.querySelector('.content').appendChild(clone)
  }
})
