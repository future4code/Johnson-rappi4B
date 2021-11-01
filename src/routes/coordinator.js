export const goToHomePage = (history) => {
    history.push("/home")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToProfilePage = (history) => {
    history.push("/perfil")
}

export const goToAddAddressPage = (history) => {
    history.push("/endereco")
}


export const goToRestaurantDetailsPage = (history,id) => {
    history.push(`/restaurante/${id}`)
}

export const goToActiveOrder = (history) => {
    history.push("/pedidos")
}

export const goToHistoryOrder = (history) => {
    history.push("/historico")
}

export const goToCartPage = (history, id) => {
    history.push(`/restaurante/${id}/pedido`)
}