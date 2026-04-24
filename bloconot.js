let btnSalvar = document.getElementById("btn-salvar");

      let textoGuardado = localStorage.getItem("meu_recado");
      if (textoGuardado !== null) {
        document.getElementById("caixa-texto").value = textoGuardado;
      }

      btnSalvar.addEventListener("click", function () {
        let caixaTexto = document.getElementById("caixa-texto").value;

        if (caixaTexto === "") {
           alert("area de texto vazio");
        } else {
          localStorage.setItem("meu_recado", caixaTexto);
          alert("salvo com sucesso");
        }
      });