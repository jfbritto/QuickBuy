using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            builder.HasKey(i => i.Id);

            //builder utiliza o padrao fluit
            builder
                .Property(i => i.ProdutoId)
                .IsRequired();
            
            builder
                .Property(i => i.Quantidade)
                .IsRequired();
            
            
        }
    }
}
