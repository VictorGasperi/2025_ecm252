const Redux = require('redux')
const { createStore, combineReducers } = Redux

// acao
const criarContrato = (nome, taxa) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            nome,
            taxa
        }
    }
}

// acao
const cancelarContratos = (nome) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: { nome }
    }
}

// acao
const solicitarCashback = (nome, valor) => {
    return {
        type: "SOLICITAR_CASHBACK",
        payload: {
            nome,
            valor
        }
    }
}

// reducer
const historicoDePedidosCashback = (historicoDePedidosCashbackAtual = [], acao) => {
    return acao.type === "SOLICITAR_CASHBACK" ? [...historicoDePedidosCashbackAtual, acao.payload] : historicoDePedidosCashbackAtual
}

// reducer
const caixa = function (dinheiroEmCaixa = 0, acao) {

    return acao.type === "SOLICITAR_CASHBACK" 
    ? dinheiroEmCaixa - acao.payload.valor
    : acao.type === "CRIAR_CONTRATO"
    ? dinheiroEmCaixa + acao.payload.taxa
    : dinheiroEmCaixa

}

// reducer
const contratos = (listaDeContratosAtual = [], acao) => {
    return acao.type === "CRIAR_CONTRATO"
    ? [...listaDeContratosAtual, acao.payload]
    : acao.type === "CANCELAR_CONTRATO"
    ? listaDeContratosAtual.filter( c => c.nome !== acao.payload.nome )
    : listaDeContratosAtual
}

const todosOsReducers = combineReducers({
    historicoDePedidosCashback, 
    caixa,
    contratos
})

const store = createStore(todosOsReducers)

store.subscribe(() => console.log('Estado atual: ' + JSON.stringify(store.getState())))

store.dispatch(criarContrato('José', 100))
store.dispatch(criarContrato('Maria', 200))
store.dispatch(solicitarCashback('José', 10))
store.dispatch(cancelarContratos('Maria'))