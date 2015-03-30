var off = $("#loader").offset().top+2500;
	var options = [
	{selector: '#loader', offset: off, callback: 'f1()' },
	{selector: '#loader', offset: off, callback: 'f2()' },
	{selector: '#loader', offset: off, callback: 'f3()' },
	{selector: '#loader', offset: off, callback: 'f4()' },
	];
	scrollFire(options);
	var  $coding = $('#coding'),
	$designing = $('#testing'),
	$testing = $('#designing'),
	$marketing = $('#marketing'),
	sV1 = $coding.text(),
	sV2 = $designing.text(),
	sV3 = $testing.text(),
	sV4 = $marketing.text(),
	eV1 = 96,
	eV2 = 80,
	eV3 = 70,
	eV4 = 65;
	var delay = 70;
	function f1(){
		$coding.text(++sV1);
		if(sV1<eV1)
		setTimeout(f1,delay);
	}
	function f2(){
		$designing.text(++sV2);
		if(sV2<eV2)
		setTimeout(f2,delay);
	}
	function f3(){
		$testing.text(++sV3);
		if(sV3<eV3)
		setTimeout(f3,delay);
	}
	function f4(){
		$marketing.text(++sV4);
		if(sV4<eV4)
		setTimeout(f4,delay);
	}
