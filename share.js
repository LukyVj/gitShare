var b = document.body;
var h = document.querySelector('.pagehead.repohead .pagehead-actions');
var sh_link = "https://twitter.com/intent/tweet?text=" + document.title + "%20" + document.location
h.innerHTML += '<li> <a href="'+sh_link+'" target="_blank" class="btn btn-sm btn-with-count" style="border-top-right-radius:3px;border-bottom-right-radius:3px;" title="Share this repo on twitter" aria-label="Share AurousGroup/aurous.me on Twitter"> <span class="octicon octicon-file-symlink-file"></span> Share </a>  </li>'
