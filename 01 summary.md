简单数据类型。
	String        Number      Boolean        null       undefined
	字符串       数字        布尔           空         未定义
	“”         0123        true/false       自己       还没有定义
	
	String类型转换
		1. 变量+ '''' 
		2. String(变量)
		3. a++  a= a+1  不是一样的：a是String类型的时候后面的结果是a1;
	Number类型
		1、进制问题。
			var result = 0xb;  //表示十六进制
			var result1 = 020;//表示八进制

        2、丢失精度。
			0.1+0.2 = 0.30000000000000004
	    3、数据类型转换
			1. x-1  x*1  x/1      变成Number类型（只有String类型）
			2. Number(变量)
			如果变量中包含字母，返回一个NaN.
    Boolean类型
	      1. 使用 !!（boolean值不变）
	          false、undefined 、null、0、“” 为 false
	          true、1、“somestring”、[Object] 为 true
	  	  2. Boolean();
		  任何数据类型，都可以转换成布尔类型。
	null和undefined（任何数字和undefined相加(运算)都是NaN）
		null和undefined有最大的相似性。看看null == undefined的结果(true)也就更加能说明这点。不过相似归相似，还是有区别的，就是和数字运算时，10 + null结果为：10；10 + undefined结果为：NaN。
复杂数据类型。
	对象（Object），函数(function)，数组（array），日期(Date)，正则...........
    两个内置小方法
    parseInt（）；取整
		1、取整 parseInt(只能放一个值);  首个字符必须为数字。Or:NaN.
		2、parseInt(变量，进制) ：这个方法能够让一个指定进制的数变为十进制。
		       十进制值=parseInt(a,进制)  （你告诉我进制，我就敢给你转换成十进制）
		        指定进制的值 = number(十进制).toString(指定的进制);
		       （你给我一个十进制的值，在告诉我进制，我就能转换成那个进制的值）
		通过这两个方法我们可以完成，任意进制的转换。
	parseFloat（）; 取小数
	只有一个用法就是：取值（取小数）。

js丢失精度问题:
由于javascript是一种弱类型的语言，当我们进行小数运算时，会出现丢失精度的问题，如计算0.2 + 0.1，得到的结果不是0.3，而是0.30000000000000004


隐藏盒子
  display： none;             隐藏盒子。（不占位置）
  visibility：hidden;         隐藏盒子。（占位置）
  overflow: hidden;           隐藏超出盒子的部分。

显示盒子
  display： block;             显示盒子。
  visibility：visible；        显示盒子。

Js加载问题
  js的加载时和html同步。（顺序加载，加载到谁，就执行谁。）
  Css和html是不同步加载的。（先加载HTML，后加载css。）

label  for  id
	<label for="inp">请输入一个名人：</label>
	<input type="text" id="inp"/>
	label标签使用：点击label内容,插入条光标会调到for指定的id的标签中。
	   (为他人做嫁衣，为for指定的id所在的标签)
oninput/onblur/onchange   区别与联系
	oninput: 输入事件。    只要输入或删除字母或数字都会触动这个事件。
	onblur: 失去焦点事件。 只要标签失去焦点，就会触动这个事件。
	onchange: 改变事件。   只要事件源的值被改变，就会触动这个事件。
    有一个input，值:    请输入...
	1.  点击之后离开。     2.输入一个文字就离开。3.入一个文字在删除他在离开。 



join 把数组变成字符串
	作用是将数组各个元素是通过指定的分隔符进行连接成为一个字符串。
	调用者：数组本身。    有没有参数都行。    有返回值（string）。
	把调用者数组中的元素按照参数链接成一个字符串，如果没有参数用逗号链接。
	字符串 = 数组.join(可选); 数组中的元素链成字符串。

	1．参数可选。指定要使用的分隔符。
	2．如果省略该参数，则使用逗号作为分隔符。
	3．如果想让数组中元素无缝链接，用“”；
	4．如果你使用空格分隔，那么他真的给你用空格分隔啊！！！“”
split 把字符串变成数组。   
	split() 方法用于把一个字符串分割成字符串数组
	调用者：字符串。    有没有参数都行。    有返回值（Array）。
	把字符串按固定的方式分割成一个数组，参数1用什么字符分割，参数2数组最大长度。
	数组 = 字符串.split(用什么分，分割成功后数组最大长度); 把字符串分割成数组。

	参数 1。指定要使用的分隔符。
	参数2，可选。该参数可指定返回的数组的最大长度。
	数组切割完成后，用于切割的字符串不会出现在数组元素当中。（卸磨杀驴）
	如果是空字符串，会把每一个字符全部当做数组中的元素来截取。
select标签本身的value值给了下面的标签option，所以option的value值就是select的value值。有selected这个属性的option标签是被选定或默认的标签。
onchange事件这个事件是在value值被更的时候触发的。一旦value值被更改就会触动这个事件。


兄弟节点 Sibling就是兄弟的意思。
	Next：下一个的意思。
	Previous:前一个的意思。
	nextSibling：调用者是节点。IE678中指下一个元素节点（标签）。在火狐谷歌IE9+以后都指的是下一个节点（包括空文档和换行节点）。
	nextElementSibling：在火狐谷歌IE9都指的是下一个元素节点。
	总结：在IE678中用nextSibling，在火狐谷歌IE9+以后用nextElementSibling
	下一个兄弟节点=节点.nextElementSibling || 节点.nextSibling

previousSibling：调用者是节点。IE678中指前一个元素节点（标签）。在火狐谷歌IE9+以后都指的是前一个节点（包括空文档和换行节点）。
	previousElementSibling：在火狐谷歌IE9都指的是前一个元素节点。
	总结：在IE678中用previousSibling，在火狐谷歌IE9+以后用previousElementSibling。
	下一个兄弟节点=节点.previousElementSibling|| 节点.previousSibling

单个子节点
	firstChild：调用者是父节点。IE678中指第一个子元素节点（标签）。在火狐谷歌IE9+以后都指的是第一个节点（包括空文档和换行节点）。
	firstElementChild:在火狐谷歌IE9都指的第一个元素节点。
	第一个子节点=父节点.firstElementChild || 父节点.firstChild

lastChild:调用者是父节点。IE678中指最后一个子元素节点（标签）。在火狐谷歌IE9+以后都指的是最后一个节点（包括空文档和换行节点）。
	lastElementChild：在火狐谷歌IE9都指的最后一个元素节点。
所有子节点
	childNodes：它是标准属性，它返回指定元素的子元素集合，包括HTML节点，所有属性，文本节点   （他还是W3C的亲儿子 ）
	火狐 谷歌等高本版会把换行也看做是子节点
	nodeType==1时才是元素节点(标签)
		nodeType  ==  1  表示的是元素节点   记住   元素就是标签
		nodeType  ==  2  表示是属性节点   了解
		nodeType  ==  3  是文本节点   了解
	子节点数组 = 父节点.childNodes;   获取所有节点。
	children：非标准属性，它返回指定元素的子元素集合。
	但它只返回HTML节点，甚至不返回文本节点，虽然不是标准的DOM属性，但它和innerHTML方法一样，得到了几乎所有浏览器的支持。
	children在IE6/7/8中包含注释节点 
	在IE678中，注释节点不要写在里面。
	子节点数组 = 父节点.children;   用的最多。
补充
	节点自己.parentNode.children[index];随意得到兄弟节点。

	作为了解内容：
	function siblings(elm) {
			var a = [];
			var p = elm.parentNode.children;
			for(var i =0,pl= p.length;i<pl;i++) {
				if(p[i] !== elm) a.push(p[i]);
			}
			return a;
	}
	定义一个函数。必须传递自己。定义一个数组，获得自己的父亲，在获得自己父亲的所有儿子（包括自己）。遍历所哟与的儿子，只要不是自己就放进数组中。

只需要明白两个属性（！！！重点！！！）
	parentNode   和  children  这两个属性。
DOM节点操作 （！！！！！重点！！！！！）
	节点的访问关系都是属性。节点的操作都是函数或者方法。
创建节点
	使用方法是这样的document.createElement();
	新的标签（节点） = document.createElement(“标签名”);
插入节点（使用节点）
	使用方法： 父节点.appendChild();
	父节点.appendChild(新节点); 父节点的最后插入一个新节点

	使用方法：父节点.insertBefore(要插入的节点，参考节点)；
	父节点.insertBefore(新节点,参考节点)在参考节点前插入;
删除节点   
	用法：用父节点删除子节点。
	父节点.removeChild（子节点）；必须制定要删除的子节点
	节点自己删除自己：
	不知道父级的情况下，可以这么写：node.parentNode.removeChild(node)
复制节点 （    oldNode.cloneNode（true）  ）
	想要复制的节点调用这个函数cloneNode()，得到一个新节点。 方法内部可以传参，入股是true，深层复制，如果是false，只复制节点本身。
	新节点=要复制的节点.cloneNode(参数) ; 参数可选复制节点
	用于复制节点， 接受一个布尔值参数， true 表示深复制（复制节点及其所有子节点）， false 表示浅复制（复制节点本身，不复制子节点）
节点属性
	获取：getAttribute(名称)
	设置：setAttribute(名称, 值)
	删除：removeAttribute(名称)
	注意：IE6、7不支持。
	调用者：节点。   有参数。   没有返回值。
	每一个方法意义不同。


获取日期和时间
getDate()                 获取日 1-31
getDay ()                 获取星期 0-6（0代表周日）
getMonth ()               获取月 0-11（1月从0开始）
getFullYear ()	           获取完整年份（浏览器都支持）
getHours ()	              获取小时 0-23
getMinutes ()	              获取分钟 0-59
getSeconds ()	              获取秒  0-59
getMilliseconds ()          获取毫秒 （1s = 1000ms）
getTime ()	              返回累计毫秒数(从1970/1/1午夜)


返回距离1970/01/01毫秒数
 var date = Date.now();
 var date = +new Date();
 var date = new Date().getTime();  最常用
 var date = new Date().valueOf();


字符串转换
	1．字符串 = 变量+“”;
	2．字符串 = String(变量)；
	3．字符串 = 变量.toString()；  (任何简单类型)    
	注意：
				Number类型：
	该进制值 = 十进制.toString（进制）
	十进制值 = window.parseInt(数值，进制);
		区别于：String类型中的toString()

charAt，获取相应位置字符（参数： 字符位置）
	返回的字符 = str.charAt(索引)。获得索引处的字符。
	注释：字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。

charCodeAt获取相应位置字符编码（参数： 字符位置）
	编码值 = str.charCodeAt(索引);指定位置的字符对应的编码值
	charAt()方法和charCodeAt()方法用于选取字符串中某一位置上的单个字符
	区别：charCodeAt()方法，它并不返回指定位置上的字符本身，而是返回该字符在Unicode字符集中的编码值

indexOf，从前向后索引字符串位置（参数： 索引字符串）
	索引值 = str.indexOf(字符); 从前往后查找。
	从前面寻找第一个符合元素的位置。有多个返回值为第一个。
lastIndexOf，从后向前索引字符串位置（参数：索引字符串）
	索引值 = str.lastIndexOf(字符); 从后往前查找。
	从后面寻找第一个符合元素的位置
	找不到则返回 -1

编码和解码
	 encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
	 decodeURIComponent() 函数可把字符串作为 URI 组件进行解码
	var url = "http://www.itcast.cn?name=supperBrother&password=shuai";
	//编码：将非标准字符全部编码
	var enUrl = encodeURIComponent(url);//encodeURI(url); 
	//解码：转换为原始形式
	var deUrl = decodeURIComponent(enUrl);//decodeURI(enUrl);

字符串操作
concat，连接字符串（参数： 追加字符串，可以多个）
	返回一个字符串 = str1.concat(str2); 把str1和str2链接起来

slice，截取字符串（参数：1，截取位置【必须】，2终结点）
	字符串 = str.slice（参数1，参数2); 两个参数都是索引值。
	(1).（2,5）  正常包左不包右。
	(2).  ( 2 )   从指定的索引位置剪到最后。
	(3).（-3）   从倒数第几个剪到最后.
	(4).（5,2）  前面的大，后面的小，空。

substr，截取字符串（参数：1，截取位置【必须】，2截取长度）
	字符串 = str.substr（参数1，参数2); 1索引值,2长度。第一个参数为从索引位置取值，第二个参数返回字符长度。
	(1).  （2,4）    从索引值为2的字符开始，截取4个字符。
	(2).  （1）     一个值，从指定位置到最后。
	(3).  （-3）    从倒数第几个剪到最后.
    (4）不包括前大后小的情况。

substring 同slice
字符串 = str.substring（参数1，参数2); 两个参数都是索引值。
  不同1：参数智能调转位置。
  不同2：参数负值，将全部获取字符串。
   （1）.（2,5）   正常包左不包右。
	(2).   ( 2 )    从指定的索引位置剪到最后。
	(3).  （-3）   获取全部字符串.
	(4).  （5,2）   前面的大，后面的小，不是空。（2,5）

转换大小写
	toUpperCase，转换为大写（参数： 无）
	STR = str.toUpperCase(); 转换成大写
	toLowerCase，转换为小写（参数：无）
	str = STR.toLowerCase(); 转换成小写

Number和Math
	Number
		number.toFixed(几位);四舍五入保留
	Math
		Math.random();   (0-1随机数值)
		Math.round();      (四舍五入取整)
		Math.max();        (最大值和NaN)
		Math.max(1,3,"12ab")；Math.max(1,2,NaN)；Math.max(1,2,undefined);  NaN
		Math.max(1,3,"12")；Math.max(1,3,null)；    12  3
		Math.max(1,2,3);    3

arguments.callee == 函数名==函数体（不是执行这个函数）
	arguments.length == 实参的长度。
	arguments == 实参数组。 
	arguments.callee == 所在的函数体。 == 调用函数名。(和this类似)
