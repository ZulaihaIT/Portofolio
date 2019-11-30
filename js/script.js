//event pada link di klik

$('.#page-scroll').on('.click', function(e){
	
//ambil isi href about
 console.log('ok');
var tujuan = $(this).attr('href');
// tangkap elemen yg berangkutan
var elemenTujuan = $(tujuan);

$('body').animate({
	scrollTop: elemenTujuan.offset().top - 50
}, 1250, 'swing');

e.preventDefault();


});