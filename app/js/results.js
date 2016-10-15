$(function() {
  $('#results table').removeAttr('width').DataTable( {
      processing: true,
      serverSide: true,
      ajax: "../results/get_results.php",
      dom: 'Bfrtip',
      buttons: [
            'excelHtml5',
            'pdfHtml5'
        ],
      columnDefs: [
        { width: 200, targets: 5 }
      ],
      fixedColumns: true,
      scrollX: true
  } );

});
