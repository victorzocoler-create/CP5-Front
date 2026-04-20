// seção 1 //
function irPara() {
  window.location.href = "#section2";
}

// seção 2 //
const itens = document.querySelectorAll(".item");
const seta = document.querySelector(".seta");

itens.forEach(item => {
  item.addEventListener("mouseenter", () => {
    seta.style.top = item.offsetTop + "px";
  });
});

// ==================== SEÇÃO 3 - FILTRO ====================
const filtros = document.querySelectorAll('.pokemon-filters li');
const pokemons = document.querySelectorAll('.pokemon-item');

filtros.forEach(filtro => {
  filtro.addEventListener('click', () => {
    filtros.forEach(item => item.classList.remove('active'));
    filtro.classList.add('active');

    const tipo = filtro.getAttribute('data-filter');

    pokemons.forEach(pokemon => {
      const pokemonTipo = pokemon.getAttribute('data-type');

      if (tipo === 'todos' || pokemonTipo === tipo) {
        pokemon.style.display = 'flex';
      } else {
        pokemon.style.display = 'none';
      }
    });
  });
});

// ==================== SEÇÃO 3 - MODAL ====================
function abrirModal(nome, altura, peso, categoria, tipo, habilidade, fraqueza, evo1, evo2, evo3) {
  document.getElementById('modalNome').textContent = nome;
  document.getElementById('modalAltura').textContent = altura;
  document.getElementById('modalPeso').textContent = peso;
  document.getElementById('modalCategoria').textContent = categoria;
  document.getElementById('modalTipo').textContent = tipo;
  document.getElementById('modalHabilidade').textContent = habilidade;
  document.getElementById('modalFraqueza').textContent = fraqueza;

  document.getElementById('evo1').src = evo1;
  document.getElementById('evo2').src = evo2;
  document.getElementById('evo3').src = evo3;

  document.getElementById('pokemonModal').classList.add('show');
}

function fecharModal() {
  document.getElementById('pokemonModal').classList.remove('show');
}

window.addEventListener('click', function (event) {
  const modal = document.getElementById('pokemonModal');
  if (event.target === modal) {
    fecharModal();
  }
});

// seção 4 //
function atualizarCarta() {
  const nome = document.getElementById('nomeCarta').value;
  const vida = document.getElementById('vida').value;
  const ataque = document.getElementById('ataque').value;
  const categoria = document.getElementById('categoria').value;
  const resistencia = document.getElementById('resistencia').value;

  document.getElementById('cardName').textContent = nome || '???';
  document.getElementById('cardHp').textContent = vida || '—';
  document.getElementById('cardAtaque').textContent = ataque || '—';
  document.getElementById('cardCategoria').textContent = 'Tipo: ' + (categoria || '—');
  document.getElementById('cardResistencia').textContent = resistencia || '—';


  const card = document.getElementById('pokemonCard');
  card.style.transition = 'transform 0.3s ease';
  card.style.transform = 'scale(1.05) rotate(1deg)';
  setTimeout(() => {
    card.style.transform = 'scale(1) rotate(0deg)';
  }, 300);
}