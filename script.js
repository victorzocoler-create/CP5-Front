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