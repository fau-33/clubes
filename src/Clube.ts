import Quadra from "./Quadra";

class Clube {
    private quadras: Quadra[] = [];

    public adicionarQuadra(quadra: Quadra) {
        this.quadras.push(quadra);
    }

    public buscarQuadras<T extends Quadra>(index: number): T {
        return this.quadras[index] as T;
    }
}

export default Clube;