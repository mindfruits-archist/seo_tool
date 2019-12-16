
function startPreview() {
  var seoTitle = document.getElementById("input-title").value;
  var seoUrl = document.getElementById("input-url").value;
  var seoMetades = document.getElementById("input-metades").value;

  // Vérification de la longueur du title
  if(seoTitle.length>0) {
    if(seoTitle.length>71) {
      document.getElementsByClassName("res-title")[0].innerText = seoTitle.slice(0,70) + "...";
    } else {
      document.getElementsByClassName("res-title")[0].innerText = seoTitle;
    }
  }

  // Vérification de la longueur de la meta-description
  if(seoMetades.length>0) {
    if(seoMetades.length>152) {
      document.getElementsByClassName("res-metades")[0].innerText = seoMetades.slice(0,152) + "...";
    } else {
      document.getElementsByClassName("res-metades")[0].innerText = seoMetades;
    }
  }

  // Ajout de l'URL
  if(seoUrl.length>0) {
    document.getElementsByClassName("res-url")[0].innerText = seoUrl;
  }

  if(seoMetades.length>0 || seoTitle.length>0) {
    evaluateContent(seoTitle, seoUrl, seoMetades);
  }
}

function evaluateContent(seoTitle, seoUrl, seoMetades) {
  var alertFormat = ["⚠️", "#EA9757"];
  var stopFormat = ["🛑", "#EB6F62"];
  var okFormat = ["✅", "#16C60C"];
  var contentScore = 0;

  var recommandations = "";

  if(seoTitle.length<60) {
    recommandations = recommandations + '<li style="color:' + alertFormat[1] + ';">' + alertFormat[0] + ' Le title est trop court (' + seoTitle.length + " caractères)</li>";
  } else {
    if (seoTitle.length>71) {
      recommandations = recommandations + '<li style="color:' + stopFormat[1] + ';">' + stopFormat[0] + ' Le title est trop long (' + seoTitle.length + " caractères)</li>";
    } else {
      recommandations = recommandations + '<li style="color:' + okFormat[1] + ';">' + okFormat[0] + ' Le title a une longueur correcte (' + seoTitle.length + " caractères)</li>";
      contentScore += 50;
    }
  }

  if(seoMetades.length<140) {
    recommandations = recommandations + '<li style="color:' + alertFormat[1] + ';">' + alertFormat[0] + ' La meta-description est trop courte (' + seoMetades.length + " caractères)</li>";
  } else {
    if (seoMetades.length>160) {
      recommandations = recommandations + '<li style="color:' + stopFormat[1] + ';">' + stopFormat[0] + ' La meta-description est trop longue (' + seoMetades.length + " caractères)</li>";
    } else {
      recommandations = recommandations + '<li style="color:' + okFormat[1] + ';">' + okFormat[0] + ' La meta-description a une longueur correcte (' + seoMetades.length + " caractères)</li>";
      contentScore += 50;
    }
  }

  document.getElementById("recommandations-placeholder").innerHTML = 	'<div style="background-color: #FFFFFF;height: 200px;width: 100%; margin-top: 20px;margin-bottom: 20px;padding: 20px;"><p>Notre avis :</p><ul> ' + recommandations + '</ul></div>';
  document.getElementById("score-result").innerText = contentScore + '/100';

  if(contentScore<50) {
    document.getElementById("score-result").style = "color:" + stopFormat[1] + ";font-weight:bold; font-size:100px;";
  } else {
    if(contentScore>80) {
      document.getElementById("score-result").style = "color:" + okFormat[1]  + ";font-weight:bold; font-size:100px;";
    } else {
      document.getElementById("score-result").style = "color:" + alertFormat[1] + ";font-weight:bold; font-size:100px;"
    }
  }
}
/*
  $('html, body').animate({
    scrollTop: $("div#recommandations-placeholder").offset().top
  }, 2000);
  */
