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

export const goToResultsPage = (history) => {
    history.push("/resultados")
}

export const goToCartPage = (history) => {
    history.push("/carrinho")
}