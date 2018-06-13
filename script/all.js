;(function(){
    let worksList = document.querySelector('.works_list');
    let workListStr = '';
    let worksArray = [
        {
        title:'金門酒廠-活動網站',
        link:'https://kkl.daretolove.tw/',
        img:'images/website_2.png',
        type:'website',      
    },{
        title:'奇瑞斯-活動網站',
        link:'https://wwchen412.github.io/qurios/',
        img:'images/website_3.png',
        type:'website',       
    },{
        title:'購巴士-電商平台',
        link:'https://www.busgobuy.com.tw/',
        img:'images/website_1.png', 
        type:'website',       
},{
        title:'islander-官方網站',
        link:'https://www.islander-select.com/',
        img:'images/website_4.png',
        type:'website',        
    },{
        title:'em-形象網站',
        link:'https://wwchen412.github.io/em/index.html',
        img:'images/website_5.png',
        type:'website',        
    },{
        title:'holimall-電商平台',
        link:'https://www.goholimall.com/',
        img:'images/website_6.png',
        type:'website',        
    },{
        title:'盛世公主-活動網站',
        link:'http://www.princesscruises.com.tw/event/mj/',
        img:'images/website_8.png', 
        type:'website',       
},]
    for( var i=0;i<worksArray.length;i++){
        workListStr += `
            <li class="">
            <a href="${worksArray[i].link}" target="_blank">
                <div class="works_list_info">
                    <h4 class="mb-3">${worksArray[i].title}</h4>
                    <div class="btn">前往連結</div>
                </div>
                <img src="${worksArray[i].img}" alt="" class="img-fluid">
            </a>
        </li>`  

        worksList.innerHTML = workListStr;
    }
    
})();

