var s = document.createElement('script');
s.src = chrome.extension.getURL('jszip.min.js');
var s2 = document.createElement('script');
s2.src = chrome.extension.getURL('script.js');
var s3 = document.createElement('script');
s3.src = chrome.extension.getURL('FileSaver.min.js');

(document.head||document.documentElement).appendChild(s).appendChild(s2).appendChild(s3);
s.onload = function() {
    s.parentNode.removeChild(s);
};
s2.onload = function() {
    s2.parentNode.removeChild(s2);
	
};
s3.onload = function() {
    s3.parentNode.removeChild(s3);
	
};