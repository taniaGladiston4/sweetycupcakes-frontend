export default({
    state: {
        cupcakes: [],
        cart: [],
    },
    mutations: {
        ADD_CUPCAKE(state, cupcakes) {
            state.cupcakes = cupcakes
        },
        ADD_CUPCAKE_TO_CART(state, id) {
            state.cart.push(id)
        },
        REMOVE_CUPCAKE_FROM_CART(state, id) {
            state.cart.splice(state.cart.indexOf(id), 1)
        },
    },
    actions: {
        getCupcakes(context) {
            const items = [
                { id: 0,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 1,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 2,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 3,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 4,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
                { id: 5,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 6,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 7,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 8,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 9,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
                { id: 10,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 11,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 12,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 13,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 14,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
                { id: 15,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 16,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 17,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 18,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 19,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
              ]
            context.commit('ADD_CUPCAKE', items)
        },
        addCupcakeToCart(context, id) {
            const items = [
                { id: 0,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 1,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 2,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 3,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 4,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
                { id: 5,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 6,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 7,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 8,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 9,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
                { id: 10,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 11,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 12,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 13,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 14,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
                { id: 15,name: "Cupcake Morango", img: "cupcake1.png", oldValue: 20.00, newValue: 10.99 },
                { id: 16,name: "Cupcake Creme", img: "cupcake2.png", oldValue: 20.00, newValue: 10.99 },
                { id: 17,name: "Cupcake Brigadeiro", img: "cupcake3.png", oldValue: 20.00, newValue: 10.99 },
                { id: 18,name: "Cupcake com Recheio de Ninho", img: "cupcake4.png", oldValue: 20.00, newValue: 10.99 },
                { id: 19,name: "Cupcake Especial de Natal", img: "cupcake5.png", oldValue: 20.00, newValue: 10.99 },
              ]
            context.commit('ADD_CUPCAKE_TO_CART', items[id])
        },
        removeCupcakeFromCart(context, id) {
            context.commit('REMOVE_CUPCAKE_FROM_CART', id)
        },
    },
    getters: {
        cupcakes(state) {
            return state.cupcakes
        },
        cart(state) {
            return state.cart
        }
    },
})