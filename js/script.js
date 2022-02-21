// global variable
var data;

function CopyToClipboard (text) {
    // Copies a string to the clipboard. Must be called from within an 
    // event handler such as click. May return false if it failed, but
    // this is not always possible. Browser support for Chrome 43+, 
    // Firefox 42+, Safari 10+, Edge and IE 10+.
    // IE: The clipboard feature may be disabled by an administrator. By
    // default a prompt is shown the first time the clipboard is 
    // used (per session).
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text.replace(/\//g, "\\");
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
    }
}

$.get('./data/linkslane1.json', function (data) {    
    data.links.forEach(function (link) {
        $("#lane1").append(`<span class="square"><h3><a href=${link.url} target="_blank"><img src="https://www.google.com/s2/favicons?domain=${link.url}"> ${link.title}</a></h3></span>`);
    });
});

$.get('./data/linkslane2.json', function (data) {    
    data.links.forEach(function (link) {
        $("#lane2").append(`<span class="square"><h3><a href=${link.url} target="_blank"><img src="https://www.google.com/s2/favicons?domain=${link.url}"> ${link.title}</a></h3></span>`);
    });
});

$.get('./data/linkslane3.json', function (data) {    
    data.links.forEach(function (link) {
        $("#lane3").append(`<span class="square"><h3><a href=${link.url} target="_blank"><img src="https://www.google.com/s2/favicons?domain=${link.url}"> ${link.title}</a></h3></span>`);
    });
});

$.get('./data/linkslane4.json', function (data) {    
    data.links.forEach(function (link) {
        $("#lane4").append(`<span class="square" onClick="CopyToClipboard('${link.url}')"><h3 class="white">${link.title}</h3><p>${link.url.replace(/\//g, "\\")}</p></span>`);
    });
});