<!DOCTYPE>
<html>
    <head>
        <title>作品集</title>
	<meta http-equiv="content-type" content="text/html" charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="js/jquery-2.1.1.min.js"></script>
        <script src="js/main.js"></script>
	<script src="http://masonry.desandro.com/masonry.pkgd.min.js"></script>
	<script src="http://imagesloaded.desandro.com/imagesloaded.pkgd.min.js"></script>
	<script src="js/waterfall.js"></script>
     </head>
    <body>
        <div id="main-wrapper">
            <div id="header">
                <div id="menu">
                    <ul>
			<li id="classA" class="menu-li">茄子女孩X創意工作室</li>
                        <li id="classB" class="menu-li">茄子女孩X小漫畫</li>
                        <li id="all-work" class="menu-li">光明專屬X奪目設計</li>
                    </ul>
                </div>
            </div>
            <div id="side-bar">
                <ul>
                    <div id="close-button">
                        <img src="http://s3.amazonaws.com/codecademy-content/courses/ltp2/img/uber/close.png">
                    </div>
                    <button id="menu-button">Menu</button>
                    <a href="index.html"><li class="side-bar-li">首頁</li></a>
                    <a href="about-me.html"><li class="side-bar-li">關於我</li></a>
                    <a href="works.html"><li class="side-bar-li">作品集</li></a>
                    <a href="mini-movie.html"><li class="side-bar-li">微電影</li></a>
                    <a href="contact-me.html"><li class="side-bar-li">連絡我</li></a>
                </ul>
            </div>
            <div id="works-content">
                <div id="main-frame">    
<?php
	$pic = glob('./pic/work/*/*');
	shuffle($pic);
	for( $i = 0; $pic[$i]; $i++) {
		$catogary = split("/",$pic[$i])[3];
		echo "<div class=\"item " . $catogary . "\"><img src=\"pic/" . str_replace("./pic/","",$pic[$i]) . "\"></img></div>";
	}
?>
                </div>
                <div id="nav-bar">                
                </div>
            </div>
            <div id="footer">
            </div>
        </div>
    </body>
</html>
