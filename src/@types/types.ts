export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export interface SidebarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}
