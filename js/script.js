
 var size = 300;

 var getQRSize =function() {

    var tempsize = parseInt($('#inputsize').val());
    if(!isNaN(tempsize) && tempsize < 50)
    	size = 50;
    else if(!isNaN(tempsize) && tempsize > 500)
    	size = 500;
    else if(isNaN(tempsize))
    	size = 300;
    else
    	size = tempsize;
 }

 var createBaseLink = function() {
 	getQRSize();
 	return 'https://chart.googleapis.com/chart?chs='+size+'x'+size+'&cht=qr&chl=';
 }

  $(document).ready( function() {
	$('#qrresult').hide();
  	$('#tabs').tabs();

	$('#createtext').bind('click', function() {
            var text = $('#inputtext').val();
            getQRSize();
            var qrcodetext =  createBaseLink()+text;
            $('#qrresult').html(' <img src="'+qrcodetext+'" />').show();
	});

	$('#createsms').bind('click',function() {
	   var phonenum = $('#inputphone').val();
	   var msg = $('#inputmsg').val();
           var qrcodetext = createBaseLink()+'sms:'+phonenum+':'+msg;
            $('#qrresult').html(' <img src="'+qrcodetext+'" />').show();
	});	

     	$('#createvcard').bind('click',function() {

		var n = $('#inputn').val();
		var a = $('#inputadd').val();
		var p = $('#inputvphone').val();
		var e = $('#inputvemail').val();
		var u = $('#inputurl').val();


		var qrcodetext = 
		createBaseLink() + 
		"MECARD:N:"+n+";ADR:"+a+";TEL:"+p+";EMAIL:"+e+";URL:"+u+";;";

		$('#qrresult').html(' <img src="'+qrcodetext+'" />').show();
      });

      $('#createemail').bind('click',function() {
		var address = $('#inputemail').val();
		var subject = $('#inputsubject').val();
		var body = $('#inputbody').val();
		var qrcodetext = createBaseLink() +  'MATMSG:TO:' +address+ ';SUB:' + subject+ ';BODY:' +body+ ';';
		$('#qrresult').html(' <img src="'+qrcodetext+'" />').show();

      });

      $('#createtweet').bind('click',function() {
      	var message = $('#inputtweet').val();

      	//message = message.replace("#","%25");
      	message = message.replace("@","%40");

      	var twitterurl = "http://twitter.com/home?status="+message;
      	var qrcodetext = createBaseLink()+twitterurl;
      	$('#qrresult').html(' <img src="'+qrcodetext+'" />').show();

      });
  });