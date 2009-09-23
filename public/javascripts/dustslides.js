$(function() {
  
  // 500, 503 removed at beginning
  var times = [506, 512, 515, 518, 521, 524, 527, 530, 533, 536, 539, 542, 545, 548, 551, 554, 557, 600, 603, 606, 609, 612, 615, 618, 621, 624, 627, 630, 633, 636, 639, 642, 645, 649, 652, 655, 658, 701, 705, 709, 712, 715, 719, 722, 726, 730, 734, 738, 741, 745, 750, 754, 759, 802, 806, 809, 812, 816, 820, 824, 828, 831, 834, 838, 841, 845, 850, 854, 858, 901, 905, 909, 912, 918, 921, 925, 929, 932, 936, 940, 944, 949, 952, 956],
      stack = [],
      clock = $("#time"),
      timeFor = function(time) {
        time = new String(time).split("");
        return time[0] + ":" + time[1] + time[2] + "am";
      },
      onBefore = function(curr, next, opts) {
        // Add images to slideshow 
        if (opts.addSlide) {
          while(stack.length) {
            opts.addSlide(stack.shift());
          }
        }
        // Add time display
        $(clock).text(timeFor($(next).attr("alt")));
      };
  
  // Sort out all the frames
  var progress = function() {
    var img = new Image(640,480),
        t = times.shift(); 
    img.src = 'http://strm-gallery.coastalwatch.com/camera/livestill/227/LiveStill_200909230' + t + '.gif';
    img.alt = t;
    $(img).bind('load', function() { 
      stack.push(this);
      progress();
    });
  };
  
  // Slide
  $('#slideshow').cycle({ 
      timeout:  1000, 
      before:   onBefore 
  });
  
  progress();
  
});
