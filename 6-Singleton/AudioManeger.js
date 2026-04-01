class AudioManager {
    constructor() {
        //Primeira instancia -> cria
        //Próxima -> retorna o mesmo objeto
        if (AudioManager.instance) {
            return AudioManager.instance
        }

        this.volume = 50
        AudioManager.instance = this
    }

    setVolume(volume) {
        this.volume = volume
    }
}

//Cliente
const audio1 = new AudioManager()
const audio2 = new AudioManager()

audio1.setVolume(10)

console.log(audio2.volume)