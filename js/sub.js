
$('#source').quicksand( $('#destination li') );

  <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));

            // Colorbox Call

            $(document).ready(function(){
                $("[rel^='lightbox']").prettyPhoto();
            });
</script> 
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> 
<script>
var floatNav = $('.float-nav'),
    mainContent = $('.main-content');

floatNav.on('click', function(e) {
  $(this).toggleClass('closed');
  e.stopPropagation();
  e.preventDefault();
});

mainContent.on('click', function() {
  if (!floatNav.hasClass('closed')) floatNav.addClass('closed');
});
</script><script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>