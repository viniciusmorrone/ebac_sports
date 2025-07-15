import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens = [...state.itens, produto]
      }
    },
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (!state.favoritos.find((item) => item.id === favorito.id)) {
        state.favoritos = [...state.favoritos, favorito]
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.favoritos.find((item) => item.id === favorito.id)) {
        // Vasculha o array de favoritos, procurando se o item clicado está nele. Se o id do produto clicado for igual ao id encontrado nos favoritos, precisamos removê-lo. Faremos isso no bloco abaixo:
        const favoritosSemProduto = state.favoritos.filter(
          (item) => item.id !== favorito.id
        ) // Já que o produto foi encontrado na lista de favoritos e precisa ser removido, vamos criar uma variável para armazenar o array contendo o estado anterior à adição do item clicado aos favoritos, ou seja, o array sem o item clicado. Para isso filtramos apenas os itens que têm o id diferente do item clicado e os armazenamos no array favoritosComProduto que possui apenas itens favoritados

        state.favoritos = favoritosSemProduto
      }
    }
  }
})

export const {
  adicionarAoCarrinho,
  adicionarAosFavoritos,
  removerDosFavoritos
} = carrinhoSlice.actions

export default carrinhoSlice.reducer
