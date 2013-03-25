//플래시 Insert
function FlashInsert(FlashIDName, FlashFileName, FlashWidth, FlashHeight, DNSSetting, WMODESetting, FlashBGColor, QSetting, FlashAlign){
	document.write('<OBJECT CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	document.write('CODEBASE="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=8,0,22,0" ');
	document.write(' ID="'+FlashIDName+'" WIDTH="' + FlashWidth + '" HEIGHT="' + FlashHeight + '" ALIGN="'+FlashAlign+'">');
	document.write('<PARAM NAME="movie" VALUE="'+ FlashFileName +'">');
	document.write('<PARAM NAME="quality" VALUE="'+QSetting+'">');
	document.write('<PARAM NAME="bgcolor" VALUE="'+FlashBGColor+'">');
	document.write('<PARAM NAME="wmode" VALUE="'+WMODESetting+'">');
	document.write('<PARAM NAME="allowFullScreen" VALUE="true">');
	document.write('<PARAM NAME="allowScriptAccess" VALUE="'+DNSSetting+'">');
	document.write('<EMBED SRC="'+ FlashFileName +'"  NAME="'+FlashIDName+'"');
	document.write(' WIDTH="' + FlashWidth + '" HEIGHT="' + FlashHeight + '" QUALITY="'+QSetting+'" BGCOLOR="'+FlashBGColor+'"');
	document.write(' ALLOWSCRIPTACCESS="'+DNSSetting+'" ALIGN="'+FlashAlign+'" WMODE="'+WMODESetting+'" TYPE="application/x-shockwave-flash" allowFullScreen="true"');
	document.write(' PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" >');
	document.write('</EMBED>');
	document.write('</OBJECT>');
}

//즐겨찾기추가
function enterFair(url){
	window.open(url,'','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1000,height=668,top=0, left=0');
	return false;
}