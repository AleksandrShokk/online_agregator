import type { LibraryEntryResponseStatus, TitleListItemResponseType } from '../../api/src/generated/models'

export const STATUS_LABELS: Record<LibraryEntryResponseStatus, string> = {
  PLANNED: 'Planned',
  IN_PROGRESS: 'In progress',
  COMPLETED: 'Completed',
  ON_HOLD: 'On hold',
  DROPPED: 'Dropped'
}

export const TYPE_LABELS: Record<TitleListItemResponseType, string> = {
  MOVIE: 'Movie',
  TV_SHOW: 'Series',
  GAME: 'Game',
  BOOK: 'Book',
  ANIME: 'Anime'
}
