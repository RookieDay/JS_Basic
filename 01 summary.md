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


