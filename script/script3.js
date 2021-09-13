
$(document).ready(function() {
  /*공통헤더*/
 $("#header").load("header.html");
 /*공통푸터*/
 $("#footers").load("footer.html");
   
    
    function TextPrompter__showNextWord($el) {
    var text = $el.attr('data-text'); // 남은 문장을 가져온다.
    
    if ( text.length > 0) { // 남은 문장이 있다면
        var word = text.substr(0, 1); // 남은 문장의 첫 문자만 가져와서
        
        $el.append(word); // 뒤에 삽입한다.
        
        $el.attr('data-text', text.substr(1)); // 남은 문장을 고친다.
        
        setTimeout(function() {
            TextPrompter__showNextWord($el);
        }, 40);
    }
}

$('.text-prompter').each(function(index, node) {
    var $node = $(node);
    var $span = $node.find('>p:first-child');
    
    TextPrompter__showNextWord($span);
});
    
});


