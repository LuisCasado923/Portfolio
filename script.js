function toggleMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  function mudarTexto(id, texto) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerText = texto;
    }
  }
  
  function mudarHTML(id, html) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerHTML = html;
    }
  }
  
  function mudarIdioma(idioma) {
    if (idioma === 'pt') {
      mudarTexto('nome', 'Luís Casado');
      mudarTexto('descricao', 'Estudante de Engenharia Informática');
      mudarTexto('universidade', 'Universidade Portucalense');
      mudarTexto('cidade', 'Mogadouro, Portugal');
      mudarTexto('btn-cta', 'Fala comigo');
      mudarTexto('link-sobre', 'Sobre mim');
      mudarTexto('link-habilidades', 'Habilidades');
      mudarTexto('link-projetos', 'Projetos');
      mudarTexto('link-contato', 'Contato');
      mudarTexto('sobre-titulo', 'Sobre Mim');
      mudarTexto('sobre-texto1', 'Oriundo da região de Trás-os-Montes, nutro um profundo apreço pelas minhas raízes, pela serenidade do ambiente rural e pelos valores que me foram incutidos desde cedo. A ligação à terra é uma constante na minha vida — nos fins de semana, dedico-me com entusiasmo à atividade agrícola em colaboração com a minha família, o que não só reforça os laços afetivos, como também me proporciona um sentido de propósito e pertença. Aprecio profundamente o funcionamento e a estética de maquinaria como tratores, automóveis e, em particular, motociclos, cuja mecânica e liberdade simbolizam, para mim, uma forma de expressão pessoal.');
      mudarTexto('sobre-texto2', 'Atualmente, resido na cidade do Porto, onde frequento a licenciatura em Engenharia Informática na Universidade Portucalense Infante Dom Henrique. Embora reconheça o dinamismo urbano como oportunidade de crescimento académico e profissional, é na tranquilidade do meio rural que encontro o verdadeiro equilíbrio. O meu percurso académico reflete o compromisso com a excelência, o rigor técnico e a vontade incessante de evoluir no domínio da tecnologia e do desenvolvimento digital.');
      mudarTexto('habilidades-titulo', 'Habilidades');
      mudarTexto('contato-titulo', 'Contato');
      mudarTexto('projetos-titulo', 'Projetos Académicos');
      mudarTexto('projeto1-titulo', '🔌 Configuração de Rede Empresarial');
      mudarTexto('projeto1-disciplina', 'Disciplina:');
      mudarTexto('projeto1-disciplina-nome', 'Redes de Computadores');
      mudarTexto('projeto1-desc', 'Desenvolvimento de um ambiente de rede corporativo, incorporando segmentação por VLANs, configuração de IPs estáticos e dinâmicos (via DHCP), bem como a aplicação de mecanismos de controlo de acessos.');
      mudarTexto('projeto2-titulo', '♻️ Plataforma para Combate ao Desperdício Alimentar');
      mudarTexto('projeto2-disciplinas', 'Disciplinas:');
      mudarTexto('projeto2-disciplina-nome', 'Programação Orientada a Objetos e Sistemas de Informação');
      mudarTexto('projeto2-desc', 'Conceção e execução de uma aplicação Java, inspirada na iniciativa Too Good To Go, com foco na sustentabilidade alimentar e boas práticas de engenharia de software.');
      mudarTexto('projeto3-titulo', '📚 Sistema de Gestão de Biblioteca');
      mudarTexto('projeto3-disciplina', 'Disciplina:');
      mudarTexto('projeto3-disciplina-nome', 'Laboratório de Programação');
      mudarTexto('projeto3-desc', 'Criação de uma solução completa em Java com base de dados SQL, comunicação via API REST e interface gráfica.');
      mudarTexto('projeto4-titulo', '⛽ Sistema de Gestão de Posto de Combustível (Em Desenvolvimento)');
      mudarTexto('projeto4-disciplinas', 'Disciplinas:');
      mudarTexto('projeto4-disciplina-nome', 'Laboratório de Tecnologias WEB, Compiladores e Engenharia de Software');
      mudarTexto('projeto4-desc', 'Conceção de sistema de gestão com funcionalidades completas: stocks, faturação, controlo de clientes.');
      mudarTexto('projeto5-titulo', '🐟 Sistema de Base de Dados para Atividade Piscatória');
      mudarTexto('projeto5-disciplina', 'Disciplina:');
      mudarTexto('projeto5-disciplina-nome', 'Bases de Dados');
      mudarTexto('projeto5-desc', 'Base de dados relacional completa para gestão do setor da pesca, com normalização até 3FN.');
      mudarTexto('projeto6-titulo', '🔧 Aplicação Web para Gestão de Posto de Combustível');
      mudarTexto('projeto6-disciplina', 'Disciplina:');
      mudarTexto('projeto6-disciplina-nome', 'Laboratório de Tecnologias Web');
      mudarTexto('projeto6-desc', 'Plataforma online moderna para gerir abastecimentos, vendas e stocks.');
      mudarTexto('projeto7-titulo', '🧑‍💻 Portfólio Pessoal Interativo');
      mudarTexto('projeto7-disciplina', 'Disciplina:');
      mudarTexto('projeto7-disciplina-nome', 'Laboratório de Tecnologias Web');
      mudarTexto('projeto7-desc', 'Criação deste portfólio responsivo, com HTML, CSS e JavaScript.');
      mudarHTML('contato-texto', 'Podes entrar em contacto comigo através do email: <a href="mailto:luisrcasado@hotmail.com" id="email-link">luisrcasado@hotmail.com</a>');
    } 
    else if (idioma === 'en') {
      mudarTexto('nome', 'Luis Casado');
      mudarTexto('descricao', 'Computer Engineering Student');
      mudarTexto('universidade', 'Portucalense University');
      mudarTexto('cidade', 'Mogadouro, Portugal');
      mudarTexto('btn-cta', 'Talk to me');
      mudarTexto('link-sobre', 'About me');
      mudarTexto('link-habilidades', 'Skills');
      mudarTexto('link-projetos', 'Projects');
      mudarTexto('link-contato', 'Contact');
      mudarTexto('sobre-titulo', 'About Me');
      mudarTexto('sobre-texto1', 'Originally from the Trás-os-Montes region, I have a deep appreciation for my roots, the serenity of the rural environment, and the values instilled in me from an early age. The connection to the land is a constant in my life — on weekends, I enthusiastically engage in agricultural activities with my family, which not only strengthens emotional bonds but also provides me with a sense of purpose and belonging. I deeply admire the functionality and aesthetics of machinery such as tractors, cars, and particularly motorcycles, whose mechanics and freedom symbolize, for me, a form of personal expression.');
      mudarTexto('sobre-texto2', 'Currently, I live in the city of Porto, where I am pursuing a degree in Computer Engineering at Portucalense University Infante Dom Henrique. While I recognize the urban dynamism as an opportunity for academic and professional growth, it is in the tranquility of the rural environment that I find true balance. My academic journey reflects a commitment to excellence, technical rigor, and an unceasing desire to evolve in the field of technology and digital development.');
      mudarTexto('habilidades-titulo', 'Skills');
      mudarTexto('contato-titulo', 'Contact');
      mudarTexto('projetos-titulo', 'Academic Projects');
      mudarTexto('projeto1-titulo', '🔌 Business Network Configuration');
      mudarTexto('projeto1-disciplina', 'Subject:');
      mudarTexto('projeto1-disciplina-nome', 'Computer Networks');
      mudarTexto('projeto1-desc', 'Development of a corporate network environment, including VLAN segmentation, static and dynamic IP configuration (via DHCP), and implementation of access control mechanisms.');
      mudarTexto('projeto2-titulo', '♻️ Platform to Fight Food Waste');
      mudarTexto('projeto2-disciplinas', 'Subjects:');
      mudarTexto('projeto2-disciplina-nome', 'Object-Oriented Programming and Information Systems');
      mudarTexto('projeto2-desc', 'Design and implementation of a Java application inspired by the Too Good To Go initiative, focusing on food sustainability and software engineering best practices.');
      mudarTexto('projeto3-titulo', '📚 Library Management System');
      mudarTexto('projeto3-disciplina', 'Subject:');
      mudarTexto('projeto3-disciplina-nome', 'Programming Laboratory');
      mudarTexto('projeto3-desc', 'Development of a complete solution in Java with SQL database, REST API communication, and graphical interface.');
      mudarTexto('projeto4-titulo', '⛽ Fuel Station Management System (In Development)');
      mudarTexto('projeto4-disciplinas', 'Subjects:');
      mudarTexto('projeto4-disciplina-nome', 'Web Technologies Laboratory, Compilers, and Software Engineering');
      mudarTexto('projeto4-desc', 'Design of a management system with full functionalities: stock control, invoicing, customer management.');
      mudarTexto('projeto5-titulo', '🐟 Database System for Fishing Activity');
      mudarTexto('projeto5-disciplina', 'Subject:');
      mudarTexto('projeto5-disciplina-nome', 'Databases');
      mudarTexto('projeto5-desc', 'Complete relational database for managing the fishing sector, normalized up to 3NF.');
      mudarTexto('projeto6-titulo', '🔧 Web Application for Fuel Station Management');
      mudarTexto('projeto6-disciplina', 'Subject:');
      mudarTexto('projeto6-disciplina-nome', 'Web Technologies Laboratory');
      mudarTexto('projeto6-desc', 'Modern online platform to manage fueling, sales, and inventory.');
      mudarTexto('projeto7-titulo', '🧑‍💻 Interactive Personal Portfolio');
      mudarTexto('projeto7-disciplina', 'Subject:');
      mudarTexto('projeto7-disciplina-nome', 'Web Technologies Laboratory');
      mudarTexto('projeto7-desc', 'Creation of this responsive portfolio using HTML, CSS, and JavaScript.');
      mudarHTML('contato-texto', 'You can contact me via email: <a href="mailto:luisrcasado@hotmail.com" id="email-link">luisrcasado@hotmail.com</a>');
    }
  }
  
  