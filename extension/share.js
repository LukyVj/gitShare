var b = document.body;
var h = document.querySelector('.pagehead.repohead .pagehead-actions');
var p_d = document.querySelector('.repository-description');
var fbUrl = 'http://github.com'+document.location.pathname;

var fbSDK = "<script> </script>";
var initSdk = document.createElement('script');
initSdk.innerHTML = "window.fbAsyncInit = function() { FB.init({ appId : '1510342319283371', xfbml : true, version : 'v2.5' }); }; (function(d, s, id){ var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = \"https://connect.facebook.net/en_US/sdk.js\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));";

var d = '%20';
if(p_d){
  var d = p_d.innerText + '%20';
  var d = '%20' + d;
}

var sh_link_tt = "https://twitter.com/intent/tweet?text=" + document.title + "%20-" + d + document.location;
var sh_link_fb = "https://www.facebook.com/sharer/sharer.php?u=" + fbUrl;

h.innerHTML += '<li><a href="'+sh_link_tt+'" target="_blank" class="btn btn-sm btn-with-count" style="border-top-right-radius:3px;border-bottom-right-radius:3px;" title="Share this repo on Twitter" aria-label="Share ' + document.title + ' on Twitter">' +
'<span class="octicon" style="margin-left:-2px;"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 32 32"><path fill="#55ACEE" d="M26.667 9.384c-0.785 0.348-1.628 0.583-2.514 0.689 0.904-0.542 1.598-1.399 1.924-2.421-0.846 0.502-1.782 0.866-2.779 1.062-0.798-0.851-1.936-1.382-3.195-1.382-2.417 0-4.377 1.96-4.377 4.377 0 0.343 0.039 0.677 0.113 0.997-3.638-0.182-6.863-1.925-9.021-4.573-0.377 0.646-0.593 1.398-0.593 2.2 0 1.518 0.773 2.858 1.947 3.643-0.717-0.023-1.392-0.22-1.982-0.547-0 0.018-0 0.037-0 0.055 0 2.121 1.509 3.889 3.511 4.292-0.367 0.1-0.754 0.154-1.153 0.154-0.282 0-0.556-0.028-0.823-0.078 0.557 1.739 2.173 3.004 4.089 3.039-1.498 1.174-3.385 1.874-5.436 1.874-0.353 0-0.702-0.021-1.044-0.061 1.937 1.242 4.238 1.967 6.709 1.967 8.050 0 12.453-6.669 12.453-12.453 0-0.19-0.004-0.378-0.013-0.566 0.855-0.617 1.597-1.388 2.184-2.265z"></path></svg></span> Share </a>  </li>' +
'<li><a href id="fbLink" target="_blank" class="btn btn-sm btn-with-count" style="border-top-right-radius:3px;border-bottom-right-radius:3px;" title="Share this repo on Facebook" aria-label="Share ' + document.title + ' on Facebook">' +
'<span class="octicon" style="margin-left:-2px;margin-top: 2px;margin-right: 2px;"><?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 16 16"><path fill="#4862A3" d="M13.334 0h-10.667c-1.473 0-2.666 1.194-2.666 2.667v10.666c0 1.473 1.194 2.667 2.666 2.667h5.334v-7h-2v-2h2v-1.5c0-1.381 1.119-2.5 2.5-2.5h2.5v2h-2.5c-0.276 0-0.5 0.224-0.5 0.5v1.5h2.75l-0.5 2h-2.25v7h3.334c1.473 0 2.666-1.194 2.666-2.667v-10.666c0-1.473-1.194-2.667-2.666-2.667z"></path></svg></span> Share </a></li>';

document.getElementById('fbLink').addEventListener('click', function(){
  var title = document.title ;
  var facebook_appID = '1510342319283371';
  url = "https://www.facebook.com/dialog/feed?app_id="+ facebook_appID +    "&link=" + encodeURIComponent(document.location)+
              "&name=" + encodeURIComponent(title) +
              "&caption=" + encodeURIComponent(title) +
              "&description=" + d +
              "&redirect_uri=https://www.facebook.com";
  window.open(url);
})

b.appendChild(initSdk)

