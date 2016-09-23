$(function() {
  $('#results table').DataTable( {
      "processing": true,
      "serverSide": true,
      "ajax": "../results/get_results.php",
      dom: 'Bfrtip',
      buttons: [
            'excelHtml5',
            'pdfHtml5'
        ]
  } );

});
