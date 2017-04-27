window.onload = function() {

var jsonString = '\
{\
  "title": [ "Human assistance", "Internet security",\
   "Anti-theft", "Fast cleanup",\
   "Duplicates finder", "Geek on demand",\
   "Update tracker", "Backup",\
   "Files recovery", "Disk usage",\
   "Smart uninstaller", "Data encryptor",\
   "Default apps",\
   "Shredder", "Files finder",\
   "Login items", "Memory Cleaner"],\
  "contents": [ "Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure.",\
   "Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you\'\ re using the Internet.",\
   "If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",\
   "Quickly remove junk files (such as temporary caches, logs, unused language packages and legacy application parts) that may take up hard drive space and slow down your Mac.",\
   "Delete unnecessary copies of your files and free up disk space on your Mac.",\
   "Geek on Demand is the ultimate tool when you have a problem or question that is related to your Mac\'\s health and need an expert\'\s opinion or technical assistance.",\
   "With Update Tracker you will never miss out any important security patches and upgrades for most of your applications.",\
   "Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure.",\
   "Now you can recover files that were once deleted from the Trash!",\
   "Visualize the size of the folders on your hard drive so you can tell at a glance which folders are taking up the most space.",\
   "Prevent future junk by making sure that you\'\ re not just sweeping old applications under the rug when you are trying to delete them.",\
   "Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information.",\
   "The easiest way to define which application will open each file type.",\
   "Securely delete files and folders that you don\'\ t ever want to be recovered.",\
   "Quickly search for and find any lost or misplaced file, even if you don\'\ t know in which folder it is located.",\
   "Take control of how fast your Mac boots up by deciding which applications launch every time you start it.",\
   "Automatically optimizes and monitors your Mac’s RAM memory while you are performing your daily tasks."]\
}\
';

var content = JSON.parse ( jsonString );


$( ".hexagon" ).on( "click", function() {

  var position = $(this).find('img').css('object-position');
  var width = $(this).find('img').css('max-width');

  var number = $(this).data('text') - 1;

  $( ".services-box-img img").css({'object-position': position, 'max-width': width});

  $( ".services-box-img p").text(content.title[number]);
  $( ".services-box-description p").text(content.contents[number]);
});

if($(window).width()> 768) {
  setEqualHeight('.review-item-description');
  setEqualHeight('.review-item-bottom');


  $( ".hexagon" ).one( "click", function() {

    console.log(1);


    $( ".hexagons" ).css('transform', 'translateX(0)');

    setTimeout(function() {
      $( ".services-box").css('display', 'inline-block');
    }, 400);

  });

}

    var first = $( ".hexagon:first-child" );
    var position = $(first).find('img').css('object-position');
    var width = $(first).find('img').css('max-width');

    var number = $(first).data('text') - 1;

    $( ".services-box-img img").css({'object-position': position, 'max-width': width});

    $( ".services-box-img p").text(content.title[number]);
    $( ".services-box-description p").text(content.contents[number]);


};



function setEqualHeight(blocks, etalon, correction) {

  blocks = $(blocks);
  if (blocks.length > 1) {
    var tallest = 0;
    blocks.each(function() {
      var height = $(this).outerHeight(true);
      if (tallest < height)
        tallest = height;
    });
    if (etalon && tallest < etalon) {
      result = etalon;
    } else {
      result = tallest;
    }
    if (correction)
      result = result + correction;
    blocks.height(result);
  }

};