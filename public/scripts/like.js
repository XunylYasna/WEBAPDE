$(function() { 
    
    // console.log(post.title)

    var like = 1;
    var cur = post.score

    $('#likeb').click(function(){
        $(this).toggleClass('liked');
        console.log(like)
        $.ajax({
            url:'/like',
            type:'POST',
            dataType: "json",
            data:{
                // id: post._id,
                // act: like,
                // cur: cur
            },
            contentType: "application/json",
            cache: false,
            timeout: 5000,
            complete: function() {
                //called when complete
                console.log('process complete');
            },

            success: function(data) {
                console.log(data);
                cur += data.some
                console.log('process sucess');
            },

            error: function() {
                console.log('process error');
            },
        });

        like *= -1;

        $('#liken').html(cur);

    })
})
