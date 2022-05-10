const integrantes = document.querySelector('.integrantes');




const pessoas = [
	{
		"name": "Mateus Barros Macedo",
		"email": "mateus.barros@estudante.ifgoiano.edu.br",
		"instagram": "https://www.instagram.com/mateusbmm/",
		"description": "",
		"image_path": "images/user.svg",
		"mais_sobre": "...",
		"lattes_url": "http://lattes.cnpq.br/1193473969400253"
	},
	{
		"name": "Filipe Jesus Portilho",
		"email": "filipe.portilho@estudante.ifgoiano.edu.br",
		"instagram": "filipe ",
		"description": "",
		"image_path": "images/user.svg",
		"mais_sobre": "...",
		"lattes_url": "http://lattes.cnpq.br/1193473969400253"
	}
];

pessoas.forEach((pessoa) => {

	integrantes.innerHTML += `		
	<div class="card-professor">
		<img class="image-professor" src="${pessoa.image_path}">

		<div>
			<a href="${pessoa.lattes_url}" class="name-professor" target="_blank">${pessoa.name}</a>
		</div>
		
	</div>`
	
});

