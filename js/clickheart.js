export default function clickHeart(){
	const heartArr = document.getElementsByClassName('heart');
	const container = document.getElementsByClassName('page-content')[0];
	container.addEventListener('click', function(event){
		const heart = event.target;
		const classList = heart.classList;
		if(!classList.contains('heart')){ // heart를 클릭한 게 아니면 건너뛰기
			return;
		}else if(classList.contains('selected')){ // toggle
			classList.remove('selected');
		}else{
			classList.add('selected');
		}

		let idx = -1;
		for(let i=0; i<classList.length; i++){ // 클릭한 card idx 추출
			if(!isNaN(Number(classList[i])))
				idx = classList[i];
		}

		let movieMark = localStorage.getItem('mark').split(','); // localStorage에 저장
		movieMark = movieMark.filter((value) => value !== "");
		if(movieMark.includes(idx)){
			movieMark.splice(movieMark.findIndex((value)=>value==idx),1);
		}else{
			movieMark.push(idx);
		}

		localStorage.setItem('mark', movieMark.join(','));
	})
}