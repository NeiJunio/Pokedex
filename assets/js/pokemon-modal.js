const modalContent = document.getElementById('modal-content');

function openModal(pokemon) {
    const htmlModal = `
        <div class="modal">
            <div class="modal-header">
                <img src="assets/icons/arrow-left.svg" alt="arrow-left" class="arrow-icon" onclick="closeModal()">
                <span class="number-pokemon ${pokemon.type}" id="number-pokemon">#${pokemon.number}</span>
                <img id="heart-favorite" class="heart-favorite" src="assets/icons/heart-favorite.svg" alt="heart-favorite" onclick="toggleFavorite()">
            </div>
    
            <div class="modal-body">
            
                <div class="modal-info ${pokemon.type}">  
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <div class="detail-img">
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                    </div>
                </div>

                <div class="modal-statistic">
                    <div class="statistic-row">
                        <span class="statistic-label">HP</span>
                        <span class="statistic-value">${pokemon.hp}</span>
                        <div class="statistic-progressBar">
                            <div class="progress-background">
                                <div class="progress ${pokemon.type}" style="width: ${pokemon.hp}%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="statistic-row">
                        <span class="statistic-label">Attack</span>
                        <span class="statistic-value">${pokemon.atk}</span>
                        <div class="statistic-progressBar">
                            <div class="progress-background">
                                <div class="progress ${pokemon.type}" style="width: ${pokemon.atk}%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="statistic-row">
                        <span class="statistic-label">Defense</span>
                        <span class="statistic-value">${pokemon.def}</span>
                        <div class="statistic-progressBar">
                            <div class="progress-background">
                                <div class="progress ${pokemon.type}" style="width: ${pokemon.def}%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="statistic-row">
                        <span class="statistic-label">Sp. Atk</span>
                        <span class="statistic-value">${pokemon.sAtk}</span>
                        <div class="statistic-progressBar">
                            <div class="progress-background">
                                <div class="progress ${pokemon.type}" style="width: ${pokemon.sAtk}%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="statistic-row">
                        <span class="statistic-label">Sp. Def</span>
                        <span class="statistic-value">${pokemon.sDef}</span>
                        <div class="statistic-progressBar">
                            <div class="progress-background">
                                <div class="progress ${pokemon.type}" style="width: ${pokemon.sDef}%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="statistic-row">
                        <span class="statistic-label">Speed</span>
                        <span class="statistic-value">${pokemon.spd}</span>
                        <div class="statistic-progressBar">
                            <div class="progress-background">
                                <div class="progress ${pokemon.type}" style="width: ${pokemon.spd}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="close" onclick="closeModal()">Fechar</button>
            </div>
        </div>`;
    
    modalContent.innerHTML = htmlModal;
    modalContent.classList.remove('hidden');
    
    // Obter referência ao botão closeButton depois que o modal é aberto
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeModal);
}

function closeModal() {
    modalContent.classList.add('hidden');
}

function toggleFavorite() {
    const heartImage = document.getElementById('heart-favorite');
    if (heartImage.src.includes('heart-favorite.svg')) {
        heartImage.src = 'assets/icons/heart-favorite-red.svg';
    } else {
        heartImage.src = 'assets/icons/heart-favorite.svg';
    }
}
