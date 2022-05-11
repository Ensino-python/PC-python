const integrantes = document.querySelector('.integrantes');



const pessoas = [
	{
		"name": "Blenda Gabrielly Souza Morais",
		"email": "blenda.gabrielly@estudante.ifgoiano.edu.br",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K9311917P7",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/0935318257015270"
	},
	{
		"name": "Davi Ribeiro Sampaio",
		"email": "davi.ribeiro@estudante.ifgoiano.edu.br",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8644073H2",
		"Formação": "Licenciando em Quimica - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/6088355010556031"
	},
	{
		"name": "Filipe Jesus Portilho",
		"email": "filipe.portilho@estudante.ifgoiano.edu.br",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2896710A9",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/4882730468480550"
	},
	{
		"name": "Gabriel Faria Carmo Oliveira",
		"email": "gabriel.faria@estudante.ifgoiano.edu.br",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8041831Y9",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": " http://lattes.cnpq.br/2815580279162008"
	},
	{
		"name": "Guilherme Carvalho Franco",
		"email": "guilherme.carvalho@estudante.ifgoiano.edu.br",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2871377U8",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/0747615806741497"
	},
	{
		"name": "Jheovana Hayssa Ferreira Santos",
		"email": "jheovana.ferreira@estudante.ifgoiano.edu.br",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K9534846E0",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/4451837998239178"
	},
	{
		"name": "Mateus Barros Macedo",
		"email": "mateus.barros@estudante.ifgoiano.edu.br",
		"instagram": "https://www.instagram.com/mateusbmm/",
		"image_path": "images/user.svg",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/1193473969400253"
	},
	{
		"name": "Murillo Santos de Castro",
		"email": "murillo.castro@estudante.ifgoiano.edu.br",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K9534950A2",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/0084418328372648"
	},
	{
		"name": "Newarney Torrezao da Costa",
		"email": "newarney.costa@ifgoiano.edu.br",
		"instagram": "https://www.instagram.com/mateusbmm/",
		"image_path": "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4416169D5",
		"Formação": "Doutorando em Ciência da Computação - UFU",
		"lattes_url": "http://lattes.cnpq.br/4986407746430136"
	},
	{
		"name": "Pedro Raphael Inácio Gomes",
		"email": "pedro.gomes@estudante.ifgoiano.edu.br",
		"image_path": "images/user.svg",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/2047017170310483"
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

