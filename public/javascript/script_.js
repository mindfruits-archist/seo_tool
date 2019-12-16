
function startPreviewURL(e){
  //let url = e.url.value.replace('http://','').replace('https://','')
  let url = encodeURIComponent(e.url.value)
  $.ajax({url: "/seo-tools/meta-optimizer/getmetadata/"+url, success: function(result){
    //REMPLIR LES META DONNEE
    $('#input-title').val(result.title)
    $('#input-url').val(result.source)
    $('#input-metades').val(result.description)
    startPreview()
    // $('#res-title').html(result.title)
    // $('#res-url').html(result.source)
    // $('#res-metades').html(result.description)
    $('#seo_meta_datas').addClass('opacity')
    $('#seo_meta_datas input').click(()=>{$('#seo_meta_datas').removeClass('opacity')})

    //REMPLIR LE TABLEAU DE STATS
    let font = "30px arial,sans-serif"
    $('#titlechar').html(result.title.length)
    let titleTmp = 62 - result.title.length < 0 ? (result.title.length - 62) : 0
    if(titleTmp > 0) $('#titlechardisplayed').html(62)
    else $('#titlechardisplayed').html(result.title.length)
    $('#titlechartruncated').html(titleTmp)
    let titlePixelTmp = parseInt(getTextWidth(result.title).toFixed(0))
    $('#titlepixels').html(titlePixelTmp)
    let titlePixelTmpRemaning = titlePixelTmp - 500 < 0 ? (500 - titlePixelTmp) : 0
    $('#titlepixelsremaining').html(titlePixelTmpRemaning)
    if(titlePixelTmpRemaning >= 0 && titlePixelTmpRemaning > 0) $('#statuschars').addClass('success')
    else $('#statuschars').addClass('fail')

    $('#snippetchar').html(result.description.length)
    let descTmp = 145 - result.description.length < 0 ? (result.description.length - 145) : 0
    if(descTmp > 0) $('#snippetchardisplayed').html(145)
    else $('#snippetchardisplayed').html(result.description.length)
    $('#snippetchartruncated').html(descTmp)
    let descPixelTmp = parseInt(getTextWidth(result.description).toFixed(0))
    $('#snippetpixels').html(descPixelTmp)
    let descPixelTmpRemaning = descPixelTmp - 930 < 0 ? (930 - descPixelTmp) : 0
    $('#snippetpixelsremaining').html(descPixelTmpRemaning)
    if(descPixelTmpRemaning >= 0 && descPixelTmpRemaning > 0) $('#statuspixels').addClass('success')
    else $('#statuspixels').addClass('fail')

    //SCROLL EN BAS DE PAGE
    window.scrollTo(0,document.body.scrollHeight);
  },error: function (jqXhr, textStatus, errorMessage) { // error callback
    console.log("okok");
    console.log(jqXhr);
    console.log(textStatus);
    console.log(errorMessage);
  }});
}
