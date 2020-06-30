var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'Week1~5', 'text': 'Week1  \n 建立個人倉儲cd2020並編譯個人網站 \n 1.將 2019Fall可攜套件.7z 下載到USB內並進行解壓縮 \n 2.進入 Github \xa0 ， 創建一個新的倉儲,命名為cd2020 \n 3.進入儲存的資料夾tmp \n 4.git clone  https://github.com/s40723225/cd2020 \n 5. 4.git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 6.進入cmsimde， 下載附件 python -m pip install flask_cors \n 7. 輸入 python wsgi.py 編輯倉儲 \n 8.編輯完成後git status->git add .->git commit -m "該作業內容"->git push \n \n Week2  \n 更新python3.8.2 \n 1.在隨身系統新增一個新資料夾cd20，並在cd20下新建資料夾data，接著在data下新增資料夾py382及wscite432、portablegit \n 2. 進入 Python 官網，並點選Downloads的 Windows ，再點選 Latest Python 3 Release - Python 3.8.2 \n 3.拉至底部，找到 Windows x86-64 executable installer 並下載 \n 4.開始下載，將pip選項取消打勾，按下next並將檔案下載至資料夾py382 \n 5.下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432 \n 6.建立新的start.bat以及stop.bat \n start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n 7.下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data資料夾 \n 8.下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0 portablegit資料夾 \n 9.在Y槽中執行 python get-pip.py安裝pip軟件 \n 10.完成後，安裝軟件包，輸入python pip install Flask \n \n Week3 \xa0 \n 學習歷程Week1~3 \n 我的影片 \n \n Week4   \n 自主學習 \n 弄好前三周老師的要求以及複習進度 \n \n Week5 \n', 'tags': '', 'url': 'Week1~5.html'}, {'title': 'Week6~9', 'text': "Week6 \n 利用OBS錄製影片以及Assignment2作業翻譯 \n 1.下載Windows版OBS \n 2. OBS下載網址: https://obsproject.com/download \n 3.新增顯示器的畫面以及錄製螢幕 \n 利用OBS與Youtube直播串流 \n 1.進入youtube開始直播，設定好後會產生串流金鑰 \n 2.接著開啟OBS點右下角的開始串流，或是進入設定找到串流介面 \n 3.進到串流設定介面後，把服務位址改成Youtube，後複製Youtube直播設定介面產生的串流金鑰，貼上至OBS的串流金鑰裡 \n 4.完成串流金鑰設定之後即可點擊Youtube右上角開始直播 \n Assignment2-topic翻譯 \n 連結： https://drive.google.com/file/d/1YHQwYduSMisiJQS-\xa0 Jr_HhJghzIqP_SBc/view \n \n Week7 \n 更新V rep \n 1.進入CoppliaSim 官方網站: https://www.coppeliarobotics.com/ \n 2.進入download 下載教育版 \n 3.下載 CoppeliaSim Edu Binaries 可攜版本 \n 4.完成後即可刪除原本的V rep \n 操控四輪車 \n 1.匯出四輪車 \n 2.調整馬達功率 \n 3..檢查碰撞係數 \n 4.匯入程式 \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n \n \n \n function sysCall_init()  \n \xa0\xa0\xa0\xa0 left_front_handle =   sim.getObjectHandle( 'left_motor' ) \n \xa0\xa0\xa0\xa0 left_back_handle =   sim.getObjectHandle( 'left_motor' ) \n \xa0\xa0\xa0\xa0 right_back_handle =   sim.getObjectHandle( 'right_motor' ) \n \xa0\xa0\xa0\xa0 right_front_handle =   sim.getObjectHandle( 'right_motor' ) \n \xa0\xa0\xa0\xa0 MaxVel = 2 \n \xa0\xa0\xa0\xa0 leftvelocity = 0 \n \xa0\xa0\xa0\xa0 rightvelocity = 0 \n \xa0\xa0\xa0\xa0 dVel = 0.5 ; \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(left_front_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(left_back_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(right_back_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(right_front_handle,rightvelocity) \n end \n \xa0 \n function sysCall_actuation()  \n \xa0\xa0\xa0\xa0 message,auxiliaryData = sim.getSimulatorMessage() \n \xa0\xa0\xa0\xa0 while   message~ = - 1   do \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (message = = sim.message_keypress) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (auxiliaryData[ 1 ] = = 32 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - -   right key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_front_handle,  0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_back_handle,  0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_back_handle,  0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_front_handle,  0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 break \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 else \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - sim.setJointForce(left_front_handle,  10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_back_handle,  10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_back_handle,  10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - sim.setJointForce(right_front_handle,  10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (auxiliaryData[ 1 ] = = 2007 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - -   up key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = (leftvelocity + rightvelocity) / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = leftvelocity \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (auxiliaryData[ 1 ] = = 2008 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - -   down key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = (leftvelocity + rightvelocity) / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = leftvelocity \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (auxiliaryData[ 1 ] = = 2009 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - -   left key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (auxiliaryData[ 1 ] = = 2010 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - -   right key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 message,auxiliaryData = sim.getSimulatorMessage() \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if   leftvelocity>MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 if   leftvelocity< - MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = - MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if   rightvelocity>MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 if   rightvelocity< - MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = - MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(left_front_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(left_back_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(right_back_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(right_front_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 \xa0 \n end \n \n \n \n \n \n Week8 \n Python remote api 環境配置 安裝模組: 1.pip install opencv-python 2.pip install imutils 3.pip install numpy \n 解決python 3.8.2版本leo閃退問題 1.輸入pip list，檢查leo版本是否為6.1版本(是的話即輸入pip uninstall leo 將此版本刪除) 2.接著輸入pip install leo==6.2.1指定leo 6.2.1版本，即可正常運作。 \n V-rep更新至最新版本 \n 官方網站: https://www.coppeliarobotics.com/ 可攜版: CoppeliaSim Edu, Binaries \n Week9 \n 期中考報告繳交 \n \n 老師與組長開會, 開放 live streaming, 回答與課程相關問題. \n 要求所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容. \n 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入 @gm 帳號的用戶都可以觀看. \n 完成上述影片共享設置後, 請登入 @gm 個人帳號, 至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄. \n 完成上述各步驟後, 將繼續進行線上課程之其他內容直播或錄影 \n \n 我的期中個人報告 \n https://drive.google.com/file/d/1KlOSfQQrVudcDsC9Jaq6Lnb_OSi0LQ8E/view \n", 'tags': '', 'url': 'Week6~9.html'}, {'title': 'Week 10~14', 'text': 'Week10 \n 1.先git clone cd2020pj1的倉儲 \n 2.進入Google API \n 3.點選建立專案，輸入專案名稱，然後建立 \n 4. 點選啟用，並點選憑證及設定同意畫面 \n 5. 輸入名稱，接著存儲並設定憑證 \n 6. 點選建立憑證及OAuth用戶端ID \n 7. 將ID及密碼複製到編輯器，命名為oauth_s學號.txt 並存儲在tmp下 \n 8.接著設定來源跟URL，點選新增URL並授權JavaScriptipt來源下輸入https://localhost:8443及授權的重新定向URL輸入https://localhost:8443/login/google/，接著存儲 \n 9.開啟leo，並打開cd2020pj1.leo，並將路徑以及名稱改為自己設定的 \n 10.完成後存取，並點選ROC \n 11.接著輸入pip install authomatic，進入pj1，打開wsgi.py即完成 \n \n Week11 \n 1.下載 vitualbox 、 ubuntu 、 CoppeliaSim 四輪車控制器檔案 \n 2.開啟vitualbox，匯入ubuntu \n 3.設定虛擬主機的網路埠號。[NET:設定->網路->附加到(A)改成NAT->進階->連接埠轉送->設定三個埠號(22、8443、19999)] \n 4.設定完成後啟動ubuntu \n 5.輸入密碼kmol2020，開啟lxterminal \n 6.輸入xterm&並開啟，使用ctrl+右鍵將視窗放大 \n 7.依照步驟打開coppeliasim，輸入ls查看內容 \n 8.cd coppeliasim4_rev4->ls->cd CoppeliaSim_Edu_v4_0_0_Ubuntu18_04->ls->./coppeliaSim.sh \n 9.開啟後打開檔案sdc.ttt，並開啟下載好的CoppeliaSim四輪車控制器檔案 \n 10.將檔案中的car_model.py放入編譯器中，打開CoppeliaSim中的模擬，四輪車開始繞圈即完成。 \n \n Week12 \n IPv4 Ubuntu 對外連線 \n 1.新增一個新的NAT網路 \n 2.編輯此網路，並點選連接 埠轉送，再新增4個連接埠轉送埠號 \n 3.設定主機IP為 127.0.0.1 ；客體IP為 10.0.2.4 ；主機連接埠為 22、19999、17443、18443 ；客體連接埠為 22、19999、7443、8443 \n 4.設定主機網路為NAT Network，完成後啟動輸入密碼kmol2020 \n 5.開啟LXTermial，輸入 ifconfig再輸入 sudo apt install net-tools，接著輸入密碼kmol2020 \n 6.cd tmp->ls->輸入ping 127.0.0.1測試->cd cd2020pj1->git pull \n 7.輸入sudo vi wsgi.py 編輯內容，按 i 進行編輯 \n 8.將近端host改為10.0.2.4，按Esc輸入:wq編輯 \n 9.開啟leo打開cd2020pj1.leo，點選Nav搜尋allowExt \n 10.點選fileuploadfrom，將第10行新增一個ttt檔，完成後存儲並關閉leo \n 11.在tmp下新增oauth_scrum.txt，輸入 sudo vi oauth_scrum.txt \n 12.按 i 編輯，內容隨意輸入，接著按 Esc 並輸入 :wq 存儲 \n 13.cd cd2020pj1，並輸入 python3 wsgi.py 啟動，網址為https:/127.0.0.1:18443/alogin \n 14.帳號密碼為 admin ，進入後點選fileuploadform，點選要上傳的ttt檔 \n 15.選download list檢查檔案是否上傳完成 \n W12-3抽點網站： http://mde.tw/cdbw12-3/content/Week1.html \n W12-3抽點倉儲： https://github.com/mdecourse/cdbw12-3 \n \n Week13 \n \n \n', 'tags': '', 'url': 'Week 10~14.html'}, {'title': 'Week15~18', 'text': '', 'tags': '', 'url': 'Week15~18.html'}]};