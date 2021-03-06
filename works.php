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
	    <div id="side-bar">
		<div id="open" class="menu-button"></div>
		<div id="close" class="menu-button"></div>
	        <div id="side-bar-menu">
		    <ul>
			<li><div class="menu-icon-div"><a href="index.html"><img src="media/pics/Icons/MenuIcons/LeftSideMenuIcons/into_2.png" /></a></div></li>
			<li><div class="menu-icon-div"><a href="about-me.html"><img src="media/pics/Icons/MenuIcons/LeftSideMenuIcons/about_2.png" /></a></div></li>
			<li><div class="menu-icon-div"><a href="experience.html"><img src="media/pics/Icons/MenuIcons/LeftSideMenuIcons/experience_2.png" /></a></div></li>
			<li><div class="menu-icon-div"><img src="media/pics/Icons/MenuIcons/LeftSideMenuIcons/works_2.png" /></div></li>
			<li><div class="menu-icon-div"><a href="mini-movie.html"><img src="media/pics/Icons/MenuIcons/LeftSideMenuIcons/movie_2.png" /></a></div></li>
			<li><div class="menu-icon-div"><a href="contact-me.html"><img src="media/pics/Icons/MenuIcons/LeftSideMenuIcons/contact_2.png" /></a></div></li>
	             </ul>
		</div>
		<div id="side-bar-bottom">
		    <ul><li>
			<img src="media/pics/Icons/MenuIcons/LeftSideMenuIcons/www.png"></img>
		    </li></ul>
		</div>
	    </div>
            <div id="header">
                <div id="menu">
                    <ul>
			<li id="Card-design" class="menu-li">卡片設計</li>
                        <li id="Cover-design" class="menu-li">封面設計</li>
			<li id="Poster-design" class="menu-li">海報設計</li>
			<li id="T-shirt-design" class="menu-li">衣服設計</li>
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
                    <a href="about-me.html"><li class="side-bar-li">關於茄子</li></a>
                    <a href="works.php"><li class="side-bar-li">作品集</li></a>
                    <a href="mini-movie.html"><li class="side-bar-li">微電影</li></a>
                    <a href="contact-me.html"><li class="side-bar-li">連絡茄子</li></a>
                </ul>
            </div>
	    <div id="tmp"><img></img></div>
	    <div id="display-div">
		<div id="display"><img></img></div>
            </div>
            <div id="works-content">
                <div id="main-frame">    
<?php
$pic = glob('./media/pics/EggplantInnovationWorkshop/*/*/*.jpg');
shuffle($pic);
	for( $i = 0; $pic[$i]; $i++) {
		$catogary = split("/",$pic[$i])[4];
		echo "<div class=\"item " . $catogary . "\"><img src=\"media/" . str_replace("./media/","",$pic[$i]) . "\"></img></div>";
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
