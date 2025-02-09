export class Personagem {
  email: string;
  idade: number;
  nome: string;
  senha: string;

  constructor(email: string, idade: number, nome: string, senha: string) {
    this.email = email;
    this.idade = idade;
    this.nome = nome;
    this.senha = senha;
  }
}
