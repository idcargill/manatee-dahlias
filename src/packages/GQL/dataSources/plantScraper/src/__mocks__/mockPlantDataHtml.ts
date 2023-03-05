export const mockPlantDataHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src='https://www.googletagmanager.com/gtag/js?id=G-LQQK3FHVM6'></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LQQK3FHVM6');
</script>

<link rel="stylesheet" href="/i/c/bootstrap.5.1.3.min.css" /><link rel="stylesheet" href="/i/c/nga_20220305.min.css" /><style> html { scroll-behavior: auto !important; font-size: 18px !important; } .modal-dialog { max-width: 550px !important; } .grecaptcha-badge{display:none;} body { font-family: Calisto MT, Bookman Old Style, Bookman, Goudy Old Style, Garamond, Hoefler Text, Bitstream Charter, Georgia, serif !important; }
</style>
<script>
// Prevent form resubmission.
if (window.history.replaceState) { window.history.replaceState(null, null, window.location.href); }

let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

  // No framing the site, please.
  if(top!=self) { top.location.replace(document.location); }

  // ////////////////////////////////////////////
  // The below forces the footer to stick to the bottom, if the page isn't tall enough.
  let docHeight = window.innerHeight;
  let footerHeight = document.querySelector('#atpfooter').offsetHeight;
  let rect = document.querySelector('#atpfooter').getBoundingClientRect();

  let footerTop = parseInt(rect.top + footerHeight);
  if (footerTop < docHeight) {
    document.querySelector("#atpfooter").style.marginTop = docHeight - footerTop + 'px';
  }

  function _GetURL(uri,ngaview) {
    if (uri == "ModalNGAView") {
      return("/apps/atpview/show/"+ngaview+"/");
    } else if (uri == 'ModalShare') {
      return;
    } else {
      return("/i/ajax/modal/"+uri+".php");
    }
  }

  document.querySelectorAll('[data-bs-toggle="modal"]').forEach((e) => {
    let thetitle = e.getAttribute('title');
    let ngaview = e.getAttribute('data-ngaview');
    let theModal = e.getAttribute('data-bs-target');
    let uri = theModal.replace("#", "");
    e.addEventListener("click", function (m) {
      m.preventDefault();
      document.getElementById(uri).querySelector(".modal-title").innerHTML = thetitle;

      let url = _GetURL(uri,ngaview);
      if (url) {
        fetch(url).then(function (response) {
          return response.text();
        }).then(function (html) {
          document.getElementById(uri).querySelector(".modal-body").innerHTML = html;
        }).catch(function (err) {
          console.warn('Unable to load '+url, err);
        });
      }
    });
  });

  let input = document.getElementById("inputlogin_field_u");
  if (typeof(input) != 'undefined' && input != null) {
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("login_btn_submit").click();
      }
    });
    input = document.getElementById("inputlogin_field_p");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("login_btn_submit").click();
      }
    });
  
    document.querySelector('#login_btn_submit').addEventListener("click", function (m) {
      let username = document.getElementById('inputlogin_field_u').value;
      let password = document.getElementById('inputlogin_field_p').value;
      if (username != "" && password != ""){
        fetch('/i/ajax/users/login.php?u='+username+'&p='+password).then(function (response) {
          return response.text();
        }).then(function (html) {
          if (html == 1) {
            window.location.assign('/loggedin.php');
          } else {
            document.getElementById("login_btn_submit").disabled = false;
            document.getElementById('login_error_message').innerHTML = html;
          }
        }).catch(function (err) {
          console.warn('Unable to load '+url, err);
        });
      }
    });
  }

  document.querySelectorAll('.lightbox').forEach((e) => {
    e.removeAttribute('href');
  });

});

</script>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="max-image-preview:large">

    <link rel="canonical" href="https://garden.org/plants/view/591044/Tomato-Solanum-lycopersicum-Dancing-with-Smurfs/" />
<link rel="search" href="https://garden.org/i/search/opensearch_plants.xml" type="application/opensearchdescription+xml" title="NGA Database search" />
  <meta name="description" content="Plant database entry for Tomato (Solanum lycopersicum 'Dancing with Smurfs') with 4 images, one comment, and 38 data details.">
  <meta property="og:url" content="https://garden.org/plants/view/591044/Tomato-Solanum-lycopersicum-Dancing-with-Smurfs/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Plant database entry for Tomato (Solanum lycopersicum 'Dancing with Smurfs') with 4 images, one comment, and 38 data details.">
  <meta property="og:description" content="Plant database entry for Tomato (Solanum lycopersicum 'Dancing with Smurfs') with 4 images, one comment, and 38 data details.">
  <meta property="og:image" content="https://garden.org/pics/2022-05-22/antsinmypants/46b095.jpg">
  <meta property="og:site" content="Garden.org">

    <meta property="fb:app_id" content="457278271124614" />
    <meta name="msapplication-TileImage" content="/i/p/nga/nga_144.png">
    <link rel="apple-touch-icon" href="/i/p/nga/nga_57.png"/>  
    <link rel="apple-touch-icon" sizes="72x72" href="/i/p/nga/nga_72.png"/>  
    <link rel="apple-touch-icon" sizes="114x114" href="/i/p/nga/nga_114.png"/>  
  <title>Tomato (Solanum lycopersicum 'Dancing with Smurfs') in the Tomatoes Database - Garden.org</title></head>

  <body>
<nav class="navbar navbar-expand-lg navbar-light sticky-top pt-0 pb-0" id="nganav1">
  <div class="container-fluid">
    <a class="navbar-brand font100" href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAfUlEQVQ4y2NgGCKAkaEHCBmJVc7KsIThPxAuAbKIADwMu8DKQXAXkEcAiDGcgSsHwTNAETxAmeE2inIQvA0UxQGMGV5gKAfBF0AZLMCV4RNW5SD4CSiLBqIYfuJUDoI/gSqQQBHDX7zKQfAvUBUawKccK6BAA26RUQ1DFQAAGbaxQdZKs1sAAAAASUVORK5CYII=" class="pngblue" alt="Icon for home" width="24" height="24" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        

        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="learnDropdown">Learning Library</a>
          <ul class="dropdown-menu" aria-labelledby="learnDropdown">
            <li><a class="dropdown-item" href="/learn/">Learning Library Homepage</a></li>
            <li><a class="dropdown-item" href="/learn/howto/grow/">Plant Care Guides</a></li>
            <li><a class="dropdown-item" href="/learn/library/foodguide/">Food Gardening Guides</a></li>
            <li><a class="dropdown-item" href="/learn/library/weeds/">Weed Library</a></li>
            <li><a class="dropdown-item" href="/learn/library/pests/">Pest Control Library</a></li>
            <li><a class="dropdown-item" href="/courseweb/">Garden Curricula</a></li>
            <li><a class="dropdown-item" href="/ideas/podcast/">Podcast</a></li>
            <li><a class="dropdown-item" href="/learn/videos/">Videos</a></li>
            <li><a class="dropdown-item" href="/special/downloads/">Downloads</a></li>
            <li><a class="dropdown-item" href="/nga/searchqa/">Questions and Answers</a></li>
            <li><a class="dropdown-item" href="/nga/dictionary/">Garden Dictionary</a></li>
            <li><a class="dropdown-item" href="/ediblelandscaping/">Edible Landscaping</a></li>
            <li><a class="dropdown-item" href="/urbangardening/">Urban Gardening</a></li>
            <li><a class="dropdown-item" href="/learn/articles/">Browse all articles</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="dbDropdown">Plants Database</a>
          <ul class="dropdown-menu" aria-labelledby="dbDropdown">
            <li><a class="dropdown-item" href="/plants/">Plants Database</a></li>
            <li><a class="dropdown-item" href="/plants/search/text.php">Search by name</a></li>
            <li><a class="dropdown-item" href="/plants/search/advanced.php">Search by characteristics</a></li>
            <li class="divider"></li>
            <li><a class="dropdown-item" href="/plants/multi/">Plant Combinations</a></li>
            <li><a class="dropdown-item" href="/apps/plant_photos/view/">See All New Database Photos</a></li>
            <li class="divider"></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="appsDropdown">Useful Tools</a>
          <ul class="dropdown-menu" aria-labelledby="appsDropdown">
            <li><a class="dropdown-item" href="/apps/">View All Apps</a></li>
            <li><a class="dropdown-item" href="/apps/calendar/">Vegetable Planting Calendar</a></li>
            <li><a class="dropdown-item" href="/apps/frost-dates/">Frost Dates Lookup</a></li>
            <li><a class="dropdown-item" href="/apps/swap/">Seed Swaps</a></li>
            <li><a class="dropdown-item" href="/lists/">Plant Lists</a></li>
            <li><a class="dropdown-item" href="/nga/calculators/">Gardening Calculators</a></li>
            <li><a class="dropdown-item" href="/greenpages/">Green Pages</a></li>
            <li><a class="dropdown-item" href="/nga/zipzone/">Zone Lookup</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="communityDropdown">Community</a>
          <ul class="dropdown-menu" aria-labelledby="communityDropdown">
            <li><a class="dropdown-item" href="/newswire/">Gardening News</a></li>
            <li><a class="dropdown-item" href="/ideas/">Member Ideas</a></li>
            <li><a class="dropdown-item" href="/forums/">Forums</a></li>
            <li><a class="dropdown-item" href="/blogs/">Blogs</a></li>
            <li><a class="dropdown-item" href="/apps/events/">Gardening Calendar of Events</a></li>
            <li><a class="dropdown-item" href="/frogs/">Gardening Knowledgebase</a></li> 
            <li><a class="dropdown-item" href="/frogs/ask/">Ask a Question</a></li>
            <li><a class="dropdown-item" href="/apps/photocontest/">Photo Contests</a></li>
          </ul>
        </li>
  
      </ul>
      <div class="d-flex">
        
      <a class="nav-link" href="/users/join/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAr0lEQVQ4y2NgGI5AhmEZwzMgXAZkEaX8LcN/KHxLjJZlcOUguIywhqcoGp7SQAPJTiLZ0yQHK25gx8BIivJUhr8MUzGFlRlyGDYx3GD4xNCDIp4MVP6PIQtVsRnDQbh328EiWlCZJKDy/0CjUEAgwy+48iawSAPDb4YgIJ0AVp6H7pj7SKFfD9XwH2jIFIY/QLoQ0/X/USBESxOUV4wtFP5j1dIKZJWSFvr2QyAHAwC8qW4fpqSD1wAAAABJRU5ErkJggg==" class="pngblue" alt="Icon for how_to_reg" width="24" height="24" /> Signup</a>
      <a class="nav-link" href="/login.php"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAUElEQVQ4y2NgGELgPxp8zOBBmob/DI9It5F6GuqBkAQNGgy/gJL1pNgQiEULAT9gakHR8B8nrKeSBpKdRKGnyQhWEiOOHmmJrORNcgYaMAAAZWBvIS6X7QEAAAAASUVORK5CYII=" class="pngblue" alt="Icon for login" width="24" height="24" /> Login</a>

      </div>
    </div>
  </div>
</nav>

<div class="container-fluid">

  <div class="row">
    <div class="col-md-12" id="row_ngalogo">
      <a href="/"><img src="/i/p/nga/header/logo.png" width="154" height="150" alt="National Gardening Association Logo" class="nga_nav150"></a><a href="/plants/"><img src="/i/p/nga/header/plants.png" width="250" height="150" alt="Header" id="row_text" class="nga_nav150"></a><a href="/special/offers/newsletter_signup.php"><img src="/i/p/btn_newsletter.png" alt="Get our newsletter" class="btn_newsletter" width="263" height="40"></a>

    </div>
  </div>

</div>
<div class="container-fluid" id="ngabody">
    <div class="row" style="margin-bottom:5px;">
      <div class="col-lg-8">
        <h1 class="page-header">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/plants/group/tomatoes/">Tomatoes</a></li>
          <li class="breadcrumb-item active" aria-current="page">Tomato (<i>Solanum lycopersicum</i> 'Dancing with Smurfs')</li>
        </ol>
      </nav>
    </h1>
    
      </div>
      <div class="col-lg-4 mt-3">
        

<form class="form-inline" action="/plants/search/text/" method="get">
  <div class="input-group">
    <input class="form-control" name="q" type="text" placeholder="Search Plants" aria-label="Enter search term..." aria-describedby="button-searchd8965761a95f1ab" value="" />
    <button class="btn btn-secondary" id="button-searchd8965761a95f1ab" type="submit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAnElEQVQ4y82TTQ6CMBBG34KlXEE4A2ybcD04QI8A9lJCQuodNF18brWxSBNDnNl9mZf5hz83w8iKWBkx34ILLHpzS7EFWERgoOFEw0BA2K1iRKB7UToCShc2IfpI6xFTCvCINtJahE8Bd0QZaSXikZvhltuD+9mUPu/B5W3aIRbqPbfkuWCABTFT7T/GmjkXqQ5DrpxzHqvKCz/YniVFVa3l5BPYAAAAAElFTkSuQmCC" class="pngwhite" alt="Icon for search" width="24" height="24" /></button>
  </div>
</form>

      </div>
    </div>
    <div class="row"><div class="col-sm-12"><center></center><div class="row"><div class="col-lg-8">
<table class="table table-striped table-bordered table-hover caption-top simple-table">
  <caption>Data specific to Tomatoes (<a href="/plants/propose/databox/591044/" class="userlink">Edit</a>)</caption>
 <tbody>  <tr>
    <td style="width:150px;" data-th="">Skin Color:</td>
    <td data-th="">Blue<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Fruit Shape:</td>
    <td data-th="">Round<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Fruit Size:</td>
    <td data-th="">Cherry<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Leaf Type:</td>
    <td data-th="">Regular-Leaf<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Best Uses:</td>
    <td data-th="">Salad<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Growth Mode:</td>
    <td data-th="">Indeterminate<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Earliness:</td>
    <td data-th="">Mid-season<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Country:</td>
    <td data-th="">USA</td>
  </tr>
 </tbody></table><P>
<table class="table table-striped table-bordered table-hover caption-top simple-table">
  <caption>General Plant Information (<a href="/plants/propose/databox/591044/" class="userlink">Edit</a>)</caption>
 <tbody>  <tr>
    <td style="width:150px;" data-th="">Plant Habit:</td>
    <td data-th="">Vine<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Life cycle:</td>
    <td data-th="">Perennial<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Sun Requirements:</td>
    <td data-th="">Full Sun<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Water Preferences:</td>
    <td data-th=""><span class="db_tooltip" title="average moisture">Mesic</span><BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Minimum cold hardiness:</td>
    <td data-th="">Zone 11 +4.4 °C (40 °F) to +7.2 °C (50 °F)<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th=""><span class="db_tooltip" title="Write &quot;feet&quot; or &quot;inches&quot; instead of using quotes"><B>Plant Height</B></span>:</td>
    <td data-th="">Varies greatly by species and cultivated variety.</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th=""><span class="db_tooltip" title="Write &quot;feet&quot; or &quot;inches&quot; instead of using quotes"><B>Plant Spread</B></span>:</td>
    <td data-th="">Varies greatly by species and cultivated variety.</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Leaves:</td>
    <td data-th="">Other: Varies greatly by species and cultivated variety.<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Fruit:</td>
    <td data-th="">Showy<BR>
Edible to birds<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Fruiting Time:</td>
    <td data-th="">Other: Varies greatly by species and cultivated variety.<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Flower Color:</td>
    <td data-th="">Yellow<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Bloom Size:</td>
    <td data-th="">Under 1"<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Flower Time:</td>
    <td data-th="">Other: Varies greatly by species and cultivated variety.<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Uses:</td>
    <td data-th="">Vegetable<BR>
Suitable as Annual<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Edible Parts:</td>
    <td data-th="">Fruit<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Eating Methods:</td>
    <td data-th="">Raw<BR>
Cooked<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Resistances:</td>
    <td data-th="">Rabbit Resistant<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Toxicity:</td>
    <td data-th="">Leaves are poisonous<BR>
Roots are poisonous<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Propagation: Seeds:</td>
    <td data-th="">Self fertile<BR>
Other info: Direct sowing into the garden not recommended. Sow seeds into sterile seed starting mix, 1/8"-1/4" deep, indoors, 6-8 weeks prior to last expected frost date. Optimal germination occurs in 7-14 days with constant moisture and soil temperatures of 75-90F.<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Propagation: Other methods:</td>
    <td data-th="">Cuttings: Stem<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Pollinators:</td>
    <td data-th="">Self<BR>
Various insects<BR>
</td>
  </tr>
  <tr>
    <td style="width:150px;" data-th="">Containers:</td>
    <td data-th="">Preferred depth: Some tomato varieties, primarily dwarf and determinate varieties, are suitable for container gardening. Large, vining, indeterminate types can be grown in 5 gallon or larger containers but may require extra attention.<BR>
</td>
  </tr>
 </tbody></table><P></div><div class="col-lg-4 justify-content-center"><div class="col mb-2"><div class="card border-0"><div class="card-body p-1"><a href="#" data-bs-toggle="modal" data-bs-target="#ModalNGAView" data-ngaview="db_photo-744196" title="Image"><img src="/pics/2022-05-22/antsinmypants/46b095-500.jpg" width="500" height="500" alt="Image" title="Image" class="img-fluid"></a></div></div></div><div class="card  mb-2"><div class="card-header">Common names</div><ul class="list-group list-group-flush align-middle"><li class="list-group-item pt-2"> Tomato</li></ul></div><P></div></div><div class="card  mb-2"><div class="card-header">Photo Gallery</div><div class="card-body"><div class="row row-cols-auto g-2 justify-content-center"><div class="col" style="width:279px"><div class="card m-2"><a href="/plants/photo/744196/"><img src="/pics/2022-05-22/antsinmypants/46b095-250.jpg"  width="250" height="250" class="card-img-top" title="Location: Ingleside. Illinois
Date: 2022-05-21
Young plant." alt="Location: Ingleside. Illinois
Date: 2022-05-21
Young plant."></a><ul class="list-group list-group-flush align-middle"><li class="list-group-item pt-2">By <a href="/users/profile/antsinmypants/">antsinmypants</a></li></ul></div></div><div class="col" style="width:279px"><div class="card m-2"><a href="/plants/photo/771454/"><img src="/pics/2022-09-11/antsinmypants/23bb44-250.jpg"  width="250" height="250" class="card-img-top" title="Location: Ingleside. Illinois
Date: 2022-08-07" alt="Location: Ingleside. Illinois
Date: 2022-08-07"></a><ul class="list-group list-group-flush align-middle"><li class="list-group-item pt-2">By <a href="/users/profile/antsinmypants/">antsinmypants</a></li></ul></div></div><div class="col" style="width:279px"><div class="card m-2"><a href="/plants/photo/771455/"><img src="/pics/2022-09-11/antsinmypants/626d5f-250.jpg"  width="250" height="250" class="card-img-top" title="Location: Ingleside. Illinois
Date: 2022-08-07" alt="Location: Ingleside. Illinois
Date: 2022-08-07"></a><ul class="list-group list-group-flush align-middle"><li class="list-group-item pt-2">By <a href="/users/profile/antsinmypants/">antsinmypants</a></li></ul></div></div><div class="col" style="width:279px"><div class="card m-2"><a href="/plants/photo/165814/"><img src="/pics/2013-03-25/vic/508ffe-250.jpg"  width="250" height="250" class="card-img-top" title="
Courtesy Sustainable Seed Company" alt="
Courtesy Sustainable Seed Company"></a><ul class="list-group list-group-flush align-middle"><li class="list-group-item pt-2">By <a href="/users/profile/vic/">vic</a></li></ul></div></div></div></div></div><div class="card  mb-2"><div class="card-header">Comments:</div><ul class="list-group list-group-flush align-middle"><li class="list-group-item pt-2"><div>Posted by <a href="/users/profile/sallyg/">sallyg</a> (central Maryland - Zone 7b) on Jul 4, 2019 10:47 AM concerning plant: </div>
      <div class="pt-2">I bought one Dancing with Smurfs plant as a nice starter at the nursery. Plant has grown well (2 months) and is producing. Fruits start out very dark and green on the bottom. As they ripen, they turn red-orange and lose the dark blue-black. I tried several, all were bland and tasteless. And not very novel, as they lost the dark color. The plant suffered in the summer heat but did rebound in fall with a fair amount of fruit. Still, they were always bland and tasteless to me, all season long. I gave them to the chickens.<br>
('Black Cherry' tomatoes are dark when ripe, with much better Cherokee Purple kind of taste. And they make much bigger clusters of fruit too.)</div>
      <div class="pt-2"> <a href="/thread/post/plants_comments/22755/" class="userlink">Reply to this comment</a></div>
      </li></ul></div>
<table class="table table-striped table-bordered table-hover caption-top pretty-table">
  <caption>Plant Events from our members</caption>
 <tbody>  <tr>
    <td data-th=""><a href="/users/profile/antsinmypants">antsinmypants</a></td>
    <td data-th="">On May 12, 2022</td>
    <td data-th="">Transplanted<BR><i>Into Garden Two </i></td>
  </tr>
  <tr>
    <td data-th=""><a href="/users/profile/antsinmypants">antsinmypants</a></td>
    <td data-th="">On March 17, 2022</td>
    <td data-th="">Plant emerged<BR><i>All 4 seedlings have emerged.</i></td>
  </tr>
  <tr>
    <td data-th=""><a href="/users/profile/antsinmypants">antsinmypants</a></td>
    <td data-th="">On March 16, 2022</td>
    <td data-th="">Plant emerged<BR><i>3 seedlings emerged.</i></td>
  </tr>
  <tr>
    <td data-th=""><a href="/users/profile/antsinmypants">antsinmypants</a></td>
    <td data-th="">On March 13, 2022</td>
    <td data-th="">Seeds sown<BR><i>Indoors under lights on heat mat.<br>
<br>
4 seeds.</i></td>
  </tr>
 </tbody></table><a href="/plants/propose/event_report/591044/" class="userlink">&raquo; Post your own event for this plant</a><P><P><P><div class="card  mb-2"><ul class="list-group list-group-flush align-middle"><li class="list-group-item pt-2"><B>Adding Actions:</B></li><li class="list-group-item pt-2"><a href="/plants/propose/ajax_photo/591044/" class="userlink">&raquo; Upload a photo</a></li><li class="list-group-item pt-2"><a href="/plants/add_comment.php?pid=591044" class="userlink">&raquo; Post a comment</a></li><li class="list-group-item pt-2"><a href="/plants/propose/event_report/591044/" class="userlink">&raquo; Add an event report</a></li></ul></div><P><a href="/plants/propose/new_plant/" class="userlink">&laquo; Add a new plant to the database</a><P>&raquo; Search the Tomatoes Database: <a href="/plants/group/tomatoes/search/">by characteristics</a> or <a href="/plants/search/cultivar/?ppid=77653">by cultivar name</a><P><a href="/plants/view/77653/Tomatoes-Solanum-lycopersicum/">&laquo; See the general plant entry for Tomatoes (<i>Solanum lycopersicum</i>)</a><P><a href="/plants/group/tomatoes/">&laquo; The Tomatoes Database Front Page</a><P><a href="/plants/">&laquo; The Plants Database Front Page</a></div></div></div><div id="atpfooter"><div class="container"><div class="row"><div class="col font120">
            <a href="/">Garden.org Homepage</a><p>
            <a href="/help/">Help using the site</a><P>
            <a href="/about/">About</a><P>
            <a href="/about/contact/">Contact</a><P>
            <a href="/about/tos/">Terms of Service</a><P>
            <a href="/about/privacy/">Privacy</a><P>
            <a href="/users/memberlist/">Memberlist</a><P>
            <a href="/special/acorns/">Acorns</a><P>
            <a href="/about/links/">Links</a><P>
            <a href="/apps/ask/">Ask a Question</a><P>
            <a href="/getstarted/">Getting Started Gardening</a><P>
            <a href="/newsletter/">Newsletter</a><P>
            
            <p>&copy; 1972 - 2022 <a href="/">National Gardening Association</a><p>
    Times are presented in US Central Standard Time<p></div><div class="col font120">
      <a href="https://www.pinterest.com/ngagrows/">Pinterest</a><P>
      <a href="https://www.facebook.com/Garden.Org/">Facebook</a><P>
      <a href="https://www.youtube.com/user/nationalgardening">Youtube</a><P>
      <a href="https://twitter.com/NatlGardening">Twitter</a><P>
      <a href="https://www.instagram.com/nationalgardeningassoc/">Instagram</a><P>
      <a href="https://linkedin.com/company/gardenorg/">Linkedin</a><P>
    </div><div class="col">Today's site banner is by <a href="/users/profile/chhari55/">chhari55</a> and is called "<a href="/thread/go/166649/">Grasshopper on adenium</a>"<p><P>This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</div></div></div></div><script src="/i/js/bootstrap.5.1.3.bundle.min.js" defer></script>
  <div class="modal fade" id="ModalNGAView" tabindex="-1" aria-labelledby="myNGAViewModalLabel">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="myNGAViewModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="/i/icon/loading.gif" alt="Loading...">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </body></html>
`