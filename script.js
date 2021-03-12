$(function() {
 $('.slide').each(function() {
   
   var $slides = $(this).find("img"),         // スライド（画像）の数を取得
       currentIdx = 0;                        // 何番目か
   
   $(".slide img").eq(currentIdx).fadeIn();   // 最初の画像をフェードイン
    
   setTimeout(NextSlide, 3000);           // 3秒後に次のスライドを表示
   
   function NextSlide() {                 // 次のスライドを表示するメソッド
     var nextIdx = currentIdx + 1;
     
     if (nextIdx > 3) {                   // 最後のスライドの場合ははじめに戻る
       nextIdx = 0
     }
     
     $(".slide img").eq(currentIdx).fadeOut(); // 現在のスライドをフェードアウト
                
     $(".slide img").eq(nextIdx).fadeIn();     // 次のスライドをフェードイン
   
     currentIdx += 1;                    // インデックスを更新
       
   };
 });
});
