<?php

/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simply to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */

// DB table to use
$table = 'tblResponses';

// Table's primary key
$primaryKey = 'tblResponses_id';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array(
        'db'        => 'tblResponses_datetime',
        'dt'        => 0,
        'formatter' => function( $d, $row ) {
            return date( 'd/m/y h:i:s A', strtotime($d));
        }
    ),
    array( 'db' => 'tblResponses_drink', 'dt' => 1 ),
    array( 'db' => 'tblResponses_rating',  'dt' => 2 ),
    array( 'db' => 'tblResponses_age',     'dt' => 3 ),
    array( 'db' => 'tblResponses_gender',     'dt' => 4 ),
    array( 'db' => 'tblResponses_useragent',     'dt' => 5 ),
    array( 'db' => 'tblResponses_device',     'dt' => 6 ),
    array( 'db' => 'tblResponses_ip',     'dt' => 7 )
);

// SQL server connection information
$sql_details = array(
    'user' => base64_decode("bWl0Y2g5NzBfY2Jldnk="),
    'pass' => base64_decode("IWNoZWVreWJldnkxMjM="),
    'db'   => base64_decode("bWl0Y2g5NzBfY2hlZWt5ZmVlZGJhY2s="),
    'host' => 'localhost'
);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */

require( 'ssp.class.php' );

echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);
