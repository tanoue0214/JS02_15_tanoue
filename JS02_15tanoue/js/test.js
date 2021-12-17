$("main").fadeIn(2000);




//1.Save クリックイベント
$("#add-btn").on("click",function(){
    
    const key = $("#key").val();
    const value = $("#memo").val();
    localStorage.setItem(key,value);
    const html =`
    <tr>
        <th>${key}</th>
        <td>${value}</td>
        <td>
        <input type="button" value="done" id="done">
        </td>

        
    </tr>
    `;
    $("#lists").append(html);
   


    $('td').on("click",function(){
        const doneevent= $(this).children(`th`).html();
        console.log(doneevent,"ここを削除するー") 
        localStorage.removeItem(doneevent);
        $(this).parent().empty();
    });




 
   
})




//2.clear クリックイベント
$("#clear-btn").on("click",function(){
    localStorage.clear();
    $("#lists").empty();
});

//3.ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html =`
    <tr>
        <th>${key}</th>
        <td>${value}</td>
        <input type="button" value="done" id="done">
 
    </tr>
    `;

    $("#list").append(html);
}













// タイマー


function countdown(){
    const now=new Date();//今の時間
    const dlday=new Date('2021-12-25 10:00:00');
    const differ=dlday.getTime()-now.getTime();//あと何秒か計算
    
    
    const sec=Math.floor(differ/1000)%60;
    const min=Math.floor(differ/1000/60)%60;
    const hour=Math.floor(differ/1000/60/60);
    
    
   
    document.getElementById("hour").textContent=String(hour).padStart(2,"0"); //一桁になった時0がつくように
    document.getElementById("min").textContent=String(min).padStart(2,"0")
    document.getElementById("sec").textContent=String(sec).padStart(2,"0")
    setTimeout(countdown,1000);//1秒毎に繰り返す
    }
    countdown();




