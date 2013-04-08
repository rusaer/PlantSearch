
function searchkeywords(info, tab) {
    var url = "http://www.plantphoto.cn/list?keyword="+encodeURIComponent(info.selectionText);
    window.open(url);
}
function searchpinyin(info, tab) {
    var url = "http://www.plantphoto.cn/list?pinyin="+encodeURIComponent(info.selectionText);
    window.open(url);
}
function searchdidian(info, tab) {
    var url = "http://www.plantphoto.cn/list?didian="+encodeURIComponent(info.selectionText);
    window.open(url);
}
function searchlatin(info, tab) {
    var url = "http://www.plantphoto.cn/list?latin="+encodeURIComponent(info.selectionText);
    window.open(url);
}
function searchren(info, tab) {
    var url = "http://www.plantphoto.cn/list?ren="+encodeURIComponent(info.selectionText);
    window.open(url);
}
function searchren(info, tab) {
    var url = "http://www.google.com/searchbyimage?sbisrc=cr_1_4_2&image_url="+encodeURIComponent(info.selectionText);
    window.open(url);
}
//-----------------------------------------------------------------------------plantphoto-over
function search2(info, tab) {
    var url = "http://frps.eflora.cn/frps/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
function search21(info, tab) {
    var url = "http://frps.eflora.cn/search/"+encodeURIComponent(info.selectionText)+"?n=1";
    window.open(url);
}
function search22(info, tab) {
    var url = "http://frps.eflora.cn/search/"+encodeURIComponent(info.selectionText)+"?n=2";
    window.open(url);
}
function search23(info, tab) {
    var url = "http://frps.eflora.cn/search/"+encodeURIComponent(info.selectionText)+"?n=3";
    window.open(url);
}
function search24(info, tab) {
    var url = "http://frps.eflora.cn/search/"+encodeURIComponent(info.selectionText)+"?n=4";
    window.open(url);
}
//-----------------------------------------------------------------------------zhiwuzhiover
function search3(info, tab) {
    var url = "http://www.flph.org/s/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
//-----------------------------------------------------------------------------xmlyover
function search4(info, tab) {
    var url = "http://www.eflora.cn/sp/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
function search41(info, tab) {
    var url = "http://www.eflora.cn/spzwz/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
function search42(info, tab) {
    var url = "http://www.eflora.cn/spfoc/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
function search43(info, tab) {
    var url = "http://www.eflora.cn/sptujian/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
function search44(info, tab) {
    var url = "http://www.eflora.cn/spgdzw/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
function search45(info, tab) {
    var url = "http://www.eflora.cn/spjjzw/"+encodeURIComponent(info.selectionText);
    window.open(url);
}
//------------------------用google搜索相似图片函数其中 info.srcUrl是获取图片的地址
function searchimage(info, tab) {
    var url = "http://www.google.com/searchbyimage?sbisrc=cr_1_4_2&image_url="+info.srcUrl;
    window.open(url);
}

var plantsearchItem = chrome.contextMenus.create({"title": "PlantSearch", "id" : "plantsearch" ,"contexts":["selection"]});
chrome.contextMenus.create({"title": "PlantPhoto '%s'","id" : "plantphoto1" ,"parentId" : plantsearchItem , "contexts":["selection"], "onclick": searchkeywords});
var plantphotoItem = chrome.contextMenus.create({"title": "中国植物图像数据库", "id" : "plantphoto" ,"parentId" : plantsearchItem ,"contexts":["selection"]});
chrome.contextMenus.create({"title": "种首字母", "id" : "plantphoto2" ,"parentId" : plantphotoItem ,"contexts":["page","selection"], "onclick": searchpinyin});
chrome.contextMenus.create({"title": "地点", "id" : "plantphoto3" ,"parentId" : plantphotoItem ,"contexts":["page","selection"], "onclick": searchdidian});
chrome.contextMenus.create({"title": "拉丁名", "id" : "plantphoto4" ,"parentId" : plantphotoItem ,"contexts":["page","selection"], "onclick": searchlatin});
chrome.contextMenus.create({"title": "作者", "id" : "plantphoto5" ,"parentId" : plantphotoItem ,"contexts":["page","selection"], "onclick": searchren});
chrome.contextMenus.create({"type" : "separator", "id" : "sep" ,"parentId" : plantsearchItem ,"contexts":["selection"]});
//--------
chrome.contextMenus.create({"title": "FRPS '%s'","id" : "zhiwuzhi" ,"parentId" : plantsearchItem , "contexts":["selection"], "onclick": search2});
var zhiwuzItem = chrome.contextMenus.create({"title": "中国植物志", "id" : "zhiwuzhi1" ,"parentId" : plantsearchItem ,"contexts":["selection"]});
chrome.contextMenus.create({"title": "拉丁名", "id" : "zhiwuzhi2" ,"parentId" : zhiwuzItem ,"contexts":["page","selection"], "onclick": search21});
chrome.contextMenus.create({"title": "中文名", "id" : "zhiwuzhi3" ,"parentId" : zhiwuzItem ,"contexts":["page","selection"], "onclick": search22});
chrome.contextMenus.create({"title": "别名", "id" : "zhiwuzhi4" ,"parentId" : zhiwuzItem ,"contexts":["page","selection"], "onclick": search23});
chrome.contextMenus.create({"title": "拼音", "id" : "zhiwuzhi5" ,"parentId" : zhiwuzItem ,"contexts":["page","selection"], "onclick": search24});
chrome.contextMenus.create({"type" : "separator", "id" : "sep2" ,"parentId" : plantsearchItem ,"contexts":["selection"]});
//--------
chrome.contextMenus.create({"title": "喜马拉雅植物志 '%s'","id" : "xmly" ,"parentId" : plantsearchItem , "contexts":["selection"], "onclick": search3});
chrome.contextMenus.create({"type" : "separator", "id" : "sep3" ,"parentId" : plantsearchItem ,"contexts":["selection"]});
//----------
chrome.contextMenus.create({"title": "eFlora '%s'","id" : "zxzw" ,"parentId" : plantsearchItem , "contexts":["selection"], "onclick": search4});
var zhiwuz2Item = chrome.contextMenus.create({"title": "在线植物志", "id" : "zxzw1" ,"parentId" : plantsearchItem ,"contexts":["selection"]});
chrome.contextMenus.create({"title": "中国植物志", "id" : "zxzw2" ,"parentId" : zhiwuz2Item ,"contexts":["page","selection"], "onclick": search41});
chrome.contextMenus.create({"title": "Flora Of China", "id" : "zxzw3" ,"parentId" : zhiwuz2Item ,"contexts":["page","selection"], "onclick": search42});
chrome.contextMenus.create({"title": "高等植物图鉴", "id" : "zxzw4" ,"parentId" : zhiwuz2Item ,"contexts":["page","selection"], "onclick": search43});
chrome.contextMenus.create({"title": "高等植物志", "id" : "zxzw5" ,"parentId" : zhiwuz2Item ,"contexts":["page","selection"], "onclick": search44});
chrome.contextMenus.create({"title": "经济植物志", "id" : "zxzw6" ,"parentId" : zhiwuz2Item ,"contexts":["page","selection"], "onclick": search45});
//---------


chrome.contextMenus.create({"title": "GOOGLE搜索相似图片","id" : "photosearch" , "contexts":["image"], "onclick": searchimage});


//中国在线植物志
//泛喜马拉雅植物志
//中国植物志
