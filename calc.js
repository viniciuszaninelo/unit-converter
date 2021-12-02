

  $(function(){
    $('#calc').click(function(){
      const milhas = parseFloat($('#milhas').val())
      const metros = 1609.34 * milhas
      $('#metros').val(metros)
    })
  })


/*   $(function(){
    $('#calc').click(function(){
      const metros = parseFloat($('#metros').val())
      const milhas = 1609/metros
      $('#milhas').val(milhas)
    })
  }) */