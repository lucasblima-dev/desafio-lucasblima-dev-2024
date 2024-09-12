# RECINTOS DO ZOO
O projeto consiste em um teste da empresa **START DB** para a vaga de estágio. Abaixo está o que foi solicitado e algumas informações para entender o que foi feito e como foi feito.

## O DESAFIO
Olá! Você foi contratado para ajudar na organização de um zoológico.
Sua missão será construir a lógica para indicar os recintos onde novos animais se sintam confortáveis.

### RECINTOS EXISTENTES

 O zoológico possui os seguintes recintos disponíveis.

  | número    | bioma             | tamanho total |  animais existentes |
  |-----------|-------------------|---------------|---------------------|
  | 1         | savana            |   10          |   3 macacos         |
  | 2         | floresta          |    5          |   vazio             |
  | 3         | savana e rio      |    7          |  1 gazela           |
  | 4         | rio               |    8          |   vazio             |
  | 5         | savana            |    9          |  1 leão             |

### ANIMAIS

 O zoológico só está habilitado a tratar dos animais abaixo.
 A tabela mostra o espaço que cada indivíduo ocupa e em quais biomas se adapta.

  | espécie    | tamanho | bioma                |
  |------------|---------|----------------------|
  | LEAO       |   3     |  savana              |
  | LEOPARDO   |   2     |  savana              |
  | CROCODILO  |   3     |  rio                 |
  | MACACO     |   1     |  savana ou floresta  |
  | GAZELA     |   2     |  savana              |
  | HIPOPOTAMO |   4     |  savana ou rio       |

### REGRAS PARA ENCONTRAR UM RECINTO

1) Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo
2) Animais carnívoros devem habitar somente com a própria espécie
3) Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
4) Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
5) Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
6) Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
7) Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!).
Por exemplo, se chegar um lote de 12 macacos, não é possível colocar 6 em 2 recintos.

### ENTRADAS E SAÍDAS

1) O programa deve receber tipo e quantidade de animal (nessa ordem)
2) O programa deve retornar uma estrutura contendo a lista de todos os recintos viáveis ordenada pelo número do recinto (caso existam) e a mensagem de erro (caso exista)
3) A lista de recintos viáveis deve indicar o espaço livre que restaria após a inclusão do(s) animal(is) e o espaço total, no formato "Recinto nro (espaço livre: *valorlivre* total: *valortotal*)"
4) Caso animal informado seja inválido, apresentar erro "Animal inválido"
5) Caso quantidade informada seja inválida, apresentar erro "Quantidade inválida"
6) Caso não haja recinto possível, apresentar erro "Não há recinto viável"

### CONSTRUÇÃO DO PROJETO (CÓDIGOS E TESTES)
Mantive o arquivo principal *'recintos-zoo.js'*, respeitando a classe criada e o método *'analisaRecintos()'*. Com isso, foi criado um novo arquivo contendo uma nova classe com a lógica adicional. Ela possui dois métodos responsáveis por calcular o espaço livre de um recinto e verificar a compatibilidade do animal inserido com os já existentes.

Com relação aos testes, o que já veio com o projeto foi feito uma pequena alteação pois o código quebrava no teste mesmo que não devesse quebrar (está explicado no próprio arquivo). Já os testes criado por mim, serviu para checar informações a respeito da compatibilidade dos animais inseridos e o resultado esperado.

### CONSIDERAÇÕES FINAIS
Tudo feito nesse projeto, foi muito gratificante, pois precisei rever alguns conceitos nas minhas anotações. Além disso, precisei quebrar a cabeça com a lógica a respeito de animais confortáveis em mais de um recinto. 

Agradeço imensamente pela oportunidade e espero conseguir prosseguir!