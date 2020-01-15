
namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            //if (string.IsNullOrEmpty(Email))
            //    AdicionarCritica("Crítica - Email não foi informado");

            //if (string.IsNullOrEmpty(Senha))
            //    AdicionarCritica("Crítica - Senha foi informada");
        }
    }
}
