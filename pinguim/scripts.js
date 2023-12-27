    const jokes = [
        "Porque é que os pinguins estão sempre tão bem vestidos? Porque usam smokings!",
        "O que acontece quando um grupo de pinguins faz uma festa? Transforma-se numa festa no gelo!",
        "Como os pinguins consertam seus móveis? Com um pinguim-entinho!",
        "O que diz um pinguim quando algo surpreendente acontece? É de gelar a espinha!",
        "Por que os pinguins são tão bons em desportos? Porque eles têm um excelente gelo-talento!",
        "Qual é o programa de TV favorito dos pinguins? Congelados de emoção",
        "Como é que os pinguins mantêm as suas casas seguras? Eles usam pingu-imperadores!",
        "O que diz um pinguim ao outro quando quer sair? Vamos dar uma volta no gelo!",
        "Por que os pinguins são tão bons em música? Porque têm excelentes notas no gelo!",
        "Como é que os pinguins se mantêm em contacto uns com os outros? Eles usam o pengu-phone!",
        "O que acontece quando um pinguim conta uma piada de mau gosto? Todos riem, mas é de frio!",
        "Por que os pinguins nunca são egoístas? Porque pensam sempre no coletivo!",
    ]

    let currentJokeIndex = 0;

    document.getElementById("joke-button").addEventListener("click", tellJoke);

    function tellJoke() {
        const jokeContainer = document.getElementById("joke-text");
        const jokeButton = document.getElementById("joke-button");

        if (currentJokeIndex < jokes.length) {
            jokeContainer.innerText = jokes[currentJokeIndex];
            jokeButton.innerText = "Contar piada";
            currentJokeIndex++;
        } else {
            jokeContainer.innerText = "Já não sei mais piadas!";
            jokeButton.innerText = "Repetir";
            currentJokeIndex = 0; // Reinicia o ciclo
        }
    }

    