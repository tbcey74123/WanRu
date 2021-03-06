<!DOCTYPE html>
<html>
    <head>
        <title>EGGPLANT CHICA</title>
    <meta http-equiv="content-type" content="text/html" charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="js/jquery-2.1.1.min.js"></script>
        <script src="js/main.js"></script>
	<script src="js/ParallelScrolling.js"></script>
	<script src="js/jquery.backgroundpos.js"></script>
    </head>
    <body>
        <div id="main-wrapper">
            <div id="top-sidebar">
                <img src="media/pics/Icons/FrontPageIcons/about1.png"></img>
                <p id="top-sidebar-text">EGGPLANT CHICA</p>
            </div>
            <div id="welcome-page" class="page">
                <div id="welcome-page-content" class="content-wrapper">
                    <div id="welcome-image">
                        <img src="media/pics/Icons/FrontPageIcons/chica.png"></img>
                        <h1>WELCOME</h1>
                    </div>
                    <div id="shortcuts">
                        <div class="shortcut hvr-bob" id="shortcut-about">
                            <img src="media/pics/Icons/FrontPageIcons/about.png"></img>
                        </div>
                        <div class="shortcut hvr-bob" id="shortcut-experience">
                            <img src="media/pics/Icons/FrontPageIcons/EXPERIENCE.png"></img>
                        </div>
                        <div class="shortcut hvr-bob" id="shortcut-works">
                            <img src="media/pics/Icons/FrontPageIcons/works.png"></img>
                        </div>
                        <div class="shortcut hvr-bob" id="shortcut-contact">
                            <img src="media/pics/Icons/FrontPageIcons/contact.png">
                        </div>
                    </div>
                    <div id="welcome-page-footer"></div>
                </div>
            </div>
            <div id="about-page" class="page">
                <div id="about-page-title" class="page-title">
                    <h1>ABOUT</h1>
                </div>
                <div id="about-page-content" class="content-wrapper">
                    <div id="about-text">
                        <p style="font-weight:bold;line-height:2em;">Hi!我是茄子女孩</p>
                        <p>我喜歡筆尖與白紙摩擦的溫暖</p>
                        <p>喜歡每個因為我的作品而發自內心的微笑</p>
                        <p>所以一頭栽進了這個異想世界</p>
                        </br>
                        <p>在過去的10年的設計生涯中，我專注於平面設計</p>
                        <p>包含名片、海報、酷卡、LOGO、T-SHIRT、插畫等超過130件作品</p>
                        </br>
                        <p>你想要和會展現生命力及色彩明亮的作品一起合作嗎？</p>
                        <p>來吧！一起創造無限可能的美麗！</p>
                    </div>
                </div>
            </div>
            <div id="experience-page" class="page">
                <div id="experience-page-title" class="page-title">
                    <h1>EXPERIENCE</h1>
                </div>
                <div id="experience-page-content" class="content-wrapper">
		    <div id="experience_map">
		    	<div id="experience_filter"></div>
		    </div>
                </div>

            </div>
            <div id="works-page" class="page">
                <div id="works-page-title" class="page-title">
                    <h1>WORKS</h1>
                </div>
                <div id="works-page-content" class="content-wrapper">
                    <div id="works-page-menu">
                        <ul>
                            <li id="Card-design">CARD</li>
                            <li id="Poster-design">POSTER</li>
                            <li id="T-shirt-design">T-SHIRT</li>
                            <li id="Cover-design">FRONT COVER</li>
                        </ul>
                    </div>
                    <div id="works-page-preview">
<?php
	$pic = glob('./media/pics/EggplantInnovationWorkshop/*/*/*.jpg');
	shuffle($pic);
        	for($i = 0; $pic[$i]; $i++) {
                	$catogary = split("/", $pic[$i])[4];
                	echo "<div class=\"item " . $catogary . "\"><img src=\"media/" . str_replace("./media/","",$pic[$i]) . "\"></img></div>";
        	}
?>

                    </div>
                    <div id="works-page-clearlook">
                    </div>
                </div>
            </div> 
            <div id="contact-page" class="page">
                <div id="contact-page-title" class="page-title">
                    <h1>CONTACT</h1>
                </div>
                <div id ="contact-page-content" class="content-wrapper">
                    <form>
                        <label>NAME</label>
                        <input type="text" id="contact-name" placeholder="您的大名" required>
                        <br/><br/>
                        <label>EMAIL</label>
                        <input type="text" placeholder="電子郵件" id="contact-information" required>
                        <br/><br/>
                        <label>PROJECT</label>
                        <textarea type="text"  id="contact-content" placeholder="您想要合作什麼案子呢？"></textarea>
                        </br>
                        <input id="submit" type="submit" value="送出">
                    </form>
                </div>
                <div id="contact-page-footer">
                    <div id="contact-page-footer-google-and-fb">
                        <img id="contact-gmail" src="media/pics/Icons/FrontPageIcons/gmail.png">
                        <img id="contatc-fb" src="media/pics/Icons/FrontPageIcons/fb.png">    
                    </div>
                    <div id="contact-page-footer-links">
                        <p>| ringingcat109@gmail.com | www.facebook.com/EggplantChica | 0980-189-103 |</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
