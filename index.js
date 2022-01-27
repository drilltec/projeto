import fs from "fs"

const arquivo = "./lista.csv" 
const conteudo = fs.readFileSync(arquivo, "utf-8")

const part = conteudo.split("\r\n")

const id = part.map((element, i) => {
    const teste = element.split(",") 
   return { id:teste[0], name: teste[1], preco:`R$${teste[2]}` }
})
const itens = id.shift()
console.log(id)

const salveJson = (inf, file) => {
    const parsI = JSON.stringify(inf)
    fs.writeFileSync(file, parsI)
}
salveJson(id, 'aruivo.json')