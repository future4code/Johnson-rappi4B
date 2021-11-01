import React from "react";
import { ErrorPageContainer } from "./styled";

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <h3>Página não encontrada</h3>
      <iframe
        src="https://giphy.com/embed/lqFHf5fYMSuKcSOJph"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
        title="Gif de Erro"
      ></iframe>
        </ErrorPageContainer>
 )
}

export default ErrorPage;