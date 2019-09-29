function get_hl_cookie() {
    var name = 'hotcli=';
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return '';
} 

hotlog_r = "" + Math.random() + "&amp;s=2574646&amp;im=307&amp;r=" +
    escape(document.referrer) + "&amp;pg=" + escape(window.location.href);

hotlog_r += "&amp;j=" + (navigator.javaEnabled() ? "Y":"N");

hotlog_r += "&amp;wh=" + screen.width + "x" + screen.height + "&amp;px=" +
    (((navigator.appName.substring(0,3)=="Mic")) ? screen.colorDepth:screen.pixelDepth);

if (typeof hotlog_counter_extra === 'undefined') {
    hotlog_counter_extra = "cver=1"; 
}
else {
    hotlog_counter_extra = hotlog_counter_extra + "&amp;cver=1";
}
if(hotlog_counter_extra)
    hotlog_r += "&amp;" + hotlog_counter_extra;

hotlog_r+="&amp;js=1.3";


try {
    var hdiv = document.getElementById("hotlog_counter");
    if(hdiv) {
        var ihtml = '<a href="https://click.hotlog.ru/?2574646" target="_blank"><img ' +
            'src="https://hit20.hotlog.ru/cgi-bin/hotlog/count?' + hotlog_r + 
            '" class="hotlog_counter" border="0" alt="HotLog" title="HotLog" width="88" height="31"><\/a>';
        var hotcli = get_hl_cookie();
        if(hotcli) {
            //ihtml = ihtml + '<img>';
        }
        hdiv.innerHTML = ihtml;
    }
    else {
        document.write('<a href="https://click.hotlog.ru/?2574646" target="_blank"><img ' +
            'src="https://hit20.hotlog.ru/cgi-bin/hotlog/count?' + hotlog_r + 
            '" class="hotlog_counter" border="0" alt="HotLog" title="HotLog" width="88" height="31"><\/a>');
    }
}
catch(e) {
    document.write('<a href="https://click.hotlog.ru/?2574646" target="_blank"><img ' +
        'src="https://hit20.hotlog.ru/cgi-bin/hotlog/count?' + hotlog_r + 
        '" class="hotlog_counter" border="0" alt="HotLog" title="HotLog" width="88" height="31"><\/a>');
}
