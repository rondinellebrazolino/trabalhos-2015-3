SoundLib = function(){
	this.sons = {};
	this.ativo= {};
	this.canais = [];
	this.nroCanais=10;
	for (var i = 0 ; i < this.nroCanais; i++) {
		this.canais[i] = {
			audio: new Audio(),
			fim: -1
		}
	};

	this.load = function(nome, src){
		this.sons[nome] = new Audio(src);
		this.sons[nome].load();
	}

	this.play = function(nome, duracao){
		/*
		if(this.ativo[nome]) return;
		this.ativo[nome] = true;
		if(duracao){
			
			setTimeout(
				(function (that){
					return function(){
						that.ativo[nome] = false;
					}
				})(this), duracao);
				
		}
		*/
		var agora = new Date();
		for(i = 0; i < this.nroCanais; i++){
			var canal = this.canais[i];
			if(canal.fim < agora.getTime()){
				canal.audio.src = this.sons[nome].src;
				canal.fim = agora.getTime()+this.sons[nome].duration*1000;
				canal.audio.play();
				break;
			}

		}
	}

}