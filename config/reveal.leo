<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2"><vh>@path ./../reveal</vh>
<v t="leo.20180902120523.3"><vh>@clean index.html</vh>
<v t="leo.20180902120523.4"><vh>html</vh>
<v t="leo.20180902120523.5"><vh>head</vh></v>
<v t="leo.20180902120523.6"><vh>body</vh>
<v t="leo.20180902120523.7"><vh>reveal div</vh>
<v t="leo.20180902120523.8"><vh>slides div</vh>
<v t="leo.20180902120523.9"><vh>封面投影片</vh>
<v t="leo.20180902120523.10"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200701021256.1"><vh>封面投影片</vh>
<v t="leo.20200701021256.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200701021816.1"><vh>封面投影片</vh>
<v t="leo.20200701021816.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200701022419.1"><vh>封面投影片</vh>
<v t="leo.20200701022419.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200701023126.1"><vh>封面投影片</vh>
<v t="leo.20200701023126.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200701023559.1"><vh>封面投影片</vh>
<v t="leo.20200701023559.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200701024010.1"><vh>封面投影片</vh>
<v t="leo.20200701024010.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200701024254.1"><vh>封面投影片</vh>
<v t="leo.20200701024254.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20180902120523.11"><vh>快捷鍵</vh>
<v t="leo.20180902120523.12"><vh>投影片快捷鍵</vh></v>
</v>
<v t="leo.20180902120523.13"><vh>各式內容引用範例</vh>
<v t="leo.20180902120523.14"><vh>導入數學符號與方程式</vh>
<v t="leo.20180902120523.15"><vh>LaTeX 格式方程式</vh></v>
</v>
<v t="leo.20180902120523.16"><vh>導入縮排程式碼</vh>
<v t="leo.20180902120523.17"><vh>引用程式碼</vh></v>
</v>
<v t="leo.20180902120523.18"><vh>導入影片</vh>
<v t="leo.20180902120523.19"><vh>iframe 導入影片</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.10">## 40723225 CAD2020

### 機械設計工程系 協同產品設計與實習

&lt;small&gt;
Created by [40723225](http://lab.kmol.info/)
&lt;/small&gt;

[40723225 網誌](./../blog/index.html)


</t>
<t tx="leo.20180902120523.11">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120523.12"># 投影片快捷鍵

* 利用箭頭上下前後換頁
* 按 f 鍵進入全螢幕模式 (full screen)
* 按 s 鍵可以顯示投影片筆記 (show)
* 按 o 鍵可以切換單張或全域檢視 (overview)
* 按 b 或 . 鍵可以切換螢幕黑屏 (black)
* 按 Esc 可以退出全螢幕或全域檢視 (Escape)

</t>
<t tx="leo.20180902120523.13">&lt;section&gt;
@others
&lt;/section&gt;

</t>
<t tx="leo.20180902120523.14">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.15"># 數學符號與方程式

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$
</t>
<t tx="leo.20180902120523.16">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.17">## 利用 Markdown 寫投影片
以下利用 Markdown 格式展示 Python 程式碼:
```
@language python
# use threading and subprocess to threading the make process
import os
import subprocess
import threading

def domake():
    
    path = "../exposed/api/exposed"
    ubuntu = "../Ubuntu"
    
    # create obj path
    
    if not os.path.exists(path+"/../obj"):
        os.makedirs(path+"/../obj")
    
    subprocess.call(["make", "clean"], cwd=path)
    subprocess.call("make", cwd=path)
    subprocess.call(["cp", "{libslvs.so, _slvs.so, slvs.py}", ubuntu], cwd=path)
    subprocess.call(["python3", "circle_ex.py"], cwd=path+"/"+ubuntu)
    
make = threading.Thread(target=domake)
make.start()
```
</t>
<t tx="leo.20180902120523.18">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120523.19">## 使用 iframe 導入影片

### 導入影片 template

&lt;iframe src="https://player.vimeo.com/video/183950627" width="640" height="492" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt;
</t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120523.3">@language xml
@tabwidth -4
@others

</t>
<t tx="leo.20180902120523.4">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20180902120523.5">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
CMSimfly 網際內容管理
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="leo.20180902120523.6">&lt;body&gt;
@others
&lt;script src="lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'plugin/zoom-js/zoom.js', async: true },
                { src: 'plugin/notes/notes.js', async: true },
                { src: 'plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;

</t>
<t tx="leo.20180902120523.7">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.8">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.9">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20200701021256.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701021256.2">## Week10

1.先git clone cd2020pj1的倉儲2.進入Google API3.點選建立專案，輸入專案名稱，然後建立4.點選啟用，並點選憑證及設定同意畫面5.輸入名稱，接著存儲並設定憑證6.點選建立憑證及OAuth用戶端ID7.將ID及密碼複製到編輯器，命名為oauth_s學號.txt 並存儲在tmp下8.接著設定來源跟URL，點選新增URL並授權JavaScriptipt來源下輸入https://localhost:8443及授權的重新定向URL輸入https://localhost:8443/login/google/，接著存儲
9.開啟leo，並打開cd2020pj1.leo，並將路徑以及名稱改為自己設定的
10.完成後存取，並點選ROC
11.接著輸入pip install authomatic，進入pj1，打開wsgi.py即完成</t>
<t tx="leo.20200701021816.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701021816.2">## Week11

1.下載vitualbox、ubuntu、CoppeliaSim四輪車控制器檔案2.開啟vitualbox，匯入ubuntu3.設定虛擬主機的網路埠號。[NET:設定-&gt;網路-&gt;附加到(A)改成NAT-&gt;進階-&gt;連接埠轉送-&gt;設定三個埠號(22、8443、19999)]4.設定完成後啟動ubuntu5.輸入密碼kmol2020，開啟lxterminal6.輸入xterm&amp;並開啟，使用ctrl+右鍵將視窗放大7.依照步驟打開coppeliasim，輸入ls查看內容8.cd coppeliasim4_rev4-&gt;ls-&gt;cd CoppeliaSim_Edu_v4_0_0_Ubuntu18_04-&gt;ls-&gt;./coppeliaSim.sh9.開啟後打開檔案sdc.ttt，並開啟下載好的CoppeliaSim四輪車控制器檔案10.將檔案中的car_model.py放入編譯器中，打開CoppeliaSim中的模擬，四輪車開始繞圈即完成。


</t>
<t tx="leo.20200701022419.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701022419.2">## Week12

IPv4 Ubuntu 對外連線
1.開啟LXTermial，輸入ifconfig再輸入sudo apt install net-tools，接著輸入密碼kmol2020

2.cd tmp-&gt;ls-&gt;輸入ping 127.0.0.1測試-&gt;cd cd2020pj1-&gt;git pull

3.輸入sudo vi wsgi.py編輯內容，按i進行編輯

4.將近端host改為10.0.2.4，按Esc輸入:wq編輯

5.開啟leo打開cd2020pj1.leo，點選Nav搜尋allowExt

6.點選fileuploadfrom，將第10行新增一個ttt檔，完成後存儲並關閉leo</t>
<t tx="leo.20200701023126.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023126.2">## Week14

##IPv6遠端控制設定
1.點選IPv6內容，IPv6位址輸入2001:288:6004:17:2020:2::7225(2是乙班、7225為乙班25號)
2.5.啟動Ubuntu輸入密碼kmol2020，並開啟LXTermial進入cd2020pj1
3.輸入vi wsgi.py，將host改為個人主機IP(按i編輯，按Esc輸入:wq存儲)
4.在另一台主機開啟putty，輸入預連線主機IP，設定SSH下的X11(Enable X11 fowarding打勾並在X display location中輸入localhost:0.0)
5.進入tmp/cd2020pj1/docs/cmsimde，輸入python3 wsgi.py開啟遠端，網址為[該主機IP]:17443(必須關閉proxy)</t>
<t tx="leo.20200701023559.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023559.2">## Week15

FileZilla 虛擬主機文件共享設定
1.下載FileZilla，解縮到隨身系統中
2.啟動Ubuntu主機，確認虛擬主機的整體系統埠號並開啟putty
3.設定預連接IP為個人主機IP，在設定SSH中的X11，將Enable X11 fowarding打勾並在X display location中輸入localhost:0.0
4.存儲後開啟，並輸入帳密kmol2020
5.開啟FileZilla，點選檔案-&gt;站台管理員-&gt;新增站台個人主機IP
6.協定改為 SFTP-SSH，主機輸入個人主機IP及連接埠輸入22
7.將登入型式改為詢問密碼、使用者命名為kmol2020
8.設定完成後，點選連線，密碼輸入kmol2020，即完成文件共享</t>
<t tx="leo.20200701024010.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701024010.2">## Week16

1.修改IPv6網路設定及虛擬主機設定
2.開啟虛擬主機，帳號密碼為kmol2020
3.開啟Lxterminal，在tmp下clone個人倉儲
4.輸入ifconfig查詢IPv6的地址
5.進入cd2020/cmsimde，並輸入sudo vi wsgi.py,將host改為IPv6地址
6.完成後存儲，並輸入python3 wsgi.py啟動
7.輸入網址https://[2001:288:6004:17:2020:2:0:7225]:19443</t>
<t tx="leo.20200701024254.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701024254.2">## Week18

期末報告</t>
</tnodes>
</leo_file>
