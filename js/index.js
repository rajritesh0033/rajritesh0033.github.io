/* 
 * 功能設定要寫在 $(function(){}) 的外面
 * ------------------------------------------------------
 * 這邊有設定一個名為 lazy 的 class
 * 當 <img> 被添加這個 class 的時候，就會執行載入圖片的動作
 * ------------------------------------------------------
 */

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.lazyClass = 'lazy';

$(function () {

    /* 宣告需要的儲存數值的變數 */

    var $window = $(window);
    var scrollTop = $window.scrollTop();
    
    /* 把滾動載入的功能寫在 scrollLazyLoad 這個 function 裡面 */
    function scrollLazyLoad(val) {
    
        /* 計算現在網頁已瀏覽過的範圍高度 */
        var offset = val + $window.height();
        
        /* 如果網頁裡面沒有 .lazyload，就關閉 scroll 事件的功能 */
        if ($('.lazyload').length < 1) {
            $window.off('scroll', scrollLazyLoad);
        }
        
        /* 
         * 處理 lazyload
         * ------------------------------------------------------
         * lazyload 已經載入完成時會被添加一個叫做 lazyloaded 的 class
         * 先判斷 .lazyload 是否有 .lazyloaded
         * 如果沒有且相對位置高度是在瀏覽過的範圍高度以內的話
         * 就添加 .lazy 這個 class，添加後就會開始載入圖片
         * ------------------------------------------------------
         */
         
        $('.lazyload').each(function () {
            var $this = $(this);
            if ($this.hasClass('lazyloaded') === false) {
                if ($this.offset().top + ($this.height() / 2 - 20) < offset) {
                    $this.addClass('lazy');
                }
            }
        });
    }
    
    /* 
     * 讀取瀏覽器的 scroll 事件
     * 當瀏覽器滾動的時候就會呼叫 scrollLazyLoad()
     */

    $window.on('scroll', function () {
        scrollTop = $window.scrollTop();
        scrollLazyLoad(scrollTop);
    }).trigger('scroll');

});