// Padrão de Projeto Singleton - GoF and Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

// const db1 = new Database('localhost', 'root', '123456'); N funciona pois o construtor é privado.
const db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect();

const db2 = Database.getDatabase("localhost", "root", "123456");
db2.connect();

console.log(db1 === db2) // True

// Explicação: 
// Quando eu chamar a Database pela primeira vez ele vai criar a data base.
// Já nas vezes posteriores ele vai me entregar a data base ja criada.
// Isso evita mais de uma conexão com uma base de dados.