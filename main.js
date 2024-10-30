class Cxmsg {
  static cor = "#888"
  static destino = null
  static divmsg = null
  static tipo = null
  static comando_sn = null
  static textos = []

  static mostrar = (config, titulo, texto) => {
    this.destino = document.body
    this.titulo = titulo
    this.texto = texto
    this.cor = config.cor
    this.tipo = config.tipo 
    this.comando_sn = config.comando_sn
    this.textos = config.textos

    this.divmsg = document.createElement("div");
    const estilo_divcxmsg =
      "display: flex;" +
      "justify-content: center;" +
      "align-items: center;" +
      "position: absolute;" +
      "top: 0px;" +
      "left: 0px;" +
      "width: 100%;" +
      "height: 100vh;" +
      "background-color: rgba(0,0,0,0.7);"
    this.divmsg.setAttribute("id", "divcxmsg");
    this.divmsg.setAttribute("style", estilo_divcxmsg);
    this.destino.prepend(this.divmsg)

    const estilo_areaCxmsg =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: flex-start;" +
      "flex-direction: column;" +
      "width: 300px;"
    const areaCxmsg = document.createElement("div")
    areaCxmsg.setAttribute("style", estilo_areaCxmsg);
    this.divmsg.appendChild(areaCxmsg)

    const estilo_tituloCxmsg =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "background-color:" + this.cor + ";" +
      "width: 100%;" +
      "color: #ffffff;" +
      "padding: 5px;" +
      "border-radius: 5px 5px 0px 0px;"

    const tituloCxmsg = document.createElement("div")
    tituloCxmsg.setAttribute("style", estilo_tituloCxmsg);
    tituloCxmsg.innerHTML = this.titulo;
    areaCxmsg.appendChild(tituloCxmsg)

    const estilo_corpoCxmsg =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "background-color: #eeeeee;" +
      "width: 100%;" +
      "color: #000000;" +
      "padding:30px 5px;"

    const corpoCxmsg = document.createElement("div")
    corpoCxmsg.setAttribute("style", estilo_corpoCxmsg);
    corpoCxmsg.innerHTML = this.texto;
    areaCxmsg.appendChild(corpoCxmsg)


    const estilo_rodapeCxmsg =
      "display: flex;" +
      "justify-content: space-around;" +
      "align-items: center;" +
      "background-color: #cccccc;" +
      "width: 100%;" +
      "color: #000000;" +
      "padding: 5px;" +
      "border-radius: 0px 0px 5px 5px;"

    const rodapeCxmsg = document.createElement("div")
    rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg);
    areaCxmsg.appendChild(rodapeCxmsg)



    const estilo_botaoCxmsg =
      "background-color:" + this.cor + ";" +
      "cursor:pointer;" +
      "color: #ffffff;" +
      "padding: 10px 5px;" +
      "border-radius:5px;" +
      "text-transform:uppercase;"+
      "width: 100px"

    if (this.tipo == "ok") {
      const btn_ok = document.createElement("button");
      btn_ok.setAttribute("style", estilo_botaoCxmsg)
      btn_ok.innerText = "ok"
      btn_ok.addEventListener("click", (evt) => {
        this.ocultar()
      })
      rodapeCxmsg.appendChild(btn_ok)
    }else if(this.tipo == "sn"){
      const btn_sim = document.createElement("button");
      btn_sim.setAttribute("style", estilo_botaoCxmsg)
      btn_sim.innerText = this.textos[0]
      btn_sim.addEventListener("click", (evt) => {
        this.ocultar()
      })
      rodapeCxmsg.appendChild(btn_sim)
      
      const btn_nao = document.createElement("button");
      btn_nao.setAttribute("style", estilo_botaoCxmsg)
      btn_nao.innerText =this.textos[1]
      btn_nao.addEventListener("click", (evt) => {
        this.ocultar()
      })
      rodapeCxmsg.appendChild(btn_nao)
    }

  }

  static ocultar = () => {
    this.divmsg.remove()
  }
}

export { Cxmsg }