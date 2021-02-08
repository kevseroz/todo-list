//belirli bir seçeneğe tıkladığımızda üzerini çizeceğiz
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//X e basınca todo seçeneğini silecek
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //inputa girilen todoyu tutalım
        var todoText = $(this).val();
        //input içine yazılanı aldıktan sonra input içini temizleyelim
        $(this).val("");
        //yeni bir li oluşturup ul içine kaydedelim
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle()
});


/*bu kod yerine bir sınıf belirleyip çok daha kısa bir kod yazacağız
$("li").click(function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
});*/