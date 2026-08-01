import { Pencil, Trash2, Eye, Power, Download } from "lucide-react";

export const actionIcons = {
  pencil: Pencil,
  trash: Trash2,
  eye: Eye,
  power: Power,
  download: Download,
};

export type ActionIcon = keyof typeof actionIcons;
