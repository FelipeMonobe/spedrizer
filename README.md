Programa para salvar em MongoDB arquivos gerados no programa SPED.
Este programa respeita a ordem do arquivo TXT original, logo
se houver hierarquia de códigos, os códigos filhos virão na
sequência do seu respectivo pai, e o último irmão delimitará
a presença do próximo pai.
Será criado uma instância 'spedrizer' com o nome da coleção no
formato "extracao_<codigo de data>". O número de conexões com
o banco de dados é opcional, sendo 5 o valor padrão.
Good SPEDing.

PS: Não esquecer de escapar espaçamentos no argumento do caminho
do arquivo (como demonstrado no exemplo abaixo).

USO:
formato da sintaxe:
node index.js <caminho do arquivo txt> <quantidade de conexões no banco>

execução padrão (5 conexões):
node index.js /home/xinube/Meus \Documentos/sped.txt

estabelecendo 10 conexões com o banco (pode ser mais rápido):
node index.js /home/xinube/Meus \Documentos/sped.txt 10