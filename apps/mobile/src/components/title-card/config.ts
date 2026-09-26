import type { TitleListItemResponseType } from "@app/api/src/generated/models";
import { radius } from "@app/tokens";
import { BookOpen, Film, Gamepad2, Sparkles, Tv, type LucideIcon } from "lucide-react-native";

interface ICardConfig{

    radius: number,
    icon: LucideIcon,
    stacked?: boolean,
    glow?: string,
    spine?: boolean
}
export const CARD_CONFIG: Record<TitleListItemResponseType, ICardConfig> = {
  MOVIE: {
    radius: radius.md,
    icon: Film
  },
  TV_SHOW: {

    radius: radius.md,
    icon: Tv,
    stacked: true
  },
  ANIME: {

    radius: radius.md,
    icon: Sparkles,
    glow: 'rgba(129, 65, 248, 0.6)'
  },
  BOOK: {

    radius: radius.sm,
    icon: BookOpen,
    spine: true
  },
  GAME: {

    radius: radius.lg,
    icon: Gamepad2
  }
}