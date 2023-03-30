function smartphone(nome) {
    this.nome = nome;
    this.adquiriu = function () {
        console.log("Parabéns " + this.nome + " adquiriu um:");
    }
}

function iphone(nome, modelo, marca, preco) {
    this.modelo = modelo;
    this.marca = marca;
    this.preco = preco;

    smartphone.call(this, nome);
}

function android(nome, modelo, marca, preco) {
    this.modelo = modelo;
    this.marca = marca;
    this.preco = preco;
    smartphone.call(this, nome);
}

const cliente1 = new smartphone('Bruno');
const aparelho1 = new iphone("Bruno", "Iphone 14", "Apple", `R$ 15.000,00`);
cliente1.adquiriu();

console.log(cliente1);
console.log(aparelho1);


const cliente2 = new smartphone('Evellyn');
const aparelho2 = new android("Evellyn", "Galaxy z", "Samsung", `R$ 14.000,00`);
cliente2.adquiriu();

console.log(cliente2);
console.log(aparelho2);

const cliente3 = new smartphone('Bruna');
const aparelho3 = new iphone("Bruna", "Iphone 13", "Apple", `R$ 6.000,00`);
cliente3.adquiriu();

console.log(cliente3);
console.log(aparelho3);

const cliente4 = new smartphone('Yara');
const aparelho4 = new android("Yara", "Moto Edge 30", "Motorola", `R$ 7.000,00`);
cliente4.adquiriu();

console.log(cliente4);
console.log(aparelho4);

