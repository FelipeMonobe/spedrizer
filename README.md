Programa para gerar XLSX de arquivos gerados no programa SPED.
Este programa respeita a ordem do arquivo TXT original, logo
se houver hierarquia de códigos, os códigos filhos virão na
sequência do seu respectivo pai, e o último irmão delimitará
a presença do próximo pai.
O arquivo XLSX é gerado na raiz do projeto com o padrão de nome
"extracao_<codigo de data>.xlsx".
Good SPEDing.

PS: Não esquecer de escapar espaçamentos no argumento do caminho
do arquivo (como demonstrado no exemplo abaixo).

USO:
sintaxe geral:
node index.js <caminho do arquivo txt> <código do pai> [<código do primeiro filho>, <código do segundo filho>, ...]

único código:
node index.js /home/amonobe/Documentos/Profissional/Pessoas\ Jurídicas/Helm/Arquivos/EFD-C/2017/4T/piscof1017v6.txt C100

múltiplos códigos:
node index.js /home/amonobe/Documentos/Profissional/Pessoas\ Jurídicas/Helm/Arquivos/EFD-C/2017/4T/piscof1017v6.txt C500 C501 C505
