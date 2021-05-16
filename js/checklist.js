import clickHeart from './clickheart.js';

document.addEventListener('DOMContentLoaded', async function(){
	await makeCard();
	await clickHeart();
});

function makeCard(){
	const container = document.getElementsByClassName('page-content')[0];

	/* localStorage에서 movieMark 가져오기 */
	let movieMark = localStorage.getItem('mark')?.split(',');
	if(!movieMark){
		localStorage.setItem('mark', "");
		movieMark = localStorage.getItem('mark')?.split(',');
	}
	movieMark = movieMark.filter((value) => value !== "");
	if(movieMark.length == 0){
		localStorage.setItem('mark', "");
		const p = document.createElement('p');
		p.innerHTML = "저장된 영화가 없습니다.<br/>영화 리스트 페이지에서 추가해주세요!";
		container.appendChild(p);
		return;
	}

	// check된 영화만 card 만들기
	movieMark.forEach((mark) => {
		const card = document.createElement('div');
		card.className="movie-card";
		const img = document.createElement('img');
		img.src=("./img/movie"+mark+".jpg");
		const heart = document.createElement('p');
		heart.className=`heart ${mark} selected`;
		heart.innerHTML="♥";
		
		card.appendChild(img);
		card.appendChild(heart);
		container.appendChild(card);
	})
}
