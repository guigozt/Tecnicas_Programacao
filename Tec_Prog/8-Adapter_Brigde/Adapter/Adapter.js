// O que sua aplicação espera
class HeroDisplay {
    render(hero) {
        console.log(`Herói: ${hero.nomeReal} - Codinome: ${hero.alcunha}`);
    }
}

// API Legada da Wayne Enterprises (Incompatível)
class WayneAPI {
    getIdentity() {
        return { full_name: "Bruce Wayne", secret_name: "Batman" };
    }
}

// O ADAPTER
class WayneAdapter {
    constructor(wayneApi) {
        this.api = wayneApi;
    }

    // Traduz o formato esquisito para o que a gente usa
    get heroData() {
        const data = this.api.getIdentity();
        return {
            nomeReal: data.full_name,
            alcunha: data.secret_name
        };
    }
}

// Uso
const apiAntiga = new WayneAPI();
const adaptador = new WayneAdapter(apiAntiga);

const display = new HeroDisplay();
display.render(adaptador.heroData);