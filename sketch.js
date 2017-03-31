<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>The Algae Project</title>

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="libraries\bootstrap.min.css">
	<link rel="shortcut icon" href="imgs\favicon.ico" type="image/x-icon"/>
	<link href="https://fonts.googleapis.com/css?family=Inconsolata:700|Lobster" rel="stylesheet">

	<script language="javascript" type ="text/javascript" src="libraries\matter.js"></script>
  <script language="javascript" type="text/javascript" src="libraries\p5.min.js"></script>
	<script language="javascript" type="text/javascript" src="sketch.js"></script>
  <script language="javascript" type="text/javascript" src="cell.js"></script>
  <script language="javascript" type="text/javascript" src="boundary.js"></script>
	<script language="javascript" type="text/javascript" src="flask.js"></script>
	<script language="javascript" type="text/javascript" src="sun.js"></script>
	<script language="javascript" type="text/javascript" src="water.js"></script>


</head>

<style type="text/css">

	html, body {
		background: url(#) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;

		background-color: #ECF0F1;
	}

	.nav-links {
		font-family: cursive;
		position: absolute;
    bottom: 8%;
    left: 6%;
    z-index: 100;
	  font-size: 1.2em;
	}

	.nav-links a,
	.nav-links a:link,
	.nav-links a:visited,
	.nav-links a:active,
	.nav-links a:hover {
			font-family: serif;
	    color: #333333;
	    text-decoration: none;
	    border-bottom: 1px solid #333333;
	    padding: 6px 0 2px 0;
			margin: 10px;
	}

</style>

<body>
	<div class="nav-links">
		<a href="index.html">home</a>
		<span class="spacer">&middot;<span>
		<a href="https://github.com/typio/TheAlgaeProject">code</a>
	</div>
</body>
</html>
