$.ajax(window.location.href).done(res => {
  let dom = $.parseHTML(res.substr(res.indexOf('class="ndArticle_margin')))[1]
  let title = $('.ndArticle_leftColumn>hgroup')
  $('.ndArticle_leftColumn')
    .empty()
    .append(title)
    .append(dom)
})
