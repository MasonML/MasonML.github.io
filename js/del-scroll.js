    $(function () {
        var isAdded = false;
        $(window).resize(function () {
            if (!isAdded && $(window).innerWidth() > 991) {
                 isAdded = true;
                 $('.ss-section').append('<nav class="scrollspy col-2 navbar-light bg-light"  id="myScrollspy"> <ul class="nav nav-pills flex-column" data-spy="affix" data-offset-top="205"> <li class="active"><a href="#A1">Article I</a></li> <li><a href="#A2">Article II</a></li><li><a href="#A3">Article III</a></li><li><a href="#A4">Article IV</a></li><li><a href="#A5">Article V</a></li><li><a href="#A6">Article VI</a></li><li><a href="#A7">Article VII</a></li><li><a href="#A8.1">Article VIII.I</a></li><li><a href="#A8.2">Article VIII.II</a></li><li><a href="#A9">Article IX</a></li></ul></nav><nav class="scrollspy col-2 navbar-light bg-light"  id="myScrollspy"><ul class="nav nav-pills flex-column" data-spy="affix" data-offset-top="205"><li class="active"><a href="#A1">Article I</a></li><li><a href="#A2">Article II</a></li><li><a href="#A3">Article III</a></li><li><a href="#A4">Article IV</a></li><li><a href="#A5">Article V</a></li><li><a href="#A6">Article VI</a></li><li><a href="#A7">Article VII</a></li><li><a href="#A8.1">Article VIII.I</a></li><li><a href="#A8.2">Article VIII.II</a></li><li><a href="#A9">Article IX</a></li></ul></nav>');
            } else if (isAdded && $(window).innerWidth() <= 991) {
                isAdded = false;
                $('.ss-section').remove();
            }
        });
    });