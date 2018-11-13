(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"整理了一些常用的-git-命令清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整理了一些常用的-git-命令清单","aria-hidden":"true"}},[s._v("#")]),s._v(" 整理了一些常用的 Git 命令清单")]),s._v(" "),a("p",[s._v("[菜鸟要飞](javascript:void(0)😉 "),a("em",[s._v("今天")])]),s._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/5kkib9oAJf2aicvqrVemuPPF0aP7bJU34PLmj6icSEWrsOut1DN4CbibfvHVkrnEUYvDo89j24CQ1ia1tgDShT9KrZw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"img"}})]),s._v(" "),a("p",[s._v("原文：https://www.jianshu.com/p/f81eaac6ab9f")]),s._v(" "),a("p",[s._v("我每天使用 Git ，但是很多命令记不住。")]),s._v(" "),a("p",[s._v("一般来说，日常使用只要记住下图6个命令，就可以了。但是熟练使用，恐怕要记住60～100个命令。")]),s._v(" "),a("p",[s._v("下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。")]),s._v(" "),a("p",[s._v("Workspace：工作区")]),s._v(" "),a("p",[s._v("Index / Stage：暂存区")]),s._v(" "),a("p",[s._v("Repository：仓库区（或本地仓库）")]),s._v(" "),a("p",[s._v("Remote：远程仓库")]),s._v(" "),a("h5",{attrs:{id:"一、新建代码库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、新建代码库","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、新建代码库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 在当前目录新建一个Git代码库\n\n$ git init\n\n# 新建一个目录，将其初始化为Git代码库\n\n$ git init [project-name]\n\n# 下载一个项目和它的整个代码历史\n\n$ git clone [url]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h5",{attrs:{id:"二、配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、配置")]),s._v(" "),a("p",[s._v("Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 显示当前的Git配置\n\n$ git config --list\n\n# 编辑Git配置文件\n\n$ git config -e [--global]\n\n# 设置提交代码时的用户信息\n\n$ git config [--global] user.name "[name]"\n\n$ git config [--global] user.email "[email address]"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h5",{attrs:{id:"三、增加-删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、增加-删除文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、增加/删除文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 添加指定文件到暂存区\n\n$ git add [file1] [file2] ...\n\n# 添加指定目录到暂存区，包括子目录\n\n$ git add [dir]\n\n# 添加当前目录的所有文件到暂存区\n\n$ git add .\n\n# 删除工作区文件，并且将这次删除放入暂存区\n\n$ git rm [file1] [file2] ...\n\n# 停止追踪指定文件，但该文件会保留在工作区\n\n$ git rm --cached [file]\n\n# 改名文件，并且将这个改名放入暂存区\n\n$ git mv [file-original] [file-renamed]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h5",{attrs:{id:"四、代码提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、代码提交","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、代码提交")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 提交暂存区到仓库区\n\n$ git commit -m [message]\n\n# 提交暂存区的指定文件到仓库区\n\n$ git commit [file1] [file2] ... -m [message]\n\n# 提交工作区自上次commit之后的变化，直接到仓库区\n\n$ git commit -a\n\n# 提交时显示所有diff信息\n\n$ git commit -v\n\n# 使用一次新的commit，替代上一次提交\n\n# 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n\n$ git commit --amend -m [message]\n\n# 重做上一次commit，并包括指定文件的新变化\n\n$ git commit --amend ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h5",{attrs:{id:"五、分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、分支","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、分支")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 列出所有本地分支\n\n$ git branch\n\n# 列出所有远程分支\n\n$ git branch -r\n\n# 列出所有本地分支和远程分支\n\n$ git branch -a\n\n# 新建一个分支，但依然停留在当前分支\n\n$ git branch [branch-name]\n\n# 新建一个分支，并切换到该分支\n\n$ git checkout -b [branch]\n\n# 新建一个分支，指向指定commit\n\n$ git branch [branch] [commit]\n\n# 新建一个分支，与指定的远程分支建立追踪关系\n\n$ git branch --track [branch] [remote-branch]\n\n# 切换到指定分支，并更新工作区\n\n$ git checkout [branch-name]\n\n# 建立追踪关系，在现有分支与指定的远程分支之间\n\n$ git branch --set-upstream [branch] [remote-branch]\n\n# 合并指定分支到当前分支\n\n$ git merge [branch]\n\n# 选择一个commit，合并进当前分支\n\n$ git cherry-pick [commit]\n\n# 删除分支\n\n$ git branch -d [branch-name]\n\n# 删除远程分支\n\n$ git push origin --delete\n\n$ git branch -dr\n#####六、标签\n\n# 列出所有tag\n\n$ git tag\n\n# 新建一个tag在当前commit\n\n$ git tag [tag]\n\n# 新建一个tag在指定commit\n\n$ git tag [tag] [commit]\n\n# 查看tag信息\n\n$ git show [tag]\n\n# 提交指定tag\n\n$ git push [remote] [tag]\n\n# 提交所有tag\n\n$ git push [remote] --tags\n\n# 新建一个分支，指向某个tag\n\n$ git checkout -b [branch] [tag]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br")])]),a("h5",{attrs:{id:"七、查看信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、查看信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 七、查看信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 显示有变更的文件\n\n$ git status\n\n# 显示当前分支的版本历史\n\n$ git log\n\n# 显示commit历史，以及每次commit发生变更的文件\n\n$ git log --stat\n\n# 显示某个文件的版本历史，包括文件改名\n\n$ git log --follow [file]\n\n$ git whatchanged [file]\n\n# 显示指定文件相关的每一次diff\n\n$ git log -p [file]\n\n# 显示指定文件是什么人在什么时间修改过\n\n$ git blame [file]\n\n# 显示暂存区和工作区的差异\n\n$ git diff\n\n# 显示暂存区和上一个commit的差异\n\n$ git diff --cached []\n\n# 显示工作区与当前分支最新commit之间的差异\n\n$ git diff HEAD\n\n# 显示两次提交之间的差异\n\n$ git diff [first-branch]...[second-branch]\n\n# 显示某次提交的元数据和内容变化\n\n$ git show [commit]\n\n# 显示某次提交发生变化的文件\n\n$ git show --name-only [commit]\n\n# 显示某次提交时，某个文件的内容\n\n$ git show [commit]:[filename]\n\n# 显示当前分支的最近几次提交\n\n$ git reflog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("h5",{attrs:{id:"八、远程同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、远程同步","aria-hidden":"true"}},[s._v("#")]),s._v(" 八、远程同步")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 下载远程仓库的所有变动\n\n$ git fetch [remote]\n\n# 显示所有远程仓库\n\n$ git remote -v\n\n# 显示某个远程仓库的信息\n\n$ git remote show [remote]\n\n# 增加一个新的远程仓库，并命名\n\n$ git remote add [shortname] [url]\n\n# 取回远程仓库的变化，并与本地分支合并\n\n$ git pull [remote] [branch]\n\n# 上传本地指定分支到远程仓库\n\n$ git push [remote] [branch]\n\n# 强行推送当前分支到远程仓库，即使有冲突\n\n$ git push [remote] --force\n\n# 推送所有分支到远程仓库\n\n$ git push [remote] --all\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h5",{attrs:{id:"九、撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、撤销","aria-hidden":"true"}},[s._v("#")]),s._v(" 九、撤销")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 恢复暂存区的指定文件到工作区\n\n$ git checkout [file]\n\n# 恢复某个commit的指定文件到工作区\n\n$ git checkout [commit] [file]\n\n# 恢复上一个commit的所有文件到工作区\n\n$ git checkout .\n\n# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n\n$ git reset [file]\n\n# 重置暂存区与工作区，与上一次commit保持一致\n\n$ git reset --hard\n\n# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n\n$ git reset [commit]\n\n# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n\n$ git reset --hard [commit]\n\n# 重置当前HEAD为指定commit，但保持暂存区和工作区不变\n\n$ git reset --keep [commit]\n\n# 新建一个commit，用来撤销指定commit\n\n# 后者的所有变化都将被前者抵消，并且应用到当前分支\n\n$ git revert [commit]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("h5",{attrs:{id:"十、其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十、其他","aria-hidden":"true"}},[s._v("#")]),s._v(" 十、其他")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 生成一个可供发布的压缩包\n\n$ git archive\n\n# 备份当前工作区的内容\n\n$ git stash\n\n# 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容\n\n$ git stash pop\n\n#显示Git栈内的所有备份\n\n$ git stash list\n\n#清空Git栈\n\n$ git stash clear\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}],!1,null,null,null);e.options.__file="整理了一些常用的 Git 命令清单.md";n.default=e.exports}}]);