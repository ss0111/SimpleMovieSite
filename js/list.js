import clickHeart from './clickheart.js';

document.addEventListener('DOMContentLoaded', async function(){
	await makeCard();
	await clickHeart();
});

function makeCard(){
	const container = document.getElementsByClassName('page-content')[0];
	const movie_num = 22;
	for(let i=1; i<=movie_num; i++){ // make card
		const card = document.createElement('div');
		card.className="movie-card";
		const img = document.createElement('img');
		img.src=("./img/movie"+i+".jpg");
		const heart = document.createElement('p');
		heart.className=`heart ${i}`;
		heart.innerHTML="♥";

		/* localStorage에서 movieMark 가져오기 */
		let movieMark = localStorage.getItem('mark')?.split(',');
		if(movieMark){
			movieMark = movieMark.filter((value) => value !== "");
			if(movieMark.includes(`${i}`))
				heart.classList.add('selected');
		}else{
			localStorage.setItem('mark', "");
		}

		card.appendChild(img);
		card.appendChild(heart);
		container.appendChild(card);
	}
};