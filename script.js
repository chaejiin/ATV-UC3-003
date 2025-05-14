let nome;
let salario;
let vendas;
let percentualComissao;
let comissao;
let pagamentoTotal;
let mensagem;

nome = prompt("Digite o nome do vendedor:");
salario = parseFloat(prompt("Digite o valor do salário (R$):"));
vendas = parseFloat(prompt("Digite o valor total das vendas (R$):"));

if (vendas > 3000) {
  percentualComissao = 15;
} else if (vendas >= 1500) {
  percentualComissao = 10;
} else {
  percentualComissao = 5;
}

comissao = vendas * (percentualComissao / 100);
pagamentoTotal = salario + comissao;

mensagem  = "===== RELATÓRIO DE PAGAMENTO =====\n";
mensagem += "Nome do vendedor: " + nome + "\n";
mensagem += "Valor das vendas: R$ " + vendas.toFixed(2) + "\n";
mensagem += "Percentual da comissão: " + percentualComissao + "%\n";
mensagem += "Valor da comissão: R$ " + comissao.toFixed(2) + "\n";
mensagem += "Salário base: R$ " + salario.toFixed(2) + "\n";
mensagem += "Pagamento total: R$ " + pagamentoTotal.toFixed(2);

alert(mensagem);