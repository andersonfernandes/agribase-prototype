import {Table} from "@mantine/core"

export default function Financas() {
  const elements = [
    {culture: 'Abacaxi', value: 330.0, unit: 100},
    {culture: 'Banana', value: 30.0, unit: 100},
    {culture: 'Laranja', value: 25.0, unit: 100},
    {culture: 'Mamão', value: 37.5, unit: '15Kg'},
    {culture: 'Manga', value: 65.0, unit: '24Kg'},
    {culture: 'Melancia', value: 15.0, unit: '15Kg'},
  ];
  const rows = elements.map((element) => (
    <tr key={element.culture}>
      <td>{element.culture}</td>
      <td>{element.unit}</td>
      <td>{`R$ ${element.value}`}</td>
    </tr>
  ))

  return (
    <>
      <h1>Finanças</h1>

      <Table>
        <thead>
          <tr>
            <th>Cultura</th>
            <th>Unidade</th>
            <th>Valor médio de mercado</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <small>Atualizado em: 28 de Junho de 2022</small>
    </>
  )
}
