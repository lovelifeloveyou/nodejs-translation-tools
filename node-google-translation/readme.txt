一个通过计算出token值使用get请求获取google翻译内容的命令行工具

使用nodejs编写

可在本机任何目录下打开命令行使用


使用方法： 
1. npm install
2. npm link
3. gg 你要查找的词


package.json配置bin：
	很多包都有一个或多个可执行的文件希望被放到PATH中。npm让妈妈再也不用担心了（实际上，就是这个功能让npm可执行的）。
	要用这个功能，给package.json中的bin字段一个命令名到文件位置的map。初始化的时候npm会将他链接到prefix/bin（全局初始化）或者./node_modules/.bin/（本地初始化）。
	
通常我们认为 #!/usr/bin/python 采用了绝对路径的写法，即指定了采用/usr/bin/python 解释器来执行该脚本。一般
类Unix系统下，python解释器都位于该路径，不幸的是如果python解释器不在该路径下的话，./file.py 就无法运行。
而 #!/usr/bin/env python 的写法指定从PATH环境变量中来查找python解释器的位置，因此只要环境变量中存在，
该脚本即可执行。
