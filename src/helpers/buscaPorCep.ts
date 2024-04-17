import axios from "axios";

export async function buscarPorCep(cep: string) {
    let viaCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    let ufECidade: any = {
        uf: "",
        cidade: ""
    }

    ufECidade.uf = viaCep.data.uf;
    ufECidade.cidade = viaCep.data.localidade;

    return ufECidade;
}