import { Button } from "./Button";


// INTERFACE -> ESTÁ NO APP.TSX
import { GenreResponseProps } from "../App";

interface GenreProps {
  onHandleAction: (id: number) => void;
  onGenreDate: GenreResponseProps[];
  onIdSelect: number;
}




export function SideBar({ onHandleAction, onGenreDate, onIdSelect}: GenreProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {onGenreDate.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onHandleAction(genre.id)}
            selected={onIdSelect === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}






















// FORMA APRENDIDA
// import { Button } from "./Button";

// import { GenreResponseProps } from "../App";

// interface SideBarProps {
//   genres: GenreResponseProps[];
//   selectGenreId: number;
//   handleClickButton: (id: number) => void;
// }

// export function SideBar({
//   genres,
//   selectGenreId,
//   handleClickButton,
// }: SideBarProps) {
//   return (
//     <nav className="sidebar">
//       <span>
//         Watch<p>Me</p>
//       </span>

//       <div className="buttons-container">
//         {genres.map((genre) => (
//           <Button
//             id={String(genre.id)}
//             title={genre.title}
//             iconName={genre.name}
//             onClick={() => handleClickButton(genre.id)}
//             selected={selectGenreId === genre.id}
//           />
//         ))}
//       </div>
//     </nav>
//   );
// }
