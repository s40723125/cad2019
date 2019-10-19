var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每周進度', 'text': '學員出席 (10%) \n 個人倉儲與網站查驗 (20%) \n Task1: 參數式繪圖軟體 Solvespace 編譯、零組件繪圖與應用 (10%) \n Task2: MCAD 套件安裝與設定, 零組件繪圖、轉檔與 CAE 工程分析 (10%) \n Task3:\xa0 Rover 零組件轉入 \xa0 V-rep \xa0 與 \xa0 Webots \xa0 執行機電控制系統設計 (20%) \n Project:\xa0 機電資整合分組專案執行 (30%) \n 評分方式: \n 電腦輔助設計實習每週自評與互評表單: \xa0 https://forms.gle/raTtrfjv8cMMVSZd6 \xa0 \n 教學方式: \n 課堂講授 \n 操作錄影 \n 學員實習 \n 分組報告 \n 參考資料: \n https://open.umn.edu/opentextbooks/subjects/engineering \xa0 \n', 'tags': '', 'url': '每周進度.html'}, {'title': 'week4', 'text': '建立網站 \n 下載 2019Fall可攜套件.7z \n 相關指令 \n git submodule add 網址 \n python -m pip install flask_cors \n git config --global http.proxy [2001:288:6004:17::17]:3128 . \n', 'tags': '', 'url': 'week4.html'}, {'title': 'week5', 'text': '操作步驟 http://mde.tw/cad2019/content/Solvespace%20%E7%B7%A8%E8%AD%AF.html \n \n 實際操作 Solvespace \n http://mde.tw/cad2019/content/Solvespace%20%E6%93%8D%E4%BD%9C.html \n \n', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '繪製solvespace 之後匯出stl(格式是 Binary\xa0STL ) \n 在將 Solvespace 轉出的 Binary STL 零組件轉為 ASCII STL 程式碼 \n 網站 http://mde.tw/cad2019/content/STL.html \n <iframe width="600" height="400" src=" 你的檔案位置\xa0 \xa0 "></iframe> \n \n', 'tags': '', 'url': 'week6.html'}, {'title': 'stl', 'text': '放置STL操作過程 \n', 'tags': '', 'url': 'stl.html'}]};