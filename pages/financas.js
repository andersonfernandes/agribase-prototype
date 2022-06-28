import {Table} from "@mantine/core"

export default function Financas() {
  const elements = [
    {culture: 'Abacaxi', value: 12.5},
    {culture: 'Banana', value: 13.5},
    {culture: 'Laranja', value: 14.5},
    {culture: 'Mamão', value: 15.5},
    {culture: 'Manga', value: 16.5},
    {culture: 'Melancia', value: 17.5},
  ];
  const rows = elements.map((element) => (
    <tr key={element.culture}>
      <td>{element.culture}</td>
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
            <th>Valor médio de marcado</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  )
}
