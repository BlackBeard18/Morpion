let i = 0;
const cases = document.querySelectorAll(".case");

function tour()
{
	i++;

	return i % 2 === 0 ? 'O' : 'X';
}

function afficherGagnant(gagant)
{
	alert(`${gagant} gagné !`);
	cases.forEach(el => el.innerHTML = '');
}

function Gagner()
{
	/*LIGNE: */
		if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) //ligne1
		{
			afficherGagnant(cases[0].innerHTML);
		}
		else if(cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML)
		{
			afficherGagnant(cases[3].innerHTML);
		}
		else if(cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML)
		{
			afficherGagnant(cases[6].innerHTML);
		}
	/*COLONE:*/
		else if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML)
		{
			afficherGagnant(cases[0].innerHTML);		
		}
		else if(cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML)
		{
			afficherGagnant(cases[1].innerHTML);	;
		}
		else if(cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML)
		{
			afficherGagnant(cases[2].innerHTML);	
		}
	/*DIAGONALE: */
		else if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML)
		{
			afficherGagnant(cases[0].innerHTML);	
		}
		else if(cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML)
		{
			afficherGagnant(cases[2].innerHTML);	
		}
}


function jouer()
{
	if (!this.innerHTML) 
	{
		this.innerHTML = tour();
	}
	else
	{
		alert("");
	}

	Gagner();
}

cases.forEach(el => el.addEventListener("click", jouer));