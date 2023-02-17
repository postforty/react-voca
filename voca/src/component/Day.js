import dummy from "../db/data.json";

export default function Day() {
  const day = 1;
  const wordList = dummy.words.filter((word) => word.day === day);
  console.log(wordList);

  return (
    <>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// 6:14 React JS #9 더미 데이터 구현, map() 반복문 - 초보자를 위한 리액트 강좌
