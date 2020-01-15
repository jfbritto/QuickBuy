using System.Collections.Generic;

namespace QuickBuy.Entidades
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }

        //Um usuario pode ter um ou muitos pedidos
        public ICollection<Pedido> Pedidos { get; set; }
    }
}
